import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'earlyxbt',
    name: 'ari ',
    avatarUrl: '/ari.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'walking not to arrive, yet ever-arriving',
        url: 'https://liminalmotion.substack.com/p/walking-not-to-arrive-yet-ever-arriving',
        platform: 'Substack',
        author: creator,
        topics: ['Philosophy', 'Life'],
    },
    {
        title: 'The Mechanics of Intentionality',
        url: 'https://liminalmotion.substack.com/p/the-mechanics-of-intentionality',
        platform: 'Substack',
        author: creator,
        topics: ['Philosophy'],
    },
];
