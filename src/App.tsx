import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Registration } from "./pages";
import { AuthLayout } from "./layouts";
import { useAppDispatch } from "./hooks";
import { routes } from "./routes";
import { refresh } from "./app/slices/AuthSlice/actionCreators";
import { PrivateRoute } from "./components";
import Home from "./pages/Home";
import Main from "./layouts/Main";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [])

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />} />
        </Route>
        <Route path={routes.auth.path} element={<AuthLayout />}>
          <Route path={routes.login.path} element={<Login />} />
          <Route path={routes.registration.genereteFullPath()} element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
