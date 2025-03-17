import React from 'react'
import PageLayout from '../PostLayout'

const page = () => {
  return (
    <PageLayout
      title="First Post"
      date="17 March 2025"
      readingTime={3}
      tags={
        ['Next.js', 'React', 'react-syntax-highlighter', 'markdown-to-jsx']
      }
      mdTitle="building-a-blog-with-nextjs.md"
    />
  )
}

export default page