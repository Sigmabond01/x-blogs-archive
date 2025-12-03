import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'skshmgpt',
    name: 'saksham',
    avatarUrl: '/saksham.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'WebSockets 101 — Rolling your own Websocket Server',
        url: 'https://skshmgpt.medium.com/websockets-101-rolling-your-own-websocket-server-ac9191756b60',
        platform: 'Medium',
        author: creator,
        topics: ['Networking', 'Backend'],
    },
    {
        title: 'Why Your Internet Speed Fluctuates (And It’s Not Just ‘Bad WiFi’)',
        url: 'https://skshmgpt.medium.com/why-your-internet-speed-fluctuates-and-its-not-just-bad-wifi-4dd6c61ef5bf',
        platform: 'Medium',
        author: creator,
        topics: ['Networking'],
    },
    {
        title: 'The Math Behind LinkedIn’s Real-Time Social Network',
        url: 'https://skshmgpt.medium.com/the-math-behind-linkedins-real-time-social-network-4ccc62659503',
        platform: 'Medium',
        author: creator,
        topics: ['System Design'],
    },
];
