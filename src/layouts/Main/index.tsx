import { Outlet } from "react-router-dom";

import { MainHeader } from "../../containers";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-layout">
      <MainHeader />
      <main className="main-layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default Main