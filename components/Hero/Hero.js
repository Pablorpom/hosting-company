import PropTypes from 'prop-types';
import HeroSlide, {shape} from './HeroSlide';
import { useState } from 'react';
import styles from './Hero.module.scss'

export default function Hero(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return <div className={styles.root}>
        {props.slides.map((slide, index)=>{
            const showHide = !(index === currentSlide)
            return <HeroSlide hide={showHide} className={styles.slide} key={slide.mainText} {...slide} />
        })}
    </div>
}

Hero.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape(shape)
        )
    }
    
    