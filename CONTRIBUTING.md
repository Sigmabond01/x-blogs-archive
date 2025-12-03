# Contributing to X Blogs Archive

Thank you for your interest in contributing to X Blogs Archive! This guide will help you add new creators or update existing entries.

## Table of Contents

- [Adding a New Creator](#adding-a-new-creator)
- [Editing an Existing Creator](#editing-an-existing-creator)
- [Available Topics](#available-topics)
- [Supported Platforms](#supported-platforms)

## Adding a New Creator

To add a new creator to the archive, follow these steps:

### 1. Add Profile Picture

Place the creator's profile picture in the `public` directory. The image should be:
- Named after the creator's handle or name (e.g., `john.jpg`)
- Square aspect ratio (recommended)
- Reasonable file size (< 500KB)

### 2. Create Creator File

Create a new file in `src/creators/` named after the creator (e.g., `john.ts`).

Use this template:

```typescript
import { Creator, BlogPostInput } from '../types/types';

export const creator: Creator = {
    handle: 'johndoe',        // X (Twitter) handle without @
    name: 'John Doe',         // Display name
    avatarUrl: '/john.jpg',   // Path to profile pic in /public
};

export const posts: BlogPostInput[] = [
    {
        title: 'Your Blog Post Title',
        url: 'https://example.com/blog-post',
        platform: 'Medium',   // See supported platforms below
        author: creator,
        topics: ['Programming', 'Web Dev'],  // See available topics below
    },
    // Add more posts here...
];
```

### 3. Register the Creator

Open `src/lib/index.ts` and:

1. Import the new creator file:
```typescript
import * as john from '../creators/john'
```

2. Add it to the `modules` array:
```typescript
const modules = [saksham, darsh, angshu, tushar, ari, khushi, jerkeyray, priyanshu, yash, hushal, vaze, atharva, john];
```

### 4. Test Your Changes

Run the development server to verify everything works:

```bash
npm run dev
```

Visit `http://localhost:3000` and check:
- The creator appears in the creators filter
- All blog posts are displayed correctly
- The creator's profile page works (`/creator/[handle]`)

## Editing an Existing Creator

To update a creator's information or add/remove blog posts:

1. Navigate to `src/creators/`
2. Find the creator's file (e.g., `darsh.ts`)
3. Make your changes:
   - Update creator details (name, handle, avatar)
   - Add new blog posts to the `posts` array
   - Edit or remove existing posts
   - Update topics to match current content

4. Save and test your changes

## Available Topics

To keep the topic list manageable, please use one of these core topics:

- **AI & ML** - Artificial Intelligence, Machine Learning, Deep Learning
- **Backend** - Server-side development, APIs
- **Databases** - SQL, NoSQL, data storage
- **DevOps** - CI/CD, Infrastructure, Deployment
- **Engineering** - General engineering, embedded systems, hardware
- **History** - Historical topics
- **Life** - Personal development, experiences, lifestyle
- **Networking** - Networks, protocols, internet infrastructure
- **Philosophy** - Philosophical discussions
- **Programming** - General programming, languages, algorithms
- **Science** - Physics, astronomy, biology, chemistry
- **System Design** - Architecture, scalability, distributed systems
- **Web Dev** - Frontend, web technologies, browsers

**Note:** Use a maximum of 2 topics per post. Choose the most relevant ones.

## Supported Platforms

- `Medium`
- `Substack`
- `Hashnode`
- `Dev.to`
- `Personal` - For personal blogs/websites

## Guidelines

### Blog Posts
- Only add high-quality, technical blog posts
- Ensure the URL is accessible and not behind a paywall
- Use descriptive titles (you can edit them for clarity)
- Choose topics that accurately represent the content

### Creator Information
- Use the creator's actual X (Twitter) handle
- Ensure the profile picture is appropriate and represents the creator
- Get permission from creators before adding their content (if possible)

### Code Quality
- Follow the existing code style
- Test your changes locally before submitting
- Ensure TypeScript types are correct

## Submitting Changes

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes following this guide
4. Test thoroughly
5. Submit a pull request with a clear description of what you added/changed

## Questions?

If you have questions or need help, please:
- Open an issue on GitHub
- Check existing issues for similar questions
- Review the codebase for examples

Thank you for contributing! 🎉
