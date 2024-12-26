import React from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import RightBar from './components/RightBar/RightBar';
import LeftBar from './components/LeftBar/LeftBar';

const App = () => {
  const currentUser = true; 

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div className='theme-dark'>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
