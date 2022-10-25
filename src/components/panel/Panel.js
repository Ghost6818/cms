import './Panel.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Panel = () => {
    const context = useContext(Context); 
    const { setHeaderText,
            headerText,
            backgroundFoto,
            setBackgroundFoto,
            sliderState,
            setSliderState,
            sliderText,
            setSliderText,
            sliderImage,
            setSliderImage,
            price,
            setPrice,
            footerState,
            setFooterState,
            setArticles,
            setFooterPhone,
            footerPhone,
            articlesState,
            setArticlesText,
            articlesText} = context;

    
    const setHeaderHandlerText = (e) => {
        const text = e.target.value;
        setHeaderText(text);
    };

    const setBackgroundFotoHandler = () => {
        setBackgroundFoto(!backgroundFoto);
    };

    const setSliderStateHandler = () => {
        setSliderState(!sliderState);
    };

    const setSliderTextHandler = (e) => {
        const text = e.target.value;
        setSliderText(text);
    };

    const setSliderImageHandler = (e) => {
        const image = e.target.value;

        setSliderImage(image);
    };

    const setPriceHandler = (e) => {
        const price = e.target.value;
        setPrice(price);
    };

    const setFooterStateHandler = () => {
        setFooterState(!footerState);
    };

    const setArticlesStateHandler = () => {
        setArticles(!articlesState);
    };

    const setSliderPhoneHandler = (e) => {
        const phone = e.target.value;
        setFooterPhone(phone);
    };

    const setArticlesStateHandlerText = (e) => {
        const text = e.target.value;
        setArticlesText(text);
    };

    return (
        <div className='panel-conatiner'>
            <h2>Control Panel</h2>
            <ul>
                <li>
                    <p>Header</p>
                    <input type='text'
                            defaultValue={headerText}
                            onChange={(e) => setHeaderHandlerText(e)}
                            placeholder='Type header...' />
                </li>
                <li>
                    <p>Background foto</p>
                    <input type='checkbox'
                            checked={backgroundFoto}
                            onChange={() => setBackgroundFotoHandler()} />
                </li>
                <li>
                    <p>Slider</p>
                    <input type='checkbox'
                            defaultChecked={sliderState}
                            onChange={setSliderStateHandler} />
                </li>
                <li>
                    <p>Slides text</p>
                    <input type='text'
                            defaultValue={sliderText}
                            onChange={(e) => setSliderTextHandler(e)}
                            placeholder='Type text...' />
                </li>
                <li>
                    <p>Slider image</p>
                    <input type='link'
                                defaultValue={sliderImage}
                                onChange={(e) => setSliderImageHandler(e)}
                                placeholder='Link to the photo'/>
                </li>
                <li>
                    <p>Price</p>
                    <input type='text'
                           defaultValue={price}
                           onChange={(e) => setPriceHandler(e)}
                           placeholder='Type price...' />
                </li>
                <li>
                    <p>Articles</p>
                    <input type='checkbox'
                           defaultChecked={articlesState}
                           onClick={setArticlesStateHandler}
                           onChange={setArticlesStateHandler}/>
                </li>
                <li>
                    <p>Articles text</p>
                    <textarea type='text'
                              defaultValue={articlesText}
                              onChange={(e) => setArticlesStateHandlerText(e)}
                              placeholder='Type article...' />
                </li>
                <li>
                    <p>Phone</p>
                    <input type='text'
                           defaultValue={footerPhone}
                           onChange={(e) => setSliderPhoneHandler(e)}
                           placeholder='Type phone number...' />
                </li>
                <li>
                    <p>Footer</p>
                    <input type='checkbox' 
                           defaultChecked={footerState}
                           onClick={setFooterStateHandler}
                           onChange={setFooterStateHandler}/>
                </li>
            </ul>
        </div>
    );
};

export default Panel;