import React from 'react';
import styles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
function ArticleList({articles}) {
    return (
        <div className={styles.article_list}>
            {articles.map(article => (
                <ArticleItem key={article.id} article={article}/>
            ))}
        </div>
    );
}

export default ArticleList;