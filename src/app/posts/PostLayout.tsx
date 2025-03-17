"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Markdown from 'markdown-to-jsx';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// Import a theme you like
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Import only the languages you need
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

// Register the languages
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('bash', bash);

interface PostLayoutProps {
  title: string;
  date: string;
  readingTime: number;
  tags?: string[];
  mdTitle: string;
}

const CodeBlock = ({ className, children }: { className?: string; children: string }) => {
  let language = '';

  // Handle different class naming conventions
  if (className) {
    if (className.startsWith('language-')) {
      language = className.replace('language-', '');
    } else if (className.startsWith('lang-')) {
      language = className.replace('lang-', '');
    } else {
      language = className;
    }
  }

  return (
    <SyntaxHighlighter
      language={language.toLowerCase()}
      style={dracula} // Using the VS theme
      customStyle={{
        borderRadius: '6px',
        padding: '1rem',
        fontSize: '0.9rem',
      }}
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};

const PostLayout: React.FC<PostLayoutProps> = ({
  title,
  date,
  readingTime,
  tags = [],
  mdTitle,
}) => {
  const [markdown, setMarkdown] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
        console.error('Error loading markdown:', err);
        setError('Failed to load content. Please try again later.');
        setMarkdown('');
      } finally {
        setIsLoading(false);
      }
    }

    fetchMarkdownContent();
  }, [mdTitle]);

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
                <span
                  key={index}
                  className="post-tag"
                >
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
                    return <CodeBlock className={className}>{String(children)}</CodeBlock>;
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
};

export default PostLayout;
