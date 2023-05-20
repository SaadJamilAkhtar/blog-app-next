import React from 'react';
import styles from '../styles/ArticleList.module.css'
import ArticleItem from './ArticleItem'

function ArticleList({articles, path}) {
    return (
        <div className={styles.article_list}>
            {articles.map(article => (
                <ArticleItem key={article.id} article={article} path={path}/>
            ))}
        </div>
    );
}

export default ArticleList;