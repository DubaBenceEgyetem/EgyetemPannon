import './App.css';
import React, {useEffect, useState } from 'react';
import  LoginForm  from '../src/LoginForm/LoginForm';
import  RegisterForm  from '../src/RegisterForm/RegisterForm';
import Navbar from './Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../src/Home/Home';


function App() {
  
  const [showForm, setShowForm] = useState(false);

  
  
  useEffect(() => {
    setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
    
  }, [])
  
  
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
  return (
     
  <div className={`Wallpaper ${showForm ? 'show' : ''}`}> 
     <div className={`BackgroundOverlay ${showForm ? 'show' : ''}`}>
        <Navbar/>
      <BrowserRouter>
         <Routes>
              <Route path='/' element={<LoginForm />}></Route>
              <Route path='/register' element={<RegisterForm/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
      </div> 
    </div>

   //currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegisterForm onFormSwitch={toggleForm}/>
 
  );

 
}

export default App;

