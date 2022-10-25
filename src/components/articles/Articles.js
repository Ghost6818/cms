import './Articles.scss';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Articles = () => {
    const context = useContext(Context);
    const {articlesState, articlesText} = context;
    return (
        <>
        {articlesState &&
        <div className='articles-cointainer'>
            <pre dangerouslySetInnerHTML={{__html: articlesText ? articlesText : 'Todays update will be add soon :))'}}></pre>
        </div>}
        </>
    );
};

export default Articles;
