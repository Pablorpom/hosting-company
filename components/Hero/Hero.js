import PropTypes from 'prop-types';
import HeroSlide, { shape } from './HeroSlide';
import HeroControls from './HeroControls';
import { useState } from 'react';
import styles from './Hero.module.scss';

export default function Hero(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className={styles.root}>
            <div>
                <HeroControls data={props.slides} onClick={setCurrentSlide} index={currentSlide} />
            </div>
            <div>
                {props.slides.map((slide, index) => {
                    const showHide = !(index === currentSlide);
                    return <HeroSlide hide={showHide} className={styles.slide} key={slide.mainText} {...slide} />;
                })}
            </div>
        </div>
    );
}

Hero.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.shape(shape)),
};
