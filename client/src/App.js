import './App.css';
import { SigninPage } from './pages/SignInPage/SigninPage';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import { Main } from './pages/MainPage/Main';

import { TodaysTasks } from './pages/Today/TodaysTasks';
import { AllTodos } from './pages/AllTodos/AllTodos';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './redux/reducers/userSlice';
import { AsyncLoggedInUser } from './redux/actions/userThunkAPI';
import { useEffect } from 'react';
import { Pending } from './pages/Pending/Pending';
import { Late } from './pages/late/Late';
import { Completed } from './pages/completed/Completed';


function App() {

  const user = useSelector(selectUser) 
  const dispatch = useDispatch()

  useEffect(()=> {

    const token = localStorage.getItem("userInfo");

    const authUser = () => {

      dispatch(AsyncLoggedInUser(token))
    }

    if(token) {

      authUser()
    }

},[])

  return (
    <div className="App">


    <BrowserRouter >
        <Routes>
          {
            user.isAuthenticated ?

             <Route path="/login" element={<Navigate to="/todos" />} />

            :

            <Route  path = "/login" element = {<SigninPage/>}/>
          }

        </Routes> 
          
        <Routes>
         { user.isAuthenticated ? 
          <Route  path = "/"  element={<Main/>}>

             <Route path='/todos' element={<AllTodos/>} />  
              <Route path='/today' element={<TodaysTasks/>} />
              <Route path='/pending' element={<Pending/>} />
              <Route path='/late' element={<Late/>} />
              <Route path='/completed' element={<Completed/>} />
          </Route>
          
          :

          <Route path="/" element={<Navigate to="/login" />} />

         }
      </Routes> 
      
      

        
        
      </BrowserRouter>      
    </div>
  );
}

export default App;
