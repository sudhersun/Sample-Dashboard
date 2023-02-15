import React,{useState,useEffect} from 'react';
import './LoginPage_style.css';
import {useNavigate} from 'react-router';

const LoginPageDynamic = () => {
    // declare a state and variable;
    const [inputValue, setInputValue] = useState({username: '', email: '', password: ''});
    const [error, setError] = useState({});
    const navigator = useNavigate()

    // handlChange function;
    const handleChange = (e) => {
        setInputValue({
            ...inputValue,[e.target.name]: e.target.value
        });
    }

    // declare a validate variable of object for checking authentcation by using object keys & values;
    const validateValue = {
        username: {
            required: true
        },
        email: {
            required : true,
            pattern: /^\S+@\S+$/
        },
        password: {
            required : true,
            minlength : 8
        }
    };
   
    // create a useEffect Hooks method for --> if the 'auth' is stored in the localStorage the page will be push to the dashboard, it  will not stay in the login page
    useEffect(() => {
        if(localStorage.getItem('auth')){
            navigator('/');
        }
        // eslint-disable-next-line
    },[])

    // validaion function is call from the handleSubmit functio. It is validate the inputs and return the error 
    const validation = () => {
        const errorValue = {};
        for(const key in validateValue){
            if(validateValue[key].required && !inputValue[key]){
                errorValue[key] = 'Field must be filled';
            }
            if(validateValue[key].pattern && !validateValue[key].pattern.test(inputValue[key])){
                errorValue[key] = 'Invalid email';
            }
            if(validateValue[key].minlength && inputValue[key].length < validateValue[key].minlength ){
                errorValue[key] = 'Password should be greater than ' + validateValue[key].minlength;
            }
        }
        // in this we will get the email and password through the dataBase (in future)
        // now we declare email & password manually
        if(inputValue.email !== 'admin@a.com' || inputValue.password !== 'Password@1'){
            setError(errorValue);
            return errorValue;
        }
    // if this validation is success the login page is push through the dashboard and add the 'auth' into the localStorage
        navigator(`/Dashboard?email=${inputValue.email}`);
        localStorage.setItem('auth', true);
        localStorage.setItem('username', inputValue.username);
    }
    // handleSubmit function. when we click the submit button this function will be worked 
    const handleSubmit = (e) => {
        e.preventDefault();
        validation();
    }
    
    return (
        <div className="login_main_container">
             <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="header">
                        <h1>Login your Account</h1>
                    </div>
                        <div className="form-control">
                            <label>Username</label>
                            <input type='text' name='username' placeholder='username' value={inputValue.username} onChange={handleChange} />
                            <span>{error.username}</span><br/>
                        </div>
                        <div className="form-control">
                            <label>Email</label>
                            <input type='email' name='email' placeholder='email' value={inputValue.email} onChange={handleChange} />
                            <span>{error.email}</span><br />
                        </div>
                        <div className="form-control">
                            <label>Password</label>
                            <input type='password' name='password' placeholder='password' value={inputValue.password} onChange={handleChange} />
                            <span>{error.password}</span><br />
                        </div>
                        <button type='submit' className='btn' value='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPageDynamic;
