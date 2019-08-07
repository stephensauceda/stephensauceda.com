import React, { Fragment } from 'react'
import clsx from 'clsx'
import htmlSerializer from '../lib/htmlSerializer'
import { RichText } from 'prismic-reactjs'

export default function(slices) {
  return slices.map((slice, i) => {
    switch (slice.slice_type) {
      case 'text':
        return (
          <RichText render={slice.primary.text} key={i} htmlSerializer={htmlSerializer} />
        )
      case 'quote':
        return (
          <blockquote key={i}>
            <RichText render={slice.primary.quote} htmlSerializer={htmlSerializer} />
            {slice.primary.source_quote && (
              <footer>
                <cite>
                  <RichText
                    render={slice.primary.source_quote}
                    htmlSerializer={htmlSerializer}
                  />
                </cite>
              </footer>
            )}
            <style jsx>{`
              blockquote {
                margin: 0;
                padding-left: 1em;
                border-left: 4px solid #666;
                color: #666;
                font-style: italic;
              }
            `}</style>
          </blockquote>
        )
      case 'gist':
        return (
          <div
            style={{ marginBottom: '1em' }}
            key={i}
            dangerouslySetInnerHTML={{ __html: slice.primary.gist[0].text }}
          />
        )
      case 'image':
        return (
          <Fragment key={i}>
            <figure>
              <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
              <figcaption>
                <RichText
                  render={slice.primary.caption}
                  htmlSerializer={htmlSerializer}
                />
              </figcaption>
            </figure>
            <style jsx>{`
              img {
                display: block;
                width: 100%;
              }

              figure {
                margin-left: 0;
                margin-right: 0;
              }

              figcaption {
                text-align: center;
                font-style: italic;
                color: #666;
              }
            `}</style>
          </Fragment>
        )
      case 'embed':
        return (
          <Fragment key={i}>
            <div
              className={clsx('embedContainer', {
                'embedContainer--withVideo': slice.primary.embed.type === 'video'
              })}
              dangerouslySetInnerHTML={{ __html: slice.primary.embed.html }}
            />
            <style>{`
              .embedContainer {
                margin-bottom: 1em;
              }

              .embedContainer--withVideo {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;
              }
            `}</style>
            <style jsx global>{`
              .embedContainer--withVideo iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
            `}</style>
          </Fragment>
        )
      default:
        return null
    }
  })
}
