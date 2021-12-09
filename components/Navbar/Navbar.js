import styles from './Navbar.module.scss'
import Image from 'next/image'

import icon from '../../public/Navbar-icon.svg'
import line from '../../public/Navbar-line.svg'
import phone from '../../public/Navbar-phone.svg'

export default function Navbar(){
    return(
        <div className={styles.root}>
        <Image src={icon} alt='Company icon'/>
        <a>Our services</a>
        <a>About</a>
        <a>Blog&News</a>
        <a>Contact</a>
        <a>Acount</a>
        <Image src={line} alt='line'/>
        <Image src={phone} alt='phone icon'/>
        <p>+2349067322844</p>
       </div>
    )
}