import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'VazeKshitij',
    name: 'kshitij vaze',
    avatarUrl: '/vaze.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'A Byte On Pixels Within An Embedded System',
        url: 'https://medium.com/@kshitijvaze/a-byte-on-pixels-within-an-embedded-system-020516c69fed',
        platform: 'Medium',
        author: creator,
        topics: ['Engineering'],
    },
    {
        title: 'What Really Happens When You Turn On Hotspot',
        url: 'https://medium.com/@kshitijvaze/what-really-happens-when-you-turn-on-hotspot-635824d68f8a',
        platform: 'Medium',
        author: creator,
        topics: ['Networking'],
    },
    {
        title: 'Notes on the working of DNS',
        url: 'https://medium.com/@kshitijvaze/notes-on-the-working-of-dns-483b4c4c6d75',
        platform: 'Medium',
        author: creator,
        topics: ['Networking', 'Web Dev'],
    },
];
