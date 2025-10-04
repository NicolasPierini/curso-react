import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardUsuario = ({ usuario }) => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {usuario.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {usuario.username}
        </Typography>
        <Typography variant="body2">
          Email: <strong>{usuario.email}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardUsuario;