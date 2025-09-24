import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Inicio = ({ handleLogin }) => {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenido
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Accede para ver la información de usuarios y productos
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        onClick={handleLogin}
      >
        Ingresar
      </Button>
    </Box>
  );
};

export default Inicio;
