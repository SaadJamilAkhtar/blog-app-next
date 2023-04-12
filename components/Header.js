import React from 'react';
import styles from '../styles/Header.module.css'

function Header(props) {
    return (
        <div className={styles.header}>
            <h2>Welcome To WebDev</h2>
        </div>
    );
}

export default Header;