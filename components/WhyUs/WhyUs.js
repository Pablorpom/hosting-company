import styles from './WhyUs.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import React from 'react';

export default function WhyUs(props) {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                <h2>True Cloud Web Hosting</h2>
                <p>
                    True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD
                    powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire
                    infrastructure is built to be reliable, secure, and scalable.
                </p>
            </div>
            <div className={styles.logos}>
                {props.logos.map((img) => {
                    return <Image key={img.alt} src={img.src} alt={img.alt} width={100} height={100}></Image>;
                })}
            </div>
        </div>
    );
}

WhyUs.propTypes = {
    logos: PropTypes.arrayOf(PropTypes.object),
    prosSection: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string,
        }),
    ),
};
