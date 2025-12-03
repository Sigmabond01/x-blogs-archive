import { Creator } from '../types/types';

interface CreatorProfileProps {
    creator: Creator;
    postCount: number;
}

export default function CreatorProfile({ creator, postCount }: CreatorProfileProps) {
    return (
        <div className="mb-8 flex flex-col items-center gap-6 rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900/50 sm:flex-row sm:text-left">
            <img
                src={creator.avatarUrl}
                alt={creator.name}
                className="h-24 w-24 rounded-full bg-zinc-100 dark:bg-zinc-800"
            />
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {creator.name}
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400">@{creator.handle}</p>
                {creator.bio && (
                    <p className="mt-4 max-w-lg text-zinc-600 dark:text-zinc-300">{creator.bio}</p>
                )}
                <div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
                    <div className="text-sm">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{postCount}</span>{' '}
                        <span className="text-zinc-500 dark:text-zinc-400">Posts</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
