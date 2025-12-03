export type Platform = 'Medium' | 'Substack' | 'Personal' | 'Dev.to' | 'Hashnode' | 'Other';

export type PrefsState = {
  bookmarks: string[];
  readPosts: string[];
  isLoaded: boolean;
}

export interface Creator {
  handle: string;
  name: string;
  avatarUrl: string;
}

export interface BlogPostInput {
  id?: string;
  title: string;
  url: string;
  platform: Platform;
  author: Creator;
  topics?: string[];
}

export interface BlogPost extends BlogPostInput {
  id: string; // Required at runtime
}
