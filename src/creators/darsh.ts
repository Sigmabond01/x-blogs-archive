import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'd4rsh_tw',
    name: 'D4rsh',
    avatarUrl: '/darsh.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'How to be a polymath',
        url: 'https://medium.com/@darshan11patil3/how-to-be-a-polymath-7e84464adf81',
        platform: 'Medium',
        author: creator,
        topics: ['Life'],
    },
    {
        title: 'Computer Networks 102: Protocols and Communication',
        url: 'https://medium.com/@darshan11patil3/computer-networks-102-protocols-and-communication-4f7fb7a00267',
        platform: 'Medium',
        author: creator,
        topics: ['Networking'],
    },
    {
        title: 'What is Machine Learning',
        url: 'https://medium.com/ai-in-plain-english/what-is-machine-learning-83e26b9d5eb2',
        platform: 'Medium',
        author: creator,
        topics: ['AI & ML'],
    },
];
