import Header from '../../components/header';
import Slider from '../../components/slider';
import Footer from '../../components/footer';
import Articles from '../../components/articles';

const Webside = () => {
    return (
        <div styles="padding-bottom: 130px;">
            <Header title={'Flower shop'} />
            <Slider />
            <Articles />
            <Footer />
        </div>
    );
};

export default Webside;