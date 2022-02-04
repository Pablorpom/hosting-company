import styles from './PlansPricing.module.scss';
import Switch from '../Switch/Switch';
import { useState } from 'react';
import PrincingCard from '../PricingCard/PricingCard';
import PrincingCardType from '../PricingCard/PricingCardtype';
import basicPricingCardData from '../../data/pricingCardData/basicPricingCardData';
import premiumPricingCardData from '../../data/pricingCardData/premiumPricingCardData';

export default function PlansPricing() {
    const [priceFormat, setPriceFormat] = useState('Monthly');
    const [planType, setPlanType] = useState('Basic');
    const onClick = () => {
        if (planType === 'Basic') {
            setPlanType('Premium');
        } else {
            setPlanType('Basic');
        }
    };
    const pricingCardData = planType === 'Basic' ? basicPricingCardData : premiumPricingCardData;
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
            <PrincingCardType planType={planType} onClick={onClick} />
            <PrincingCard data={pricingCardData} priceFormat={priceFormat} />
        </div>
    );
}
