import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../../componentes/CardProducto/CardProducto';
import { Container, Grid, Typography, CircularProgress, Alert, Box, Pagination } from '@mui/material';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const url = 'https://cors-anywhere.herokuapp.com/https://dummyjson.com/products';
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        setProductos(response.data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  }, []);

  const count = Math.ceil(productos.length / ITEMS_PER_PAGE);
  const productosPaginados = productos.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <Container style={{ textAlign: 'center', marginTop: '20px' }}>
        <CircularProgress />
        <Typography>Cargando productos...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">Error al cargar los productos: {error.message}</Alert>
      </Container>
    );
  }

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Catálogo de Productos
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {productosPaginados.map(producto => (
          <Grid item xs={12} sm={6} md={6} key={producto.id}>
            <CardProducto producto={producto} />
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

export default Productos;