import './Header.scss';
import { Link } from 'react-router-dom';
import Context from '../../context/App.context';
import { useContext } from 'react';

const Header = (props) => {
    const isAdmin = (props.title).toUpperCase() === 'ADMIN';
    const context = useContext(Context); 
    const { headerText, backgroundFoto } = context;

    return (
        <div className='header-container'>
            <div className={backgroundFoto ? 'container header header-background' : 'container header header-background-none'}>
                {isAdmin ? <h1>Admin</h1>
                         : <h1>{headerText ? headerText : props.title}</h1>}
                {isAdmin
                ?<Link className='btn'
                    to='/'>Home</Link>
                :<Link className='btn btn--admin'
                    to='/admin'>Admin Panel</Link>}
            </div>
        </div>
    );
};

export default Header;