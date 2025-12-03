import Link from 'next/link';
import { BlogPost } from '../types/types';

interface BlogCardProps {
    post: BlogPost;
    isBookmarked: boolean;
    isRead: boolean;
    onToggleBookmark: (id: string) => void;
    onToggleRead: (id: string) => void;
}

const PlatformIcon = ({ platform }: { platform: string }) => {
    switch (platform) {
        case 'Medium':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
            );
        case 'Substack':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
            );
        case 'Hashnode':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M22.351 8.019l-6.39-6.39a4.478 4.478 0 00-6.335 0l-6.39 6.39a4.478 4.478 0 000 6.335l6.39 6.39a4.478 4.478 0 006.335 0l6.39-6.39a4.478 4.478 0 000-6.335zm-11.498 8.44l-4.285-4.285 4.285-4.285 4.285 4.285-4.285 4.285z" />
                </svg>
            );
        case 'Dev.to':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.96v14.08h24V4.96H0zm5.33 12.71V8.36h2.45c1.84 0 2.46.22 3.03 1.07.33.5.35.61.35 2.56 0 1.93-.02 2.08-.32 2.54-.58.89-1.22 1.14-2.95 1.14H5.33zm6.55 0V8.36h2.59v1.39h-1.25v1.86h1.14v1.34h-1.14v3.36h1.31v1.36h-2.65zm8.16 0V8.36h1.34l1.4 5.17 1.32-5.17h1.4v9.31h-1.34V12.9l-1.36 4.77h-1.41l-1.36-4.77v4.77h-1.34z" />
                </svg>
            );
        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            );
    }
};

export default function BlogCard({
    post,
    isBookmarked,
    isRead,
    onToggleBookmark,
    onToggleRead
}: BlogCardProps) {
    return (
        <div className={`group relative flex flex-col justify-between rounded-xl border p-6 transition-all ${isRead
            ? 'border-zinc-100 bg-zinc-50 opacity-75 dark:border-zinc-800 dark:bg-zinc-900/30'
            : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700'
            }`}>
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full bg-zinc-100 dark:bg-zinc-800"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{post.author.name}</span>
                            <a
                                href={`https://x.com/${post.author.handle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-zinc-500 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400"
                                onClick={(e) => e.stopPropagation()}
                            >
                                @{post.author.handle}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 relative z-10">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleBookmark(post.id);
                            }}
                            className={`text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 ${isBookmarked ? 'text-yellow-500 hover:text-yellow-600' : ''}`}
                            title={isBookmarked ? "Remove bookmark" : "Bookmark"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isBookmarked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleRead(post.id);
                            }}
                            className={`text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 ${isRead ? 'text-green-500 hover:text-green-600' : ''}`}
                            title={isRead ? "Mark as unread" : "Mark as read"}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <h3 className={`mt-4 text-lg font-semibold leading-snug ${isRead ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-900 group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400'}`}>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                        <span className="absolute inset-0" />
                        {post.title}
                    </a>
                </h3>

                {post.topics && post.topics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                        {post.topics.map((topic, index) => (
                            <span key={`${topic}-${index}`} className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10 dark:bg-zinc-800 dark:text-zinc-400 dark:ring-zinc-400/20">
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                        <PlatformIcon platform={post.platform} />
                        {post.platform}
                    </span>
                </div>
            </div>
        </div>
    );
}
