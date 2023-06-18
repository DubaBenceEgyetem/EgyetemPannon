import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';
import RegisterForm from '../RegisterForm/RegisterForm';
import Validation from './LoginFormVal'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 



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

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const handleInput = (event) =>
    {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        const err = (Validation(values))
      setErrors(err)
      if(errors.email === "" && errors.password === ""){
        axios.post('http://localhost:5000/login', values)
        .then(res => {
            if(res.data === "Success"){
                navigate('/home')
            }
            else {
                alert("Hibás adatok")
            }
        })
        .catch(err => console.log(err))
      }
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
                    <button type= 'submit'>Belépés</button> <br></br>
                    <Link to="/register" > Még nincs fiókod? Regisztrálj </Link>
                    
                </div>
                </form>
            </div>
     
      

    )
}

export default LoginForm