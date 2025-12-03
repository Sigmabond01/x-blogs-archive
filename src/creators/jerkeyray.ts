import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'jerkeyray',
    name: 'Jerkeyray',
    avatarUrl: '/jerkeyray.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'building a token bucket rate limiter in go',
        url: 'https://jerkeyray.hashnode.dev/building-a-token-bucket-rate-limiter-in-go',
        platform: 'Hashnode',
        author: creator,
        topics: ['System Design', 'Programming'],
    },
    {
        title: 'i built my own interpreter and its kinda cool',
        url: 'https://jerkeyray.hashnode.dev/i-built-my-own-interpreter-and-its-kinda-cool',
        platform: 'Hashnode',
        author: creator,
        topics: ['Programming'],
    },
    {
        title: 'CORS : The Browser Bouncers Explained',
        url: 'https://jerkeyray.hashnode.dev/cors-the-browser-bouncers-explained',
        platform: 'Hashnode',
        author: creator,
        topics: ['Web Dev'],
    },
];
