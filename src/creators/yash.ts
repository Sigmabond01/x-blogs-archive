import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'asyncyash',
    name: 'Yash ',
    avatarUrl: '/yash.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'DevOps Demystified',
        url: 'https://medium.com/@asyncyash/devops-demystified-d03d023536d8',
        platform: 'Medium',
        author: creator,
        topics: ['DevOps'],
    },
];
