import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Registration } from "./pages";
import { AuthLayout } from "./layouts";
import { routes } from "./routes";
import { Typography } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={routes.auth.path} element={<AuthLayout />}>
          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.registration.path} element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
