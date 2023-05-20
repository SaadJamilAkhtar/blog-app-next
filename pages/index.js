import Image from 'next/image'
import {Inter} from 'next/font/google'
import Head from "next/head";
import ArticleList from '../components/ArticleList'
const inter = Inter({subsets: ['latin']})

export default function Home({firstArticles, secondArticles}) {
    return (
        <div>
            <Head>
                <title>WebDev News</title>
                <meta name='keywords' content='web, programming, development'/>
            </Head>
            <ArticleList articles={firstArticles} path={'article'}/>
            <ArticleList articles={secondArticles} path={'article-details'}/>
        </div>
    )
}

export const getStaticProps = async () => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const firstArticles = await res.json()

    res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=6&_limit=6`)
    const secondArticles = await res.json()

    return {
        props: {
            firstArticles,
            secondArticles
        }
    }

}