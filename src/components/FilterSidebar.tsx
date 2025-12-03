'use client';

import { Creator } from '../types/types';

interface FilterSidebarProps {
    topics: string[];
    creators: Creator[];
    selectedTopic: string | 'All';
    selectedCreator: string | 'All';
    onTopicChange: (topic: string | 'All') => void;
    onCreatorChange: (creatorHandle: string | 'All') => void;
}

export default function FilterSidebar({
    topics,
    creators,
    selectedTopic,
    selectedCreator,
    onTopicChange,
    onCreatorChange,
}: FilterSidebarProps) {
    return (
        <aside className="w-full space-y-8 md:w-64">
            <div>
                <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Topics</h3>
                <div className="space-y-1">
                    <button
                        onClick={() => onTopicChange('All')}
                        className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${selectedTopic === 'All'
                            ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                            }`}
                    >
                        All Topics
                    </button>
                    {topics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => onTopicChange(topic)}
                            className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${selectedTopic === topic
                                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                                }`}
                        >
                            {topic}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">Creators</h3>
                <div className="space-y-1">
                    <button
                        onClick={() => onCreatorChange('All')}
                        className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${selectedCreator === 'All'
                            ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                            : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                            }`}
                    >
                        All Creators
                    </button>
                    {creators.map((creator) => (
                        <button
                            key={creator.handle}
                            onClick={() => onCreatorChange(creator.handle)}
                            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${selectedCreator === creator.handle
                                ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                                : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100'
                                }`}
                        >
                            <img
                                src={creator.avatarUrl}
                                alt={creator.name}
                                className="h-5 w-5 rounded-full"
                            />
                            <span className="truncate">{creator.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}