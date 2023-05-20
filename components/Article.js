import React from 'react';
import Link from 'next/link';
import style from '../styles/ArticleList.module.css';

function Article({article}) {
    const {title, body} = article;
    return (
        <div className={style.single_article}>
            <h3>{title}</h3>
            <p>{body}</p>
            <br/>
            <div className={style.back_link_container}>
                <Link href='/'>
                    <div className={style.back_link}>
                        &larr; Go Back
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Article;