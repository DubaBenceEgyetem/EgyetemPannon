import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import LoginForm from '../src/LoginForm/LoginForm';
import '../src/LoginForm/LoginForm.css';


function App() {
  
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
 
}, []);

  return (
    
      <div className={`Wallpaper ${showForm ? 'show' : ''}`}> 
        <div className={`BackgroundOverlay ${showForm ? 'show' : ''}`}>
        <LoginForm/>
        </div>
        </div>
   
  );
}

export default App;

