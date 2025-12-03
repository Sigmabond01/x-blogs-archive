'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import FilterBar from '../components/FilterBar';
import BlogCard from '../components/BlogCard';
import { BlogPost, Creator } from '../types/types';
import { api } from '../lib/api-client';
import { useUserPreferences } from '../hooks/useUserPreferences';

export default function MainPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const [selectedTopic, setSelectedTopic] = useState<string | 'All'>('All');
  const [selectedCreator, setSelectedCreator] = useState<string | 'All'>('All');
  const [selectedPlatform, setSelectedPlatform] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
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

  // Extract unique topics, creators, and platforms
  const { topics, creators, platforms } = useMemo(() => {
    const uniqueTopics = Array.from(new Set(posts.flatMap((p) => p.topics || []))).sort();
    const uniquePlatforms = Array.from(new Set(posts.map((p) => p.platform))).sort();

    const uniqueCreatorsMap = new Map<string, Creator>();
    posts.forEach((p) => {
      if (!uniqueCreatorsMap.has(p.author.handle)) {
        uniqueCreatorsMap.set(p.author.handle, p.author);
      }
    });
    const uniqueCreators = Array.from(uniqueCreatorsMap.values()).sort((a, b) => a.name.localeCompare(b.name));

    return { topics: uniqueTopics, creators: uniqueCreators, platforms: uniquePlatforms };
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((post) =>
        post.title.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.author.handle.toLowerCase().includes(query) ||
        post.platform.toLowerCase().includes(query) ||
        post.topics?.some(topic => topic.toLowerCase().includes(query))
      );
    }

    if (selectedTopic !== 'All') {
      result = result.filter((post) => post.topics?.includes(selectedTopic));
    }

    if (selectedCreator !== 'All') {
      result = result.filter((post) => post.author.handle === selectedCreator);
    }

    if (selectedPlatform !== 'All') {
      result = result.filter((post) => post.platform === selectedPlatform);
    }

    return result;
  }, [selectedTopic, selectedCreator, selectedPlatform, searchQuery, posts]);

  return (
    <div className="min-h-screen dark-noise">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            X-Blogs-Archive
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Curated links from your favorite creators on X
          </p>
        </div>

        <div className="flex justify-center">
          <FilterBar
            topics={topics}
            creators={creators}
            platforms={platforms}
            selectedTopic={selectedTopic}
            selectedCreator={selectedCreator}
            selectedPlatform={selectedPlatform}
            searchQuery={searchQuery}
            onTopicChange={setSelectedTopic}
            onCreatorChange={setSelectedCreator}
            onPlatformChange={setSelectedPlatform}
            onSearchChange={setSearchQuery}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-5xl">
            {loading || !isLoaded ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-48 animate-pulse rounded-xl bg-zinc-200 dark:bg-zinc-800"
                  />
                ))}
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
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
            ) : (
              <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 text-center dark:border-zinc-700 dark:bg-zinc-900/20">
                <p className="text-zinc-500 dark:text-zinc-400">No posts found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedTopic('All');
                    setSelectedCreator('All');
                    setSelectedPlatform('All');
                    setSearchQuery('');
                  }}
                  className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
