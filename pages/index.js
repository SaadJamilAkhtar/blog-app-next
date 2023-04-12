import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Head>
            <title>WebDev News</title>
            <meta name='keywords' content='web, programming, development'/>
        </Head>
      <h1>Welcome To NEXT</h1>
    </div>
  )
}
