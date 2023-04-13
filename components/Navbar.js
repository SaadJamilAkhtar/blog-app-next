import React from 'react';
import styles from '../styles/Navbar.module.css';
import {useState} from 'react';

function Navbar(props) {
    const [animate, setAnimate] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h2>Web<span>Dev</span></h2>
            </div>
            <nav className={styles.nav_container}>
                <ul className={styles.nav}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
            <div
                className={`${styles.burger} ${animate ? styles.menu : ''}`}
                onClick={() => setAnimate(!animate)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav
                className={`${styles.side_menu} ${animate ? styles.slide_in : ''}`}
            >
                <ul className={styles.side_menu__nav}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;