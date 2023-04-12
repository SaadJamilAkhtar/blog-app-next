import React from 'react';
import styles from '../styles/Layout.module.css'
import Navbar from "./Navbar";
import Header from './Header'

function Layout(props) {
    return (
        <div className={styles.container}>
            <Navbar/>
            <Header/>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;