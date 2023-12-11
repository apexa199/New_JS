import React from 'react';
import ReactDOM from 'react-dom/client';
import MultipleState from './MultipleState';
import { Counter } from './Home';
import { APIDisplay } from './APIDisplay';
import { FormFunction } from './FormFunction';
import {Ecommerce} from './Ecommerce1';

import 'bootstrap/dist/css/bootstrap.min.css';
import MyProps from './MyProps';
import FormInClass from './FormInClass';
import {SignUpForm } from './FormValidnWithoutYp';
import { RegistrationForm } from './RegistrationForm';
import { DataMangment } from './DataMangment';
import { LogInForm1 } from './pages/LogInForm1';
import { FormWithUseFormik } from './FormWithUseFormik';
import { Login } from './Login';
import { BrowserRouter } from "react-router-dom";
import { LogInNav } from './pages/LogInNav';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
< App/>
</BrowserRouter>

);

