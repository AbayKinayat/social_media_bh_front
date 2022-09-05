import React from 'react';

import { LoginForm, LoginNews } from '../../containers';
import { routes } from '../../routes';
import "./Login.scss";

const Login: React.FC = () => {
    return (
        <div className="app-login">
            <div className="app-login__form-container">
                <h1>
                    {routes.login.name}
                </h1>
                <LoginForm />
            </div>
            <div className="app-login__news">
                {/* Последние новости */}
                <LoginNews /> 
            </div>
        </div>
    )
}

export default Login