import PropTypes from 'prop-types';
import styles from './Hero.module.scss'
import Image from 'next/image'
import image from '../../public/Hero.jpg'

export default function Hero(props) {
    return(
        <div className={styles.root}>
            <div className={styles.content}>
                <h1 className={styles.title}>{props.slides[0].mainText}</h1>
                <p className={styles.text}>{props.slides[0].secondaryText}</p>
                {props.slides[0].children}
            </div>
            <div className={styles.imageContainer}>
                <Image src={image} alt="woman in a computer"></Image>
                <div className={styles.triangle}></div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            menuText: PropTypes.string.isRequired,
            mainText: PropTypes.string.isRequired,
            secondaryText: PropTypes.string,
            children: PropTypes.node
        })
    )
}