import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'tm23twt',
    name: 'ƬⲘ ',
    avatarUrl: '/tm.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Learnings after coding GPT & Llama from scratch :)',
        url: 'https://medium.com/@tm23mdm/learnings-after-coding-gpt-llama-from-scratch-1fbdb664fb9b',
        platform: 'Medium',
        author: creator,
        topics: ['AI & ML'],
    },
    {
        title: 'My Nasa hackathon experience :)',
        url: 'https://medium.com/@tm23mdm/my-nasa-hackathon-experience-0be52b4dfce7',
        platform: 'Medium',
        author: creator,
        topics: ['Life', 'Science'],
    },
    {
        title: 'How do i read ml research papers :)',
        url: 'https://medium.com/@tm23mdm/how-do-i-read-ml-research-papers-aac7f442ff49',
        platform: 'Medium',
        author: creator,
        topics: ['AI & ML'],
    },
];
