import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'AtharvaXDevs',
    name: 'Atharva',
    avatarUrl: '/atharva.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Lets understand Go Handle(r) family - last thing you need',
        url: 'https://atharvaxdevs.xyz/blogs/go-handler-family',
        platform: 'Personal',
        author: creator,
        topics: ['Backend', 'Programming'],
    },
];
