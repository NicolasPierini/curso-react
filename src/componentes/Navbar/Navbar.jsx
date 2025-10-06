import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {isLoggedIn && (
            <>
              {location.pathname !== '/' && (
                <>
                  <Button onClick={() => navigate('/')} color="inherit">
                    Dashboard
                  </Button>
                  {location.pathname !== '/usuarios' && (
                    <Button onClick={() => navigate('/usuarios')} color="inherit">
                      Usuarios
                    </Button>
                  )}
                  {location.pathname !== '/productos' && (
                    <Button onClick={() => navigate('/productos')} color="inherit">
                      Productos
                    </Button>
                  )}
                </>
              )}
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