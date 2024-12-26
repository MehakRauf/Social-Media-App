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
  const currentUser = true; // Simulating authentication state

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
            <Outlet />
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
