import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';
import RegisterForm from '../RegisterForm/RegisterForm';



const LoginForm = () => 
{

    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
   
  }, []);

    return(
        <div className={`LoginForm ${showForm ? 'show' : ''}`}>
                <label>Banki bejelentkezés</label><br></br>
                <div className={`Inside ${showForm ? 'show' : ''}`}>
                    <input placeholder='Email' type='email'></input><br></br>
                    <input placeholder='Jelszó' type='password'></input>
                    <button>Belépés</button>
                    <a href="/register" className="link">Még nincs fiókod? Regisztrálj</a>
                </div>
            </div>
     
      

    )
}

export default LoginForm