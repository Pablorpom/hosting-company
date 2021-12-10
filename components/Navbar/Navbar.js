import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import icon from '../../public/Navbar-icon.svg'
import phone from '../../public/Navbar-phone.svg'

export default function Navbar(){
    return(
        <div className={styles.root}>
            <div className={styles.iconContainer}>
                <Image src={icon} alt='Company icon'/>
            </div>
            <div className={styles.primaryLinkContainer}>
                <Link href='#'>
                    <a className={styles.linkUnderline}>Our Services</a>
                </Link>
            </div>
            <div className={styles.secondaryLinksContainer}>
                <Link href='#'>
                    <a className={styles.linkUnderline}>About</a>
                </Link>
                <Link href='#'>
                    <a className={styles.linkUnderline}>Blog&News</a>
                </Link>
                <Link href='#'>
                    <a className={styles.linkUnderline}>Contact</a>
                </Link>
            </div>
            <div className={styles.tertiaryLinkContainer}>
                <Link href='#'>
                    <a className={styles.linkUnderline}>Account</a>
                </Link>
            </div>
            <div className={styles.phoneContainer}>
                <a href='tel:+2349067322844' className={styles.phoneLink}>
                    <Image className={styles.phoneIcon} layout='fixed' src={phone} alt='phone icon'/>
                    +2349067322844
                </a>
            </div>
        </div>
    )
}