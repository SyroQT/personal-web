import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'react-feather'

import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import { dateFormatted } from '../util/date'
import './SinglePost.css'

export default ({ fields, nextPostURL, prevPostURL, link }) => {
  const { title, date, postFeaturedImage, body } = fields
  return (
    <article className="SinglePost section light">
      {postFeaturedImage && (
        <BackgroundImage
          className="SinglePost--BackgroundImage"
          src={postFeaturedImage}
          alt={title}
        />
      )}

      <div className="container skinny">
        <Link className="SinglePost--BackButton" to={link}>
          <ChevronLeft /> BACK
        </Link>
        <div className="SinglePost--Content relative">
          <div className="SinglePost--Meta">
            {date && (
              <span className="SinglePost--Meta--Date">
                {dateFormatted(date)}
              </span>
            )}
          </div>

          {title && <h1 className="SinglePost--Title">{title}</h1>}

          <div className="SinglePost--InnerContent">
            <Content source={body} />
          </div>

          <div className="SinglePost--Pagination">
            {nextPostURL && (
              <Link
                className="SinglePost--Pagination--Link next"
                to={nextPostURL}
              >
                Next Post
              </Link>
              )}
            {prevPostURL && (
              <Link
                className="SinglePost--Pagination--Link prev"
                to={prevPostURL}
              >
                Previous Post
              </Link>
            )}
          
          </div>
        </div>
      </div>
    </article>
  )
}
