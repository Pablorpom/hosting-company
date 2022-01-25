import PropTypes from 'prop-types';
import styles from './Switch.module.scss';

export default function Switch(props) {
    const toggle = props.isOn === false ? styles.toggled : '';
    const className = `${styles.toggleSwitchCircle} ${toggle}`;
    return (
        <div className={styles.switchContainer}>
            <div className={styles.switchText}>Monthly</div>
            <div className={styles.switch} onClick={props.onChange}>
                <div className={className}></div>
            </div>
            <div className={styles.switchText}>Yearly</div>
            <div className={styles.yearlyDiscount}>20% discount</div>
        </div>
    );
}

Switch.propTypes = {
    isOn: PropTypes.bool,
    onChange: PropTypes.func,
};
