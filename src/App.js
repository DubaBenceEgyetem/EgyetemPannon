import './App.css';
import React, {userState, useEffect, useState } from 'react';
import  LoginForm  from '../src/LoginForm/LoginForm';
import  RegisterForm  from './RegisterForm/RegisterForm';
import Navbar from './Navbar/Navbar';





function App() {
  
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
 
}, []);


const [currentForm, setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  setCurrentForm(formName);
}


  return (
    
    <div className={`Wallpaper ${showForm ? 'show' : ''}`}> 
      <div className={`BackgroundOverlay ${showForm ? 'show' : ''}`}>
        <Navbar/>
        <div>
          {
            currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <RegisterForm onFormSwitch={toggleForm}/>
          }
        </div>
      </div> 
    </div>
   
      
  
   
  );
}

export default App;

