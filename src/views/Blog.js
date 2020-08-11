import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'

import './Blog.css'

export default ({ fields, posts = [], showFeatured = true }) => {
  const { title, subtitle, featuredImage } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className="Blog">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
