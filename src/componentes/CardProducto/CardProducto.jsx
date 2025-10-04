import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardProducto = ({ producto }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', maxWidth: 400, margin: 'auto' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {producto.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.description.substring(0, 80)}...
        </Typography>
        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
          ${producto.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardProducto;