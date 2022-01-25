import styles from './Pricing.module.scss';
import Switch from '../Switch/Switch';
import { useState } from 'react';

export default function Pricing() {
    const [priceFormat, setPriceFormat] = useState('Monthly');
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Ready to get started with Lemon Wares?</h2>
            <p className={styles.subTitle}>Choose the package that suits you</p>
            <Switch
                isOn={priceFormat === 'Monthly'}
                onChange={() => {
                    if (priceFormat === 'Monthly') {
                        setPriceFormat('Yearly');
                    } else {
                        setPriceFormat('Monthly');
                    }
                }}
            />
        </div>
    );
}
