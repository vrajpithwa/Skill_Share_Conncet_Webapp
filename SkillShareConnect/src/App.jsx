import { useState } from 'react'
import './App.css'
import AddUserForm from './components/Adduser';
import MainScreen from './screens/MainScreen';
import LoginPage from './screens/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <div>
        <section>                              
            <Routes>                                                                       
               <Route path="/" element={<LoginPage/>}/>
               {/* <Route path="/signup" element={<S/>}/> */}
               <Route path="/main" element={<MainScreen/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
    </>
  )
}

export default App
