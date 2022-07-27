import Link from "next/link";
import { useState } from "react";

export default function FirstPost() {

    const [message, setMessage] = useState('First Post')

    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    );
}