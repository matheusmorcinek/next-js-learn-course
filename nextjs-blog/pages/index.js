import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //https://nextjs.org/learn/basics/assets-metadata-css/assets */}
      {/* <img src="/images/profile.jpg" alt="Your Name" />
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Matheus Morcinek"
      /> */}

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

    </div>
  )
}
