'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types/types';
import { api } from '../lib/api-client';
import { useUserPreferences } from '../hooks/useUserPreferences';

export default function DashboardPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const { bookmarks, readPosts, toggleBookmark, toggleReadStatus, isLoaded } = useUserPreferences();

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await api.getPosts();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const bookmarkedPosts = posts.filter((post) => bookmarks.includes(post.id));
    const readHistoryPosts = posts.filter((post) => readPosts.includes(post.id));

    if (loading || !isLoaded) {
        return (
            <div className="min-h-screen dark-noise">
                <Navbar />
                <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
                    {/* Header Skeleton */}
                    <div className="mb-12 space-y-3">
                        <div className="h-10 w-64 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                        <div className="h-5 w-96 animate-pulse rounded-lg bg-zinc-200/70 dark:bg-zinc-800/70" style={{ animationDelay: '100ms' }} />
                    </div>

                    {/* Stats Skeleton */}
                    <div className="mb-10 grid grid-cols-2 gap-4 sm:gap-6">
                        {[0, 1].map((i) => (
                            <div 
                                key={i}
                                className="h-32 animate-pulse rounded-2xl bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                                style={{ animationDelay: `${i * 150}ms` }}
                            />
                        ))}
                    </div>

                    {/* Section Skeleton */}
                    <div className="space-y-10">
                        {[0, 1].map((section) => (
                            <div key={section}>
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="h-8 w-8 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" style={{ animationDelay: `${section * 100}ms` }} />
                                    <div className="h-7 w-48 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" style={{ animationDelay: `${section * 100 + 50}ms` }} />
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    {[...Array(2)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="h-72 animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800" 
                                            style={{ animationDelay: `${section * 200 + i * 100}ms` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen dark-noise">
            <Navbar />
            <main className="mx-auto max-w-5xl px-4 py-10 pb-20 sm:px-6">
                {/* Header Section */}
                <div className="mb-12 space-y-3">
                    <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                        Dashboard
                    </h1>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Manage your bookmarks and reading history
                    </p>
                </div>

                {/* Stats Overview */}
                <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                    {/* Bookmarks Stat */}
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-700">
                        <div className="relative z-10">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <svg className="h-6 w-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Bookmarks</p>
                                    <p className="text-3xl text-black dark:text-white">{bookmarkedPosts.length}</p>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                {bookmarkedPosts.length === 0 ? 'Start saving your favorites' : 'Saved for later'}
                            </p>
                        </div>
                    </div>

                    {/* Read History Stat */}
                    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-700">
                        <div className="relative z-10">
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                                    <svg className="h-6 w-6 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Read</p>
                                    <p className="text-3xl text-black dark:text-white">{readHistoryPosts.length}</p>
                                </div>
                            </div>
                            <p className="text-sm text-zinc-500 dark:text-zinc-500">
                                {readHistoryPosts.length === 0 ? 'No posts read yet' : 'Articles completed'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bookmarked Posts Section */}
                <section className="mb-16">
                    <div className="mb-7 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <svg className="h-5 w-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-black dark:text-white sm:text-3xl">
                            Bookmarked Posts
                        </h2>
                    </div>
                    
                    {bookmarkedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {bookmarkedPosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    isBookmarked={true}
                                    isRead={readPosts.includes(post.id)}
                                    onToggleBookmark={toggleBookmark}
                                    onToggleRead={toggleReadStatus}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-16 text-center dark:border-zinc-800 dark:bg-black">
                            <div className="relative z-10">
                                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                    <svg className="h-10 w-10 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">No bookmarks yet</h3>
                                <p className="mx-auto max-w-sm text-zinc-600 dark:text-zinc-400">
                                    Start bookmarking posts to build your reading collection
                                </p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Read History Section */}
                <section>
                    <div className="mb-7 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800">
                            <svg className="h-5 w-5 text-black dark:text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-black dark:text-white sm:text-3xl">
                            Read History
                        </h2>
                    </div>
                    
                    {readHistoryPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {readHistoryPosts.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    isBookmarked={bookmarks.includes(post.id)}
                                    isRead={true}
                                    onToggleBookmark={toggleBookmark}
                                    onToggleRead={toggleReadStatus}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-16 text-center dark:border-zinc-800 dark:bg-black">
                            <div className="relative z-10">
                                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                    <svg className="h-10 w-10 text-zinc-400 dark:text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">No reading history</h3>
                                <p className="mx-auto max-w-sm text-zinc-600 dark:text-zinc-400">
                                    Posts you read will appear here for easy access
                                </p>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}