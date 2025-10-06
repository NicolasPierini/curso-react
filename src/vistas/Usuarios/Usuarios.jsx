import { useState } from 'react';
import CardUsuario from '../../componentes/CardUsuario/CardUsuario';
import { Grid, Typography, Alert, Box, Pagination } from '@mui/material';

const Usuarios = ({ usuarios }) => {
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  const count = Math.ceil(usuarios.length / ITEMS_PER_PAGE);
  const usuariosPaginados = usuarios.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (usuarios.length === 0) {
    return <Alert severity="info">No hay usuarios para mostrar.</Alert>;
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