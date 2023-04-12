import React from 'react';
import styles from '../styles/Navbar.module.css'

function Navbar(props) {
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
        </div>
    );
}

export default Navbar;