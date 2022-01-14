import Button from '../components/Button/Button';
import womanInAComputerImage from '../public/womanInAComputerImage.jpg';
import styles from '../styles/Home.module.scss';

const slidesData = [
    {
        menuText: 'Hosting',
        mainText: 'Premium Web Hosting for Your Website',
        secondaryText:
            'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.',
        children: (
            <>
                <Button secondary href="#" className={styles.createAccountButton}>
                    Create an Account
                </Button>
                <Button href="#">Choose your plan</Button>
            </>
        ),
        image: womanInAComputerImage,
        imageAlt: 'Woman in a computer',
    },
    {
        menuText: 'Domain',
        mainText: 'Domain',
        secondaryText:
            'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.',
        children: (
            <>
                <Button secondary href="#" className={styles.createAccountButton}>
                    Create an Account
                </Button>
                <Button href="#">Choose your plan</Button>
            </>
        ),
        image: womanInAComputerImage,
        imageAlt: 'Woman in a computer',
    },
    {
        menuText: 'SEO',
        mainText: 'SEO',
        secondaryText:
            'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.',
        children: (
            <>
                <Button secondary href="#" className={styles.createAccountButton}>
                    Create an Account
                </Button>
                <Button href="#">Choose your plan</Button>
            </>
        ),
        image: womanInAComputerImage,
        imageAlt: 'Woman in a computer',
    },
    {
        menuText: 'Email',
        mainText: 'Email',
        secondaryText:
            'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.',
        children: (
            <>
                <Button secondary href="#" className={styles.createAccountButton}>
                    Create an Account
                </Button>
                <Button href="#">Choose your plan</Button>
            </>
        ),
        image: womanInAComputerImage,
        imageAlt: 'Woman in a computer',
    },
];

export default slidesData;
