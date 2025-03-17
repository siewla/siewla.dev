# Building a Blog with Next.js

When I decided to rebuild my personal website, I wanted a platform that would give me both flexibility and performance. After exploring different options, I settled on Next.js. In this post, I'll share my experience building a blog with Next.js, including my implementation of syntax highlighting.


## Setting Up the Project Structure

I started by creating a clean, organized project structure:

```bash
siewla.dev/
├── public/
│   └── posts/
│       └── building-a-blog-with-nextjs.md
├── src/
│   ├── app/
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── posts/
│   │   │   ├── first-post/
│   │   │   │   └── page.tsx
│   │   │   ├── PostLayout.tsx
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Layout.tsx
│       └── ThemeProvider.tsx
```

This structure allows me to:

- Keep UI components separate from pages
- Organize content in a dedicated directory
- Maintain a clean separation of concerns

## Creating the Post Layout Component

One of the key components in my blog is the `PostLayout` component, which provides a consistent structure for all blog posts. Here's how I implemented it:

```tsx
"use client";

import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Markdown from "markdown-to-jsx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// Import languages for syntax highlighting
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";

// Register the languages
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("bash", bash);
```

The `PostLayout` component handles:

- Displaying the post metadata (title, date, reading time, tags)
- Fetching the Markdown content from the public directory
- Rendering the content with proper styling and syntax highlighting

## Implementing Syntax Highlighting

For code blocks in my blog posts, I wanted to add syntax highlighting to make them more readable. I chose `react-syntax-highlighter` for this purpose:

```tsx
const CodeBlock = ({
  className,
  children,
}: {
  className?: string;
  children: string;
}) => {
  let language = "";

  // Handle different class naming conventions
  if (className) {
    if (className.startsWith("language-")) {
      language = className.replace("language-", "");
    } else if (className.startsWith("lang-")) {
      language = className.replace("lang-", "");
    } else {
      language = className;
    }
  }

  return (
    <SyntaxHighlighter
      language={language.toLowerCase()}
      style={dracula}
      customStyle={{
        borderRadius: "6px",
        padding: "1rem",
        fontSize: "0.9rem",
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};
```

This component:

- Extracts the language from the class name
- Applies the dracula theme for a dark, readable syntax highlighting
- Customizes the styling to match my blog's design

## Loading Markdown Content

To load the Markdown content, I use the `fetch` API to get the content from the public directory:

```tsx
useEffect(() => {
  async function fetchMarkdownContent() {
    setIsLoading(true);
    try {
      const response = await fetch(`/posts/${mdTitle}.md`);

      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.statusText}`);
      }

      const markdownText = await response.text();
      setMarkdown(markdownText);
      setError(null);
    } catch (err) {
      console.error("Error loading markdown:", err);
      setError("Failed to load content. Please try again later.");
      setMarkdown("");
    } finally {
      setIsLoading(false);
    }
  }

  fetchMarkdownContent();
}, [mdTitle]);
```

This approach:

- Fetches the Markdown file based on the provided `mdTitle`
- Handles loading states and errors gracefully
- Updates the content when the `mdTitle` changes

## Rendering the Post

The final part of the `PostLayout` component renders the post with all its elements:

```tsx
return (
  <Layout>
    <article className="post">
      <header className="post-header">
        <h1 className="post-title">{title}</h1>
        <div className="post-meta">
          <span className="post-date">{date}</span>
          <span className="post-reading-time">{readingTime} min read</span>
        </div>
        {tags.length > 0 && (
          <div className="post-tags">
            {tags.map((tag, index) => (
              <span key={index} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="post-content">
        {isLoading ? (
          <p>Loading content...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Markdown
            options={{
              overrides: {
                code: ({ className, children }) => {
                  // For inline code, don't use the syntax highlighter
                  if (!className) {
                    return <code className="inline-code">{children}</code>;
                  }
                  return (
                    <CodeBlock className={className}>
                      {String(children)}
                    </CodeBlock>
                  );
                },
              },
            }}
          >
            {markdown}
          </Markdown>
        )}
      </div>
    </article>
  </Layout>
);
```

This structure provides:

- A clear header with post metadata
- A clean content area with proper Markdown rendering
- Syntax highlighting for code blocks
- Different styling for inline code vs. code blocks

## Using the PostLayout Component

To use this component in my blog posts, I create a page component for each post:

```tsx
"use client";

import PostLayout from "../PostLayout";

export default function FirstPost() {
  return (
    <PostLayout
      title="Building a Blog with Next.js"
      date="March 17, 2025"
      readingTime={7}
      tags={["Next.js", "React", "Web Development"]}
      mdTitle="building-a-blog-with-nextjs"
    />
  );
}
```

## Styling the Blog

For styling, I use global CSS.

## Conclusion

The syntax highlighting implementation using `react-syntax-highlighter` enhances the reading experience, making code examples more readable and visually appealing.

If you're considering building a blog or personal website, I highly recommend giving Next.js a try. The learning curve is gentle, especially if you're already familiar with React, and the benefits in terms of performance and developer experience are substantial.


Stay tuned for more content, and thanks for reading!
