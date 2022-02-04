import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button(props) {
    // const conditionalStyle = () => {
    // if (props.secondary) {
    //     // return `${styles.secondary} ${styles.root}`;
    // } else {
    //     // return `${styles.root}`;
    // }
    // };
    const secondaryStyle = props.secondary ? styles.secondary : '';
    const tertiaryStyle = props.tertiary ? styles.tertiary : '';
    return (
        <a className={`${styles.root} ${secondaryStyle} ${tertiaryStyle} ${props.className}`} href={props.href}>
            {props.children}
        </a>
    );
}

Button.propTypes = {
    secondary: PropTypes.bool,
    tertiary: PropTypes.bool,
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.string,
};
