import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { List, ListItem, Sidebar } from "../../components";

import { MainHeader } from "../../containers";
import "./Main.scss";

const navLinkClassName = ({ isActive }: { isActive: boolean }) => isActive ? "main-layout__link main-layout__link--active" : "main-layout__link"

const Main = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  return (
    <div className="main-layout">
      <MainHeader />
      <div className="main-layout__content">
        <Sidebar
          isOpen={sidebarIsOpen}
          color="secondary"
          position="left"
          className="main-sidebar"
        >
          <nav>
            <List>
              <NavLink to="/" className={navLinkClassName}>
                <ListItem>
                  Главная
                </ListItem>
              </NavLink>
              <NavLink to="/canban" className={navLinkClassName}>
                <ListItem>
                  Канбан
                </ListItem>
              </NavLink>
              <NavLink to="/profile" className={navLinkClassName}>
                <ListItem>
                  Профиль
                </ListItem>
              </NavLink>
              <NavLink to="/chat" className={navLinkClassName}>
                <ListItem>
                  Чат
                </ListItem>
              </NavLink>
            </List>
          </nav>
        </Sidebar>
        <main className="main-layout__main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Main