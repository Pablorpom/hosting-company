import { useState } from 'react';
import styles from './Switch.module.scss';

export default function Switch() {
    const [toggleSwitch, setToggleSwitch] = useState(true);
    const onClick = () => {
        if (toggleSwitch) {
            setToggleSwitch(false);
        } else {
            setToggleSwitch(true);
        }
    };
    const toggle = toggleSwitch === false ? styles.toggled : '';
    const className = `${styles.toggleSwitchCircle} ${toggle}`;
    return (
        <div className={styles.switchContainer}>
            <div className={styles.switchText}>Monthly</div>
            <div className={styles.switch} onClick={onClick}>
                <div className={className}></div>
            </div>
            <div className={styles.switchText}>Yearly</div>
            <div className={styles.yearlyDiscount}>20% discount</div>
        </div>
    );
}
