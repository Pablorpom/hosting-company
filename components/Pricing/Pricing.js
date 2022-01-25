import styles from './Pricing.module.scss';
import Switch from '../Switch/Switch';

export default function Pricing() {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Ready to get started with Lemon Wares?</h2>
            <p className={styles.subTitle}>Choose the package that suits you</p>
            <Switch />
        </div>
    );
}
