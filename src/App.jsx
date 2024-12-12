import React, { useState } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from 'src/context/AuthContext';
import AppRoutes from 'src/Routes';
import Header from 'src/components/Header/Header';
import SideMenu from 'src/components/SideMenu/SideMenu';
import 'src/styles/main.scss';

function AppContent() {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(true);
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <AuthProvider>
      {!isLoginPage && (
        <Header toggleSideMenu={() => setIsSideMenuVisible(!isSideMenuVisible)} />
      )}
      <div className="app-container">
        {!isLoginPage && isSideMenuVisible && <SideMenu />}
        <div className={`content ${isLoginPage ? 'login-content' : ''}`}>
          <AppRoutes />
        </div>
      </div>
    </AuthProvider>
  );
}

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App;