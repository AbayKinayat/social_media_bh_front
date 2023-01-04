import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ListItem, Sidebar } from "../../components";

import { MainHeader } from "../../containers";
import "./Main.scss";

const Main = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  return (
    <div className="main-layout">
      <MainHeader />
      <main className="main-layout__content">
        <Sidebar
          isOpen={sidebarIsOpen}
          color="secondary"
          position="left"
          className="main-sidebar"
        >
          <ListItem>
            Главная
          </ListItem>
          <ListItem>
            Канбан
          </ListItem>
          <ListItem>
            Профиль
          </ListItem>
          <ListItem>
            Чат
          </ListItem>
        </Sidebar>
        <Outlet />
      </main>
    </div>
  )
}

export default Main