import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Registration } from "./pages";
import { AuthLayout } from "./layouts";
import { useAppDispatch } from "./hooks";
import { routes } from "./routes";
import { refresh } from "./app/slices/AuthSlice/actionCreators";
import "./App.css";
import { PrivateRoute } from "./components";
import Private from "./pages/Private";

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(refresh());
  }, [])

  return (
    <div>
      <Routes>
        <Route
          path={"/private"}
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>}
        />


        <Route path={routes.auth.path} element={<AuthLayout />}>

          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.registration.genereteFullPath()} element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
