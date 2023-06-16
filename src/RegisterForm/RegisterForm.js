import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';


const RegisterForm = () =>
{

    
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
   
  }, []);


    return (

        <div className={`LoginForm ${showForm ? 'show' : ''}`}>
        <label>Regisztráció</label><br></br>
        <div className={`Inside ${showForm ? 'show' : ''}`}>
            <input placeholder='Neve' type='text'></input><br></br>
            <input placeholder='Email' type='email'></input><br></br>
            <input placeholder='Jelszó' type='password'></input>
            <button>Regisztráció</button>
            <a href="/register" className="link">Van már fiókod? Jelentkezz be</a>
        </div>
    </div>
        
    );

}

export default RegisterForm