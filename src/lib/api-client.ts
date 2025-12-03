import { ALL_CREATORS, ALL_POSTS } from ".";
import { BlogPost, Creator } from "../types/types";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
    getPosts: async (): Promise<BlogPost[]> => {
        await delay(200);
        return ALL_POSTS;
    },

    //fetch creator
    getCreator: async (handle: string): Promise<Creator | undefined> => {
        await delay(300);
        return ALL_CREATORS.find((c) => c.handle.toLowerCase() === handle.toLowerCase());
    },

    //fetch posts
    getCreatorPosts: async (handle: string): Promise<BlogPost[]> => {
        await delay(500);
        return ALL_POSTS.filter((p) => p.author.handle.toLowerCase() === handle.toLowerCase());
    },

    //can include a searchbar field here for future
};