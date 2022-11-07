import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home';
import Register from './Components/Regester/Regester';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
