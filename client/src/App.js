import { useState } from 'react';
import './App.css';
import { SigninPage } from './pages/SignInPage/SigninPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Main } from './pages/MainPage/Main';

import { TodaysTasks } from './pages/Today/TodaysTasks';
import { WeeksTask } from './pages/Week/WeeksTask';
import {MonthsTasks} from './pages/Month/MonthsTasks'
import { AllTodos } from './pages/AllTodos/AllTodos';


function App() {

  const [loggedin,setLoggedIn] = useState(false)
  return (
    <div className="App">

      <BrowserRouter >
        {
          loggedin ? 
          <Routes>
        
            <Route  path = "/" element = {<SigninPage/>}/> 

          </Routes> :

          <>
            <Routes>
              <Route  path = "/"  element={<Main/>}>
                   <Route path='/todos' element={<AllTodos/>} />
                   <Route path='/today' element={<TodaysTasks/>} />
                   <Route path='/week' element={<WeeksTask/>} />
                   <Route path='/month' element={<MonthsTasks/>} />

               </Route>
          </Routes>
          
          </>

          
          
          
        }

      </BrowserRouter>      
    </div>
  );
}

export default App;
