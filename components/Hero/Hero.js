import PropTypes from 'prop-types';
import HeroSlide, {shape} from './HeroSlide';

export default function Hero(props) {
    return <HeroSlide 
        menuText={props.slides[0].menuText}
        mainText={props.slides[0].mainText}
        secondaryText={props.slides[0].secondaryText}
        image={props.slides[0].image}
        imageAlt={props.slides[0].imageAlt}
    >
        {props.slides[0].children}
    </HeroSlide>
}

Hero.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape(shape)
    )
}