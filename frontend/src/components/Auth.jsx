import { Login } from "./Login";
import { Register } from "./Registration";

import React,{ useState } from 'react';

const Auth = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
    setCurrentForm(formName);
    }
    return currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />;
};


export default Auth;