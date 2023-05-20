import React from 'react';
import style from '../styles/ArticleList.module.css'
import Link from 'next/link'

function ArticleItem({article, path}) {
    return (
        <div className={style.article_card}>
            <Link href={`/${path}/[id]`} as={`/${path}/${article.id}`}>
                <div>
                    <h3>{article.title} &rarr;</h3>
                    <p>{article.body}</p>
                </div>
            </Link>
        </div>
    );
}

export default ArticleItem;