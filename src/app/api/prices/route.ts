import { NextResponse } from 'next/server';

export const revalidate = 60;

const YF_HEADERS = { 'User-Agent': 'Mozilla/5.0' };

async function fetchYF(symbol: string): Promise<{ usd: number | null; change: number | null }> {
  try {
    const r = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=2d`,
      { headers: YF_HEADERS, next: { revalidate: 120 } }
    );
    const d = await r.json();
    const meta = d?.chart?.result?.[0]?.meta;
    const price: number | null = meta?.regularMarketPrice ?? null;
    const prev: number | null = meta?.chartPreviousClose ?? null;
    const change = price && prev ? ((price - prev) / prev) * 100 : null;
    return { usd: price, change };
  } catch {
    return { usd: null, change: null };
  }
}

export async function GET() {
  try {
    const [cryptoRes, nvda, amzn, tsla, googl, msft, pltr, usdbrl, eurusd, eurbrl, gold] =
      await Promise.all([
        fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,blockstack,dog-go-to-the-moon-rune&vs_currencies=usd&include_24hr_change=true',
          { next: { revalidate: 60 } }
        ),
        fetchYF('NVDA'),
        fetchYF('AMZN'),
        fetchYF('TSLA'),
        fetchYF('GOOGL'),
        fetchYF('MSFT'),
        fetchYF('PLTR'),
        fetchYF('BRL=X'),
        fetchYF('EURUSD=X'),
        fetchYF('EURBRL=X'),
        fetchYF('GC=F'),
      ]);

    const c = await cryptoRes.json();

    return NextResponse.json({
      // Cryptos
      bitcoin:  { usd: c.bitcoin?.usd,                        change: c.bitcoin?.usd_24h_change },
      ethereum: { usd: c.ethereum?.usd,                       change: c.ethereum?.usd_24h_change },
      solana:   { usd: c.solana?.usd,                         change: c.solana?.usd_24h_change },
      stacks:   { usd: c.blockstack?.usd,                     change: c.blockstack?.usd_24h_change },
      dog:      { usd: c['dog-go-to-the-moon-rune']?.usd,     change: c['dog-go-to-the-moon-rune']?.usd_24h_change },
      // Forex
      usdbrl,
      eurusd,
      eurbrl,
      // Gold + Stocks
      gold,
      nvda,
      amzn,
      tsla,
      googl,
      msft,
      pltr,
    });
  } catch {
    return NextResponse.json({ error: 'failed' }, { status: 500 });
  }
}
