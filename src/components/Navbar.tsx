import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 backdrop-blur-md dark:border-zinc-800 navbar-carpet">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    <Image src="/logo.png" alt="X-Blogs-Archive" width={45} height={45} />
                </Link>
                <div className="flex items-center gap-6">
                    <Link
                        href="/dashboard"
                        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="https://github.com/Sigmabond01/x-blogs-archive"
                        target="_blank"
                        className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                        Want to get featured?
                    </Link>
                </div>
            </div>
        </nav>
    );
}
