import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/todo/TodoTemplate';
import Hader from './component/layout/Hader';
import Footer from './component/layout/Footer';
import { Login } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import Join from './component/user/Join';

function App() {
  return (
    <>
    <Hader />
    
    <Routes>
    <Route path='/' element={<TodoTemplate />} />
    <Route path='/login'element={<Login/>} />
    <Route path='join' element={<Join />} />
    </Routes>

    <Footer />
    </>
  );
}

export default App;
