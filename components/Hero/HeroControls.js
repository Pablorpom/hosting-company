import PropTypes from 'prop-types';
import { useLayoutEffect, useRef } from 'react';
import styles from './HeroControls.module.scss';
import { shape } from '../Hero/HeroSlide';

export default function HeroControls(props) {
    const rootRef = useRef();
    const indicatorContainerRef = useRef();
    const indicatorRef = useRef();
    useLayoutEffect(() => {
        const allButtons = rootRef.current.querySelectorAll('button');
        const currentButton = allButtons[props.index];
        const buttonWidth = currentButton.offsetWidth;
        indicatorRef.current.style.width = `${buttonWidth * 0.85}px`;
        const rootClientRect = rootRef.current.getBoundingClientRect();
        const currentButtonClientRect = currentButton.getBoundingClientRect();
        const offset = currentButtonClientRect.left - rootClientRect.left;
        indicatorRef.current.style.left = `${offset + (buttonWidth * 0.15) / 2}px `;
    }, [props.index]);
    return (
        <div ref={rootRef} className={styles.root}>
            <div className={styles.optionsList}>
                {props.data.map((slide, index) => {
                    const onClick = () => {
                        props.onClick(index);
                    };
                    const activeClass = index === props.index ? styles.active : '';
                    const className = `${styles.button} ${activeClass}`;

                    return (
                        <button className={className} onClick={onClick} key={slide.menuText}>
                            {slide.menuText}
                        </button>
                    );
                })}
            </div>
            <div ref={indicatorContainerRef} className={styles.indicatorContainer}>
                <div ref={indicatorRef} className={styles.indicator}></div>
            </div>
        </div>
    );
}

HeroControls.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(shape)),
    onClick: PropTypes.func,
    index: PropTypes.number,
};
