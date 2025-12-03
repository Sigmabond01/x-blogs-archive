import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'hushhh',
    name: 'huhshal',
    avatarUrl: '/huhshal.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Build and Break, Issue #01',
        url: 'https://huhshal.substack.com/p/build-and-break-issue-01',
        platform: 'Substack',
        author: creator,
        topics: ['Backend'],
    },
    {
        title: 'Build and Break, Issue #02',
        url: 'https://huhshal.substack.com/p/build-and-break-issue-02',
        platform: 'Substack',
        author: creator,
        topics: ['Engineering'],
    },
    {
        title: 'Microservices Reality Check: Don’t Dump Your Monolith Yet!',
        url: 'https://huhshal.substack.com/p/microservices-reality-check-dont',
        platform: 'Substack',
        author: creator,
        topics: ['System Design'],
    },
];
