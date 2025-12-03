import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: '_khusheyyy',
    name: 'Khushi',
    avatarUrl: '/khushi.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'wormhole - the cosmic shortcut',
        url: 'https://medium.com/@_khusheyyy/wormhole-the-cosmic-shortcut-d80c55023adf',
        platform: 'Medium',
        author: creator,
        topics: ['Science'],
    },
    {
        title: 'ELON MUSK — from zero to the stars.',
        url: 'https://medium.com/@_khusheyyy/elon-musk-from-zero-to-the-stars-06c1149f5bbe',
        platform: 'Medium',
        author: creator,
        topics: ['Science', 'Life'],
    },
    {
        title: 'Virtualization — from physical to virtual.',
        url: 'https://medium.com/@_khusheyyy/virtualization-from-physical-to-virtual-d671ff4ab330',
        platform: 'Medium',
        author: creator,
        topics: ['Engineering'],
    },
];
