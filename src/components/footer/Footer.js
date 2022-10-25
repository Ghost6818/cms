import './Footer.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Footer = () => {
    const context = useContext(Context);
    const {footerState, footerPhone} = context;

    return (
        <>
         {footerState && 
        <div className='footer-cointainer'>
            <p>Contact us: <a href={footerPhone ? footerPhone : 'tel:+48575129080'}>{footerPhone ? footerPhone : '+48 575 129 080'}</a></p>
        </div>}
        </>
    );
};

export default Footer;