import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'bysfdev',
    name: 'Bastien',
    avatarUrl: '/bysfdev.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Caching 101',
        url: 'https://bastienyoussfi.dev/blog/cache-servers',
        platform: 'Personal',
        author: creator,
        topics: ['Backend', 'Web Dev'],
    },
    {
        title: 'Docker Fundamentals and the Magic Behind Containers',
        url: 'https://bastienyoussfi.dev/blog/docker',
        platform: 'Personal',
        author: creator,
        topics: ['Databases', 'Web Dev'],
    },
    {
        title: 'Discovery of Operating Systems',
        url: 'https://bastienyoussfi.dev/blog/operating-systems',
        platform: 'Personal',
        author: creator,
        topics: ['System Design', 'Web Dev'],
    },
];
