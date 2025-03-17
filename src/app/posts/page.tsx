import React from 'react'
import Layout from '@/components/Layout';
import Link from 'next/link';

const PostsPage = () => {
  return (
    <Layout>
      <div className="posts-container">
        <h1 className="heading">Posts</h1>
        <h3 className="post-year">2025</h3>
        <ul>
          <li>
            <span className="post-title">
              <Link href="/posts/first-post">
                Building a blog with Next.js
              </Link>
            </span>
            <span className="post-date">March 17, 2025</span>
          </li>
        </ul>
        {/* 
        <h3 className="post-year">2026</h3>
        <ul>
          <li>
            <span className="post-title">Getting started with TypeScript</span>
            <span className="post-date">December 10, 2024</span>
          </li>
          <li>
            <span className="post-title">The power of CSS Grid</span>
            <span className="post-date">October 5, 2024</span>
          </li>
        </ul> */}
      </div>
    </Layout>
  )
}

export default PostsPage
