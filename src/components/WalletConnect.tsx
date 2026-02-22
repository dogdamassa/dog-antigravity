'use client';

import React, { useState, useEffect } from 'react';
import { getAddress } from 'sats-connect';
import { Wallet, ShieldAlert, CheckCircle2, Copy, LogOut } from 'lucide-react';

export function WalletConnect() {
    const [address, setAddress] = useState<string | null>(null);
    const [network, setNetwork] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const connectWallet = async () => {
        setLoading(true);
        setError(null);
        try {
            const getAddressOptions = {
                payload: {
                    purposes: ['ordinals', 'payment'] as any,
                    message: 'Conectar ao $DOG Aggregator',
                    network: {
                        type: 'Mainnet'
                    } as any,
                },
                onFinish: (response: any) => {
                    const ordinalsAddress = response.addresses.find((addr: any) => addr.purpose === 'ordinals');
                    if (ordinalsAddress) {
                        setAddress(ordinalsAddress.address);
                        setNetwork('Mainnet');
                        localStorage.setItem('walletAddress', ordinalsAddress.address);
                    }
                    setLoading(false);
                },
                onCancel: () => {
                    setLoading(false);
                },
            };

            await getAddress(getAddressOptions);
        } catch (err: any) {
            setError('Houve um erro ao conectar a carteira.');
            setLoading(false);
        }
    };

    const disconnect = () => {
        setAddress(null);
        setNetwork(null);
        localStorage.removeItem('walletAddress');
    };

    useEffect(() => {
        const saved = localStorage.getItem('walletAddress');
        if (saved) {
            setAddress(saved);
            setNetwork('Mainnet');
        }
    }, []);

    const truncateAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

    return (
        <div className="flex flex-col gap-4">
            {!address ? (
                <button
                    onClick={connectWallet}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-dog-orange text-dog-dark font-bold rounded-xl hover:scale-105 transition-all shadow-lg shadow-dog-orange/20 disabled:opacity-50"
                >
                    <Wallet className="w-5 h-5" />
                    {loading ? 'Conectando...' : 'Conectar Xverse (opcional)'}
                </button>
            ) : (
                <div className="flex items-center gap-3 p-3 bg-dog-orange/10 border border-dog-orange/20 rounded-xl">
                    <div className="w-10 h-10 bg-dog-orange rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="text-dog-dark w-6 h-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold">{truncateAddress(address)}</span>
                        <span className="text-[10px] uppercase text-dog-orange font-bold font-display">{network}</span>
                    </div>
                    <button
                        onClick={disconnect}
                        className="ml-auto p-2 text-foreground/40 hover:text-red-500 transition-colors"
                        title="Sair"
                    >
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            )}

            {error && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    {error}
                </div>
            )}

            <div className="flex items-start gap-3 p-4 glass rounded-xl mt-2">
                <ShieldAlert className="w-5 h-5 text-dog-orange shrink-0 mt-0.5" />
                <p className="text-xs text-foreground/60 leading-relaxed">
                    <strong className="text-foreground">Autocustódia é soberania.</strong> Nunca compartilhe sua seed phrase com ninguém. O Aggregator não armazena suas chaves privadas.
                </p>
            </div>
        </div>
    );
}
