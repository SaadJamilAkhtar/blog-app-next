import React from 'react';
import Head from "next/head";
import styles from '../styles/About.module.css';

function About(props) {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <h3 className={styles.about}>A WEB app built using NEXT.js and JSON Plcaeholder</h3>
        </div>
    );
}

export default About;