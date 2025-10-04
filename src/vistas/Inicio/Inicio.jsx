import { Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Inicio = ({ handleLogin, isLoggedIn, totalUsuarios, totalProductos }) => {
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Página de Inicio
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Para comenzar, haz clic en Ingresar y accede al panel de gestión.
        </Typography>
        <Button variant="contained" size="large" onClick={handleLogin}>
          Ingresar
        </Button>
      </Box>
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Resumen de Datos de la Aplicación',
      },
    },
  };

  const data = {
    labels: ['Usuarios', 'Productos'],
    datasets: [
      {
        label: 'Total',
        data: [totalUsuarios, totalProductos],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        ¡Bienvenido al Dashboard!
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={8} lg={6}>
          <Card>
            <CardContent>
              <Bar options={options} data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary" paragraph>
          ¿Qué quieres hacer ahora?
        </Typography>
        <Button variant="outlined" size="large" onClick={() => navigate('/usuarios')} sx={{ mr: 2 }}>
          Ir a Usuarios
        </Button>
        <Button variant="outlined" size="large" onClick={() => navigate('/productos')}>
          Ir a Productos
        </Button>
      </Box>
    </Box>
  );
};

export default Inicio;