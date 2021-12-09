import styles from './Button.module.scss'

export default function Button(props) {
    // const conditionalStyle = ()=>{
    //     if(props.secondary){
    //         return styles.secondary + ' ' + styles.root
    //     }else{
    //         return styles.root
    //     }
    // }
    const secondaryStyle = props.secondary ? styles.secondary : '' 
    return(
        <a className={`${styles.root} ${secondaryStyle} ${props.className}`} href={props.href}>{props.children}</a>
    )
}