'use client';

import { useEffect, useState } from 'react';

interface AssetPrice {
  usd: number | null;
  change: number | null;
}

interface Prices {
  bitcoin: AssetPrice;
  ethereum: AssetPrice;
  solana: AssetPrice;
  stacks: AssetPrice;
  dog: AssetPrice;
  usdbrl: AssetPrice;
  eurusd: AssetPrice;
  eurbrl: AssetPrice;
  gold: AssetPrice;
  nvda: AssetPrice;
  amzn: AssetPrice;
  tsla: AssetPrice;
  googl: AssetPrice;
  msft: AssetPrice;
  pltr: AssetPrice;
}

type PriceKey = keyof Prices;

interface Asset {
  key: PriceKey;
  label: string;
  decimals: number;
  type: 'crypto' | 'forex' | 'stock';
  prefix?: string; // override prefix, e.g. 'R$' or ''
}

const ASSETS: Asset[] = [
  // ── Cryptos ──────────────────────────────
  { key: 'bitcoin',  label: 'BTC',      decimals: 0, type: 'crypto' },
  { key: 'ethereum', label: 'ETH',      decimals: 0, type: 'crypto' },
  { key: 'solana',   label: 'SOL',      decimals: 2, type: 'crypto' },
  { key: 'stacks',   label: 'STX',      decimals: 3, type: 'crypto' },
  { key: 'dog',      label: '$DOG',     decimals: 6, type: 'crypto' },
  // ── Forex ────────────────────────────────
  { key: 'usdbrl',   label: 'USD/BRL',  decimals: 2, type: 'forex', prefix: 'R$' },
  { key: 'eurusd',   label: 'EUR/USD',  decimals: 4, type: 'forex', prefix: '' },
  { key: 'eurbrl',   label: 'EUR/BRL',  decimals: 2, type: 'forex', prefix: 'R$' },
  // ── Gold + Stocks ─────────────────────────
  { key: 'gold',     label: 'XAU',      decimals: 0, type: 'stock' },
  { key: 'nvda',     label: 'NVDA',     decimals: 2, type: 'stock' },
  { key: 'amzn',     label: 'AMZN',     decimals: 2, type: 'stock' },
  { key: 'tsla',     label: 'TSLA',     decimals: 2, type: 'stock' },
  { key: 'googl',    label: 'GOOGL',    decimals: 2, type: 'stock' },
  { key: 'msft',     label: 'MSFT',     decimals: 2, type: 'stock' },
  { key: 'pltr',     label: 'PLTR',     decimals: 2, type: 'stock' },
];

// Group separators: before first forex and before first stock
const SECTION_BEFORE: Partial<Record<PriceKey, string>> = {
  usdbrl: 'FOREX',
  gold:   'MERCADOS',
};

function fmtPrice(val: number | null, asset: Asset): string {
  if (val == null) return '—';
  const prefix = asset.prefix !== undefined ? asset.prefix : '$';
  const formatted = val.toLocaleString('en-US', {
    minimumFractionDigits: asset.decimals,
    maximumFractionDigits: asset.decimals,
  });
  // For EUR/USD: just the number (no prefix)
  if (asset.key === 'eurusd') return formatted;
  return `${prefix}${formatted}`;
}

function fmtChange(c: number | null): string {
  if (c == null) return '';
  return `${c >= 0 ? '+' : ''}${c.toFixed(2)}%`;
}

export function PriceTicker() {
  const [prices, setPrices] = useState<Prices | null>(null);

  async function load() {
    try {
      const r = await fetch('/api/prices');
      if (r.ok) setPrices(await r.json());
    } catch { /* silent */ }
  }

  useEffect(() => {
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, []);

  const items: React.ReactNode[] = [];

  ASSETS.forEach((asset, i) => {
    const section = SECTION_BEFORE[asset.key];
    if (section) {
      // Section label separator
      items.push(
        <span key={`sec-${asset.key}`} className="inline-flex items-center mx-4">
          <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.1)', display: 'inline-block', marginRight: '14px' }} />
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em' }}>
            {section}
          </span>
          <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.1)', display: 'inline-block', marginLeft: '14px' }} />
        </span>
      );
    }

    const p = prices?.[asset.key];
    const change = p?.change ?? null;
    const changeColor = change == null
      ? 'rgba(255,255,255,0.25)'
      : change >= 0 ? '#4ade80' : '#f87171';

    items.push(
      <span key={asset.key} className="inline-flex items-center gap-1.5 mx-4">
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em' }}>
          {asset.label}
        </span>
        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '11px', fontWeight: 400 }}>
          {fmtPrice(p?.usd ?? null, asset)}
        </span>
        {change != null && (
          <span style={{ color: changeColor, fontSize: '10px', fontWeight: 600 }}>
            {fmtChange(change)}
          </span>
        )}
      </span>
    );

    // Dot separator between assets (same section)
    const nextAsset = ASSETS[i + 1];
    const isLastInSection = nextAsset && SECTION_BEFORE[nextAsset.key];
    const isLast = i === ASSETS.length - 1;
    if (!isLast && !isLastInSection) {
      items.push(
        <span key={`dot-${i}`} style={{ color: 'rgba(255,255,255,0.12)', fontSize: '10px' }}>·</span>
      );
    }
  });

  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: ticker-scroll 60s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="fixed top-0 left-0 right-0 z-[60] overflow-hidden flex items-center"
        style={{
          height: '28px',
          background: '#000000',
          borderBottom: '0.5px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000 40%, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000000 40%, transparent)' }} />

        <div className="ticker-track">
          {/* Duplicated for seamless loop */}
          {[0, 1].map(copy => (
            <span key={copy} className="inline-flex items-center">
              {items}
              {/* gap between copies */}
              <span style={{ display: 'inline-block', width: '60px' }} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
