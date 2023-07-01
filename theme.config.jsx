const YEAR = new Date().getFullYear()

export default {
  head: ({title, meta}) => {
    const peterPeshetinImage = 'https://res.cloudinary.com/preshetin/image/upload/v1688111008/preshetin.com/avatars/2023-06-park-square.jpg'

    return (
      <>
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:title" content={title || 'Nextra'} />
        <meta
          property="og:description"
          content={meta.description || 'The next site builder'}
        />
        <meta property="og:image" content={meta.thumbnailUrl || peterPeshetinImage } />
        <meta name="twitter:image" content={meta.thumbnailUrl || peterPeshetinImage} />
      </>
    )
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Peter Reshetin.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
