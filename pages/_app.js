import PropTypes from 'prop-types';
import 'scss-reset/_reset.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
};
