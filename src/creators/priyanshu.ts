import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'unsafezero',
    name: 'Priyanshu',
    avatarUrl: '/priyanshu.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Subnetting: A way to divide a network into smaller, manageable parts',
        url: 'https://blogs.priyanxhu.me/subnetting',
        platform: 'Personal',
        author: creator,
        topics: ['Networking'],
    },
    {
        title: 'Sharding: How Databases Scale with Data Partitioning',
        url: 'https://blogs.priyanxhu.me/sharding',
        platform: 'Personal',
        author: creator,
        topics: ['System Design', 'Databases'],
    },
];
