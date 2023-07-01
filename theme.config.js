const YEAR = new Date().getFullYear()
// import { useRouter } from 'next/router'
// import { useConfig } from 'nextra-theme-blog'

export default {
  // head: ({ title, meta }) => (
  //   <>
  //     {meta.description && (
  //       <meta name="description" content={meta.description} />
  //     )}
  //     {meta.tag && <meta name="keywords" content={meta.tag} />}
  //     {meta.author && <meta name="author" content={meta.author} />}
  //   </>
  // ),
  head: ({title, meta}) => {
    // const { asPath, defaultLocale, locale } = useRouter()
    // const { frontMatter } = useConfig()
    // const url =
    //   'https://my-app.com' +
    //   (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
      // return <></>

    return (
      <>
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:title" content={title || 'Nextra'} />
        <meta
          property="og:description"
          content={meta.description || 'The next site builder'}
        />
        <meta property="og:image" content={meta.thumbnailUrl} />
        <meta name="twitter:image" content={meta.thumbnailUrl} />
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
