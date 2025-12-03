'use client';

import { Creator } from '../types/types';

interface FilterBarProps {
    topics: string[];
    creators: Creator[];
    platforms: string[];
    selectedTopic: string | 'All';
    selectedCreator: string | 'All';
    selectedPlatform: string | 'All';
    searchQuery: string;
    onTopicChange: (topic: string | 'All') => void;
    onCreatorChange: (creatorHandle: string | 'All') => void;
    onPlatformChange: (platform: string | 'All') => void;
    onSearchChange: (query: string) => void;
}

export default function FilterBar({
    topics,
    creators,
    platforms,
    selectedTopic,
    selectedCreator,
    selectedPlatform,
    searchQuery,
    onTopicChange,
    onCreatorChange,
    onPlatformChange,
    onSearchChange,
}: FilterBarProps) {
    return (
        <div className="flex flex-col gap-6 py-4 w-full max-w-5xl">

            {/* Search */}
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    type="text"
                    className="block w-full rounded-xl border-0 bg-white py-3 pl-10 pr-4 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-600 dark:bg-zinc-900 dark:text-zinc-100 dark:ring-zinc-800 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-4">

                {/* Platforms */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Platforms:</span>
                    <button
                        onClick={() => onPlatformChange('All')}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                            selectedPlatform === 'All'
                                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                        }`}
                    >
                        All
                    </button>

                    {platforms.map((platform) => (
                        <button
                            key={platform}
                            onClick={() => onPlatformChange(platform)}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                selectedPlatform === platform
                                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                            }`}
                        >
                            {platform}
                        </button>
                    ))}
                </div>

                {/* Topics */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Topics:</span>

                    <button
                        onClick={() => onTopicChange('All')}
                        className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                            selectedTopic === 'All'
                                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                        }`}
                    >
                        All
                    </button>

                    {topics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => onTopicChange(topic)}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                selectedTopic === topic
                                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                            }`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>

                {/* Creators */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Creators:</span>

                    <button
                        onClick={() => onCreatorChange('All')}
                        className={`whitespace-nowrap text-sm font-medium transition-colors ${
                            selectedCreator === 'All'
                                ? 'text-zinc-900 underline decoration-2 underline-offset-4 dark:text-zinc-100'
                                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                        }`}
                    >
                        All
                    </button>

                    {creators.map((creator) => (
                        <button
                            key={creator.handle}
                            onClick={() => onCreatorChange(creator.handle)}
                            className={`flex items-center gap-1 mr-8 whitespace-nowrap text-sm font-medium transition-colors ${
                                selectedCreator === creator.handle
                                    ? 'text-zinc-900 underline decoration-2 underline-offset-4 dark:text-zinc-100'
                                    : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
                            }`}
                        >
                            <img
                                src={creator.avatarUrl}
                                alt={creator.name}
                                className="h-5 w-5 rounded-full"
                            />
                            {creator.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
