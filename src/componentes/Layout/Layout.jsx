import Navbar from '../Navbar/Navbar';
import { Container } from '@mui/material';

const Layout = ({ children, isLoggedIn, handleLogout }) => {
  return (
    <Container maxWidth="lg">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main style={{ padding: '20px 0', minHeight: '80vh' }}>
        {children}
      </main>
      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#666', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <p>&copy; Nicolas Pierini - Trabajo Practico React</p>
      </footer>
    </Container>
  );
};

export default Layout;