import React from 'react';
import {useRouter} from 'next/router';
import Article from '../../../components/Article'
function article({article}) {
    // const router = useRouter();
    // const {id} = router.query;


    return (
        <>
            <Article article={article}/>
        </>
    );
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article;