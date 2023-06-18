import React, { useEffect, useState } from 'react';
import '../LoginForm/LoginForm.css';
import LoginForm from '../LoginForm/LoginForm';
import Validation from './RegisterFormVal';
import axios from 'axios' //npm install axios
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const RegisterForm = (props) =>
{
    const [values, setValues] = useState({
        name: '',
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
      if(errors.name === "" && errors.email === "" && errors.password === ""){
        axios.post('http://localhost:5000/register', values)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
      }
  } 

    return (
        <div className={`LoginForm ${showForm ? 'show' : ''}`}>
        <label>Regisztráció</label><br></br>
        <form action="" onSubmit={handleSubmit}>
        <div className={`Inside ${showForm ? 'show' : ''}`}>
            <input placeholder='Név' type='text' name='name' onChange={handleInput} ></input><br></br>
            {errors.name && <span> {errors.name} </span>}<br></br>
            <input placeholder='Email' type='email' name='email' onChange={handleInput} ></input><br></br>
            {errors.email && <span> {errors.email} </span>} <br></br>
            <input placeholder='Jelszó' type='password' name='password' onChange={handleInput} ></input><br></br>
            {errors.password && <span> {errors.password} </span>}<br></br>
            <button type= 'submit'>Regisztráció</button><br></br>
            <Link to="/" >Van már fiókod? Jelentkezz be</Link>
        </div>
        </form>
    </div>
        
    );

}

export default RegisterForm