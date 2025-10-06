import { useState } from 'react';
import CardProducto from '../../componentes/CardProducto/CardProducto';
import { Grid, Typography, Alert, Box, Pagination } from '@mui/material';

const Productos = ({ productos }) => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 4;

  const count = Math.ceil(productos.length / ITEMS_PER_PAGE);
  const productosPaginados = productos.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (productos.length === 0) {
    return <Alert severity="info">No hay productos para mostrar.</Alert>;
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