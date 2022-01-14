import styles from './WhyUsPros.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import React from 'react';

export default function WhyUsPros(props) {
    return (
        <div className={styles.root}>
            {props.prosSection.map((pro) => {
                return (
                    <React.Fragment key={pro.title}>
                        <div className={styles.pro}>
                            <Image src={pro.src} alt={pro.title} width={100} height={100}></Image>
                            <h5>{pro.title}</h5>
                            <p>{pro.description}</p>
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

WhyUsPros.propTypes = {
    prosSection: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
        }),
    ),
};
