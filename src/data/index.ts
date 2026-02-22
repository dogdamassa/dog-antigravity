export interface Post {
    id: string;
    author: string;
    handle: string;
    avatar: string;
    content: string;
    likes: number;
    replies: number;
    reposts: number;
    date: string;
}

export const mockPosts: Post[] = [
    {
        id: '1',
        author: 'Dog da Massa',
        handle: '@dogdamassa',
        avatar: '🐕',
        content: 'Vamos fortalecer a $DOG com educação e autocustódia! #DOGArmy #Bitcoin',
        likes: 420,
        replies: 12,
        reposts: 69,
        date: '2h'
    },
    {
        id: '2',
        author: 'Soberano BTC',
        handle: '@soberanobtc',
        avatar: '🍊',
        content: 'O preço do Bitcoin é o que as pessoas pagam. O valor é o que elas levam (especialmente se for $DOG). HODL!',
        likes: 128,
        replies: 5,
        reposts: 21,
        date: '4h'
    },
    {
        id: '3',
        author: 'Ordinals Hunter',
        handle: '@ordinals_h',
        avatar: '🎨',
        content: 'Inscrições em satoshis são para sempre. $DOG é a pedra angular desse ecossistema. Não venda sua soberania.',
        likes: 256,
        replies: 18,
        reposts: 42,
        date: '6h'
    },
    {
        id: '4',
        author: 'Bitcoin Dog',
        handle: '@bitcoindog',
        avatar: '🐾',
        content: 'A paciência é a melhor amiga do investidor de $DOG. O longo prazo é inevitável.',
        likes: 88,
        replies: 3,
        reposts: 12,
        date: '8h'
    },
    {
        id: '5',
        author: 'Rune Master',
        handle: '@runemaster',
        avatar: '💎',
        content: 'Runes tornaram os tokens no Bitcoin simples e eficientes. $DOG lidera a corrida.',
        likes: 512,
        replies: 24,
        reposts: 88,
        date: '12h'
    }
];

export interface DogEvent {
    id: string;
    title: string;
    date: string;
    location: string;
    status: 'upcoming' | 'past';
    link?: string;
}

export const dogEvents: DogEvent[] = [
    {
        id: '1',
        title: 'DOG SUMMIT 2025',
        date: '2025',
        location: 'São Paulo, BR',
        status: 'upcoming',
        link: 'https://www.dogsummit.club/'
    },
    {
        id: '4',
        title: 'Bitcoin Las Vegas 2025',
        date: '2025',
        location: 'Las Vegas, NV',
        status: 'upcoming'
    },
    {
        id: '5',
        title: 'Bitcoin Summit 2025',
        date: '2025',
        location: 'Hong Kong',
        status: 'upcoming'
    },
    {
        id: '2',
        title: 'Bitcoin Conference Nashville',
        date: 'Julho, 2024',
        location: 'Nashville, TN',
        status: 'past'
    },
    {
        id: '3',
        title: 'Ordinals Rio',
        date: 'Maio, 2024',
        location: 'Rio de Janeiro, BR',
        status: 'past'
    }
];
