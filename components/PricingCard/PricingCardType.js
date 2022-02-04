import PropTypes from 'prop-types';
import styles from './PricingCardType.module.scss';

export default function PricingCardType(props) {
    const indicatorStyle =
        props.planType === 'Premium' ? `${styles.indicator} ${styles.premium}` : `${styles.indicator}`;
    return (
        <div className={styles.root}>
            <div className={styles.textContainer}>
                <div onClick={props.onClick}>Basic</div>
                <div onClick={props.onClick}>Premium</div>
            </div>
            <div className={styles.indicatorContainer}>
                <div className={indicatorStyle}></div>
            </div>
        </div>
    );
}

PricingCardType.propTypes = {
    onClick: PropTypes.func,
    planType: PropTypes.string,
};
