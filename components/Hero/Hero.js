import PropTypes from 'prop-types';
import HeroSlide, {shape} from './HeroSlide';

export default function Hero(props) {
    return <>
        {props.slides.map((slide)=>{
            return <HeroSlide key={slide.mainText} {...slide} />
        })}
    </>
}

Hero.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape(shape)
        )
    }
    
    