import { FC, useState } from 'react';
import { Button, Menu, MenuItem } from '../../components';
import { useAppSelector } from '../../hooks';

import "./UserInfo.scss";

const UserInfo: FC = () => {
  const { user } = useAppSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuIsOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
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
      <MenuItem>
        Выйти
      </MenuItem>
    </Menu>
  </>
}

export default UserInfo; 