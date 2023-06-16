import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';
import LoginForm from '../LoginForm/LoginForm';


export const RegisterForm = (props) =>
{

    
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
   
  }, []);


    return (
        <div className={`LoginForm ${showForm ? 'show' : ''}`}>
        <label>Regisztráció</label><br></br>
        <div className={`Inside ${showForm ? 'show' : ''}`}>
            <input placeholder='Név' type='text'></input><br></br>
            <input placeholder='Email' type='email'></input><br></br>
            <input placeholder='Jelszó' type='password'></input>
            <button>Regisztráció</button>
            <a  className="link" onClick={() => props.onFormSwitch('login')}>Van már fiókod? Jelentkezz be</a>
        </div>
    </div>
        
    );

}

export default RegisterForm