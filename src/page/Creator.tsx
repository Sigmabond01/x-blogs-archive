
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';
import CreatorProfile from '../components/CreatorProfile';
import { BlogPost, Creator } from '../types/types';
import { api } from '../lib/api-client';
import Link from 'next/link';
import { useUserPreferences } from '../hooks/useUserPreferences';

export default function CreatorPage() {
    const params = useParams();
    const handle = params.handle as string;

    const [creator, setCreator] = useState<Creator | null>(null);
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    const { bookmarks, readPosts, toggleBookmark, toggleReadStatus, isLoaded } = useUserPreferences();

    useEffect(() => {
        const fetchData = async () => {
            if (!handle) return;

            const [creatorData, postsData] = await Promise.all([
                api.getCreator(handle),
                api.getCreatorPosts(handle)
            ]);

            if (creatorData) {
                setCreator(creatorData);
            }
            setPosts(postsData);
            setLoading(false);
        };

        fetchData();
    }, [handle]);

    if (loading || !isLoaded) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-black">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <div className="h-48 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-64 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    if (!creator) {
        return (
            <div className="min-h-screen bg-zinc-50 dark:bg-black">
                <Navbar />
                <main className="container mx-auto flex flex-col items-center justify-center px-4 py-32 text-center">
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Creator not found</h1>
                    <Link href="/" className="mt-4 text-blue-600 hover:text-blue-500">
                        &larr; Back to Home
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <CreatorProfile creator={creator} postCount={posts.length} />

                <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Latest Posts
                </h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            isBookmarked={bookmarks.includes(post.id)}
                            isRead={readPosts.includes(post.id)}
                            onToggleBookmark={toggleBookmark}
                            onToggleRead={toggleReadStatus}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
