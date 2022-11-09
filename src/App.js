import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Home/Home';
import Register from './Components/Regester/Regester';
import Addservice from './Components/AddService/Addservice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Services from './Components/Services/Services';
import Details from './Components/Details/Details';
import 'react-photo-view/dist/react-photo-view.css';
import Update from './Components/Update/Update';
import MyReview from './Components/MyReview/MyReview';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/Register' element={<Register></Register>}></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <Addservice></Addservice>
          </RequireAuth>
        }></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/details/:_id' element={<Details></Details>}></Route>
        <Route path='/update' element={<Update></Update>}></Route>
        <Route path='/myReview' element={<MyReview></MyReview>}></Route>
        <Route path='*' element={<img className='md:h-[90vh] md:w-3/5 mx-auto' src='https://cdn.dribbble.com/users/1408464/screenshots/6377404/404_illustration_4x.png' />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
