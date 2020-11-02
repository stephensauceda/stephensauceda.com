import React, { Fragment } from 'react'
import clsx from 'clsx'
import { RichText } from 'prismic-reactjs'

export default function renderSlices(slices) {
  return slices.map((slice, i) => {
    switch (slice.slice_type) {
      case 'text':
        return <RichText render={slice.primary.text} key={i} />
      case 'quote':
        return (
          <blockquote
            key={i}
            className="m-0 pl-4 border-l-4 text-gray-600 italic"
          >
            <RichText render={slice.primary.quote} />
            {slice.primary.source_quote && (
              <footer>
                <cite>
                  <RichText render={slice.primary.source_quote} />
                </cite>
              </footer>
            )}
          </blockquote>
        )
      case 'gist':
        return (
          <div
            className="mb-4"
            key={i}
            dangerouslySetInnerHTML={{ __html: slice.primary.gist[0].text }}
          />
        )
      case 'image':
        return (
          <Fragment key={i}>
            <figure className="mx-0">
              <img
                src={slice.primary.image.url}
                alt={slice.primary.image.alt}
                loading="lazy"
                className="block w-full"
              />
              <figcaption className="text-center italic text-gray-600">
                <RichText render={slice.primary.caption} />
              </figcaption>
            </figure>
          </Fragment>
        )
      case 'embed':
        return (
          <Fragment key={i}>
            <div
              className={clsx('embedContainer', {
                'embedContainer--withVideo':
                  slice.primary.embed.type === 'video'
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
