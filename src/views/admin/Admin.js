import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/header';
const Admin = () => {
    return (
        <div>
            <Header title={'Admin'}/>
        </div>
    );
}
export default Admin;