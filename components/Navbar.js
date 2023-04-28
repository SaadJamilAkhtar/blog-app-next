import React from 'react';
import styles from '../styles/Navbar.module.css';
import {useState} from 'react';
import Link from 'next/link';

function Navbar(props) {

    const nav_links = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'About',
            href: '/about'
        },
    ]

    const [animate, setAnimate] = useState(false);
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <h2>Web<span>Dev</span></h2>
            </div>
            <nav className={styles.nav_container}>
                <ul className={styles.nav}>
                    {nav_links.map( (link, key) => (
                        <li key={key}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
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
                    {nav_links.map( (link, key) => (
                        <li
                            key={key}
                            onClick={() => setAnimate(!animate)}
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;