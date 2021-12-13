import styles from './WhyUs.module.scss'
import PropTypes from 'prop-types';
import Image from 'next/image'
import React from 'react';

export default function WhyUs(props){
    return(
        <div>
            <div>
                <h1>True Cloud Web Hosting</h1>
                <p>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
            </div>
            <div>
                {props.logos.map((img)=>{
                    return <Image key={img.alt} src={img.src} alt={img.alt} width={100} height={100} ></Image>
                })}
            </div>
            <div>
            {props.prosSection.map((pro)=>{
                    return ( <React.Fragment key={pro.title}>
                        <Image src={pro.src} alt={pro.title} width={50} height={50} ></Image>
                        <div>{pro.title}</div>
                        <div>{pro.description}</div>
                    </React.Fragment> )
                })}
            </div>
        </div>
    )
}

WhyUs.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.object
        ),
        prosSection: PropTypes.arrayOf(
            PropTypes.object
        )
    }