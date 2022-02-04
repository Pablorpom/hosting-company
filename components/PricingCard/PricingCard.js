import styles from './PricingCard.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

export default function PrincingCard(props) {
    const formatStyle = { style: 'currency', currency: 'USD' };
    const priceFormater = new Intl.NumberFormat('en-US', formatStyle);
    const price = (num) => {
        if (props.priceFormat === 'Monthly') {
            return priceFormater.format(num / 12);
        } else {
            return priceFormater.format(num * 0.8);
        }
    };
    const priceType = props.priceFormat === 'Monthly' ? 'Per month' : 'Per year';
    return (
        <div className={styles.root}>
            {props.data.map((card, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <h2 className={styles.title}>{card.title}</h2>
                        <p className={styles.description}>{card.description}</p>
                        <p className={styles.price}>{price(card.price)}</p>
                        <p className={styles.priceType}>{priceType}</p>
                        <Button tertiary href="#" className={styles.createAccountButton}>
                            Choose this plan
                        </Button>
                        <div>
                            <ul className={styles.benefitsList}>
                                {card.benefits.map((benefit, index) => {
                                    return <li key={index}>{benefit}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

PrincingCard.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            benefits: PropTypes.array,
        }),
    ),
    priceFormat: PropTypes.string,
};
