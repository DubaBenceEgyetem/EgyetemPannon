import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import Validation from './LoginFormVal'



export const LoginForm = (props) => 
{
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      setShowForm(true); // Amikor a komponens betöltődik, beállítjuk a showForm értékét true-ra, hogy elinduljon az animáció
   
  }, []);
    const [errors, setErrors] = useState({})
    const handleInput = (event) =>
    {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        setErrors(Validation(values))
    } 

    return(
        <div className={`LoginForm ${showForm ? 'show' : ''}`}>
                <label>Banki bejelentkezés</label><br></br>
                <form action = "" onSubmit={handleSubmit}>
                <div className={`Inside ${showForm ? 'show' : ''}`}>
                    <input placeholder='Email' type='email' name = 'email' onChange={handleInput} ></input><br></br>
                    {errors.email && <span> {errors.email} </span>}
                    <br></br>
                    <input placeholder='Jelszó' type='password' name = 'password' onChange={handleInput} ></input><br></br>
                    {errors.password && <span> {errors.password} </span>}
                    <br></br>
                    <button type= 'submit'>Belépés</button>
                    <a  className="link" onClick={() => props.onFormSwitch('register')}>Még nincs fiókod? Regisztrálj</a>
                </div>
                </form>
            </div>
     
      

    )
}

export default LoginForm