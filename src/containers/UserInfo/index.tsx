import { FC, useState } from 'react';

import { Button, Menu, MenuItem } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../app/slices/AuthSlice/actionCreators';

import "./UserInfo.scss";

const UserInfo: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuIsOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  }

  const handleLogoutClick = () => {
    dispatch(logout());
  }

  return <>
    <Button className="user-info" onClick={handleOpenMenu}>
      {user?.lastName} {user?.firstName}
    </Button>
    <Menu
      anchorEl={anchorEl}
      isOpen={menuIsOpen}
      onClose={handleCloseMenu}
      className="user-info-menu"
    >
      <MenuItem>
        Настройка
      </MenuItem>
      <MenuItem
        onClick={handleLogoutClick}
      >
        Выйти
      </MenuItem>
    </Menu>
  </>
}

export default UserInfo; 