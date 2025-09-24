import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './componentes/Layout/Layout';
import Inicio from './vistas/Inicio/Inicio.jsx';
import Usuarios from './vistas/Usuarios/Usuarios.jsx';
import Productos from './vistas/Productos/Productos.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/usuarios');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>

      <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Inicio handleLogin={handleLogin} />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;