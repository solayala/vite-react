import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from '@mui/material';
import {
  DashboardOutlined,
  SchoolOutlined,
  SettingsOutlined
} from '@mui/icons-material';
import * as ROUTES from 'src/config/navigation';
import './SideMenu.scss';

const menuItems = [
  {
    path: ROUTES.HOME,
    icon: <DashboardOutlined />,
    label: "Dashboard"
  },
  {
    path: ROUTES.LEARNING_GAME,
    icon: <SchoolOutlined />,
    label: "Learning Games"
  },
  {
    path: ROUTES.DASHBOARD,
    icon: <SettingsOutlined />,
    label: "Settings"
  }
];

const SideMenu = () => {
  const location = useLocation();

  const isActiveRoute = (path) => {
    if (path === ROUTES.HOME) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Drawer variant="permanent">
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={isActiveRoute(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;