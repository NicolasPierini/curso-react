import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './componentes/Layout/Layout';
import Inicio from './vistas/Inicio/Inicio.jsx';
import Usuarios from './vistas/Usuarios/Usuarios.jsx';
import Productos from './vistas/Productos/Productos.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const urlUsuarios = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users';
    axios.get(urlUsuarios).then(res => setUsuarios(res.data)).catch(err => console.error("Error al obtener usuarios:", err));

    const urlProductos = 'https://cors-anywhere.herokuapp.com/https://dummyjson.com/products';
    axios.get(urlProductos, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
      .then(res => setProductos(res.data.products))
      .catch(err => console.error("Error al obtener productos:", err));
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Inicio handleLogin={handleLogin} isLoggedIn={isLoggedIn} totalUsuarios={usuarios.length} totalProductos={productos.length} />} />
          <Route path="/usuarios" element={<Usuarios usuarios={usuarios} />} />
          <Route path="/productos" element={<Productos productos={productos} />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;