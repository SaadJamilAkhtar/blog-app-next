import Image from 'next/image'
import {Inter} from 'next/font/google'
import Head from "next/head";
import ArticleList from '../components/ArticleList'
const inter = Inter({subsets: ['latin']})

export default function Home({articles}) {
    return (
        <div>
            <Head>
                <title>WebDev News</title>
                <meta name='keywords' content='web, programming, development'/>
            </Head>
            <ArticleList articles={articles} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }

}