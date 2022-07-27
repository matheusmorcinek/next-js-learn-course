import Head from 'next/head';
import Link from "next/link";
import { useState } from "react";
import Layout from '../../components/layout';

export default function FirstPost() {

    const [message, setMessage] = useState('First Post')

    return (
        <Layout>
            <Head>
                <title>First Post - {message}</title>
                {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
            </Head>
            {/* example https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript */}
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}