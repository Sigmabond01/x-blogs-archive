import { useState } from "react";
import { PrefsState } from "../types/types";

export function useUserPreferences() {
    const [state, setState ] = useState<PrefsState>(() => {
        if(typeof window === "undefined") {
            return { bookmarks: [], readPosts: [], isLoaded: false };
        }

        const storedBookmarks = localStorage.getItem("x-blogs-bookmarks");
        const storedReadPosts = localStorage.getItem("x-blogs-read");

        return {
            bookmarks: storedBookmarks ? JSON.parse(storedBookmarks) : [],
            readPosts: storedReadPosts ? JSON.parse(storedReadPosts) : [],
            isLoaded: true,
        };
    });

    const toggleBookmark = (postId: string) => {
        const newBookmarks = state.bookmarks.includes(postId)
            ? state.bookmarks.filter((id) => id !== postId)
            : [...state.bookmarks, postId];
        
        setState((prev) => ({...prev, bookmarks: newBookmarks}));
        localStorage.setItem("x-blogs-bookmarks", JSON.stringify(newBookmarks));
    };

    const toggleReadStatus = (postId: string) => {
        const newReadPosts = state.readPosts.includes(postId)
            ? state.readPosts.filter((id) => id !== postId)
            : [...state.readPosts, postId];
        
        setState((prev) => ({ ...prev, readPosts: newReadPosts }));
        localStorage.setItem("x-blogs-read", JSON.stringify(newReadPosts));
    };

    return {
        ...state,
        toggleBookmark,
        toggleReadStatus
    };
}