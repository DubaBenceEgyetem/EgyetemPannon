import './App.css';
import React, {userState, useEffect, useState } from 'react';
import  LoginForm  from '../src/LoginForm/LoginForm';
import  RegisterForm  from './RegisterForm/RegisterForm';
import Navbar from './Navbar/Navbar';







function App() {
  
  const [backendData, setBackendData] = useState([{}]);
  const [showForm, setShowForm] = useState(false);

  
  
  useEffect(() => {
    setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
    
  }, [])
  
  
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  

  //kap valamit ay apitol
  useEffect(() =>
    {
      fetch("/api").then(
        response => response.json()
       ).then(
        data => {
          setBackendData(data)
        }
       )
    }, [])
    //vege

  return (
    
    <div className={`Wallpaper ${showForm ? 'show' : ''}`}> 
     <div className={`BackgroundOverlay ${showForm ? 'show' : ''}`}>
        <Navbar/>
          {
              (typeof backendData.users ==='undefined')
               ? 
               (
                <p>loading..</p>
               )
               :
               (
                backendData.users.map((user, i) => 
                <p key={i}>{user}</p>
                )
               )
          }
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

