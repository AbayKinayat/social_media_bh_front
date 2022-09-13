import React from "react";
import { Link } from "react-router-dom";

import { LoginForm, LoginNews } from "../../containers";
import { Typography } from "../../components";
import { routes } from "../../routes";
import "./Login.scss";

const Login: React.FC = () => {
  return (
    <div className="app-login">
      <div className="app-login__form-container">
        <Typography
          variant="h4"
          className="app-login__title"
          color="white"
        >
          {routes.login.name}
        </Typography>
        <Typography
          variant="body2"
          color="white"
        >
          У вас нет аккаунта? <Link to={routes.registration.genereteFullPath()} className="primary--text">Зарегистрируйтесь</Link>
        </Typography>
        <LoginForm />
      </div>
      <div className="app-login__news">
        {/* Последние новости */}
        <LoginNews />
      </div>
    </div>
  );
};

export default Login;
