import './Slider.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Slider = () => {
    const context = useContext(Context); 
    const { sliderState, sliderText, sliderImage, price } = context;

    const slidersImages = [
        'https://images.pexels.com/photos/7203209/pexels-photo-7203209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7048611/pexels-photo-7048611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://media.istockphoto.com/photos/little-plant-growing-picture-id1221563949?k=20&m=1221563949&s=612x612&w=0&h=2Y2Fe2L0kQxkJp63IS0fMd1jXngPyoqfiwaCDDiOPoU=',
        'https://media.istockphoto.com/photos/red-tulip-on-black-background-picture-id469543858?k=20&m=469543858&s=612x612&w=0&h=JT2ZfwZF_nEXxTWFV_nepbwRArq9f3HRAB5qPNTi-MY=',
        'https://images.pexels.com/photos/6931644/pexels-photo-6931644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/7048143/pexels-photo-7048143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://media.istockphoto.com/photos/flowering-tulips-on-black-with-copy-space-picture-id1066830964?k=20&m=1066830964&s=612x612&w=0&h=cV1vxftWNH41ClzuOGgr0F8IsMY8eoe7rWZcKZUErKE=',
        'https://media.istockphoto.com/photos/take-a-bow-picture-id488942639?k=20&m=488942639&s=612x612&w=0&h=vyymzKhVhFKNERCVTWrCy-qWxxiOuUEI8Y7aOd9Xp70='
    ];

    return (
        <>
        {sliderState && <div className='slider-cointainer'>
            {slidersImages.map((url, index) => {
                return <div className='slider-element' key={index}>
                            <img src={url} alt='slider elem' />
                            <p>Price: {price ? price : '2'} EUR</p>
                        </div>
            })}
        </div>}
        <div className='new-element'>
            <p>{sliderText ? sliderText : 'New'}</p>
            <img src={sliderImage ? sliderImage : 'https://cdn.galleries.smcloud.net/t/galleries/gf-atnv-NNqE-R9Df_tulipany-jadalne-platki-lodygi-i-liscie-trujace-664x442-nocrop.jpg'} height='85px' alt='slider' />
        </div>
        </>
    );
};

export default Slider;