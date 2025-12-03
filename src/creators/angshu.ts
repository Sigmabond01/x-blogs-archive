import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'AngshumanSpace',
    name: 'Angshu',
    avatarUrl: '/angshu.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'The Moment Humans Found Their Voice: How Language Was Born',
        url: 'https://medium.com/@angshumankashyap69yap69/the-moment-humans-found-their-voice-how-language-was-born-7c57ded7b5c4',
        platform: 'Medium',
        author: creator,
        topics: ['History', 'Science'],
    },
];
