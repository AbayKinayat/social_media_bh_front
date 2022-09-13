import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Welcome } from '../../components';
import RegistrationForm from '../../containers/RegistrationForm';
import { routes } from '../../routes';
import "./Registration.scss";

const Registration: React.FC = () => {
    return (
        <div className="app-registration">
            <div className="app-registration__welcome">
                <Welcome />
            </div>
            <div className="app-registration__form-container">
                <Typography
                    variant="h4"
                    className="app-login__title"
                    color="white"
                    fontWeight={700}
                >
                    {routes.registration.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="white"
                    style={{ marginBottom: 20 }}
                >
                    Если у вас уже есть аккаунт? <Link to={routes.login.genereteFullPath()} className="primary--text">Авторизуйтесь</Link>
                </Typography>
                <RegistrationForm />
            </div>
        </div>
    )
}

export default Registration