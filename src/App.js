import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
            <Route path='login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
