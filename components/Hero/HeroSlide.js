import Image from 'next/image';
import styles from './HeroSlide.module.scss';
import PropTypes from 'prop-types';

export default function HeroSlide(props) {
    return(
        <div className={styles.root}>
            <div className={styles.content}>
                <h1 className={styles.title}>{props.mainText}</h1>
                <p className={styles.text}>{props.secondaryText}</p>
                {props.children}
            </div>
            <div className={styles.imageContainer}>
                <Image src={props.image} alt={props.imageAlt}></Image>
                <div className={styles.triangle}></div>
            </div>
        </div>
    )
}

export const shape = {
    menuText: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    children: PropTypes.node,
    image: PropTypes.object,
    imageAlt: PropTypes.string
}

HeroSlide.propTypes = shape
