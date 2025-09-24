import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardUsuario from '../../componentes/CardUsuario/CardUsuario';
import { Container, Grid, Typography, CircularProgress, Alert, Box, Pagination } from '@mui/material';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const url = 'https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users';
    const obtenerUsuarios = async () => {
      try {
        const response = await axios.get(url);
        setUsuarios(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    obtenerUsuarios();
  }, []);

  const count = Math.ceil(usuarios.length / ITEMS_PER_PAGE);
  const usuariosPaginados = usuarios.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <>
        <CircularProgress />
        <Typography>Cargando usuarios...</Typography>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Alert severity="error">Error al cargar los usuarios: {error.message}</Alert>
      </>
    );
  }

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Lista de Usuarios
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {usuariosPaginados.map(usuario => (
          <Grid item xs={12} sm={6} md={6} key={usuario.id}>
            <CardUsuario usuario={usuario} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </>
  );
};

export default Usuarios;