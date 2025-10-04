import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {!isLoggedIn && (
            <Button onClick={() => navigate('/')} color="inherit">
              Inicio
            </Button>
          )}

          {isLoggedIn && (
            <>
              <Button onClick={() => navigate('/usuarios')} color="inherit">
                Usuarios
              </Button>
              <Button onClick={() => navigate('/productos')} color="inherit">
                Productos
              </Button>
            </>
          )}
        </Box>

        {isLoggedIn && (
          <Button onClick={handleLogout} color="inherit">
            Salir
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;