# X-Blogs-Archive

A curated collection of blog posts from your favorite creators on X (formerly Twitter). Browse, bookmark, and discover quality technical content from a community of creators.

## Features

- 🔍 **Smart Search** - Search across titles, authors, platforms, and topics
- 🏷️ **Multi-Filter System** - Filter by topic, creator, and platform
- 📚 **Personal Dashboard** - Bookmark posts and track your reading history
- 🌓 **Dark Mode** - Beautiful dark mode support
- 📱 **Responsive Design** - Works seamlessly on all devices
- 💾 **Persistent Storage** - Your bookmarks and reading history are saved locally

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/x-blogs-archive.git
cd x-blogs-archive
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom React components
- **State Management**: React Hooks
- **Storage**: LocalStorage for persistence

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── Navbar.tsx
│   ├── FilterBar.tsx
│   ├── BlogCard.tsx
│   └── ...
├── creators/         # Creator data files
│   ├── saksham.ts
│   ├── darsh.ts
│   └── ...
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and API
│   ├── api-client.ts
│   └── index.ts
└── types/            # TypeScript type definitions
    └── types.ts
```

## Contributing

We welcome contributions! Whether you want to add a new creator, suggest features, or fix bugs, please check out our [Contributing Guide](CONTRIBUTING.md).

### Quick Start for Contributors

1. **Add a New Creator**: See [Adding a New Creator](#adding-a-new-creator)
2. **Update Existing Content**: Edit files in `src/creators/`
3. **Submit Changes**: Create a pull request with your changes

## Adding a New Creator

1. Add the creator's profile picture to `public/` directory
2. Create a new file in `src/creators/` (e.g., `newcreator.ts`):

```typescript
import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'username',
    name: 'Full Name',
    avatarUrl: '/profile.jpg',
};

export const posts: BlogPostInput[] = [
    {
        title: 'Blog Post Title',
        url: 'https://example.com/post',
        platform: 'Medium',
        author: creator,
        topics: ['Programming', 'Web Dev'],
    },
];
```

3. Register in `src/lib/index.ts`:
```typescript
import * as newcreator from '../creators/newcreator'
// Add to modules array
const modules = [..., newcreator];
```

## Available Topics

- AI & ML
- Backend
- Databases
- DevOps
- Engineering
- History
- Life
- Networking
- Philosophy
- Programming
- Science
- System Design
- Web Dev

## Supported Platforms

- Medium
- Substack
- Hashnode
- Dev.to
- Personal Blogs

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/docs/) - JavaScript with syntax for types

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/x-blogs-archive)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - feel free to use this project for your own purposes.

## Support

If you find this project helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

## Acknowledgments

Thanks to all the creators who share their knowledge through blog posts, and to everyone who contributes to this archive.

---

Built with ❤️ by the community
