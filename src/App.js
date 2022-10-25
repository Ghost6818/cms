import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './context/App.context';
import Webside from './views/webside';
import Admin from './views/admin';
import './App.scss';


function App() {
  const { Provider } = Context;
  const [sliderState, setSliderState] = useState(true);
  const [sliderText, setSliderText] = useState('');
  const [sliderImage, setSliderImage] = useState('');
  const [footerState, setFooterState] = useState(true);
  const [articlesState, setArticles] = useState(true);
  const [footerPhone, setFooterPhone] = useState('');
  const [articlesText, setArticlesText] = useState('');
  const [headerText, setHeaderText] = useState('');
  const [price, setPrice] = useState('');
  const [backgroundFoto, setBackgroundFoto] = useState(true);

  return (
    <div className='App'>
      <Provider value={{sliderState,
                        setSliderState,
                        backgroundFoto,
                        setBackgroundFoto,
                        sliderText,
                        setSliderText,
                        sliderImage,
                        setSliderImage,
                        price,
                        setPrice,
                        footerState,
                        setFooterState,
                        articlesState,
                        setArticles,
                        footerPhone,
                        setFooterPhone,
                        setArticlesText,
                        articlesText,
                        setHeaderText,
                        headerText,}}>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Webside />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
