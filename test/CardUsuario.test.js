import { render, screen } from '@testing-library/react';
import CardUsuario from '../src/componentes/CardUsuario/CardUsuario.jsx';

describe('Pruebas en el componente <CardUsuario />', () => {

  const mockUsuario = {
    id: 1,
    name: 'Nicolas',
    username: 'Pierini',
    email: 'nico@gmail.com',
  };

  test('debe renderizar la información del usuario pasada por props', () => {
    
    render(<CardUsuario usuario={mockUsuario} />);

    expect(screen.getByText('Nicolas')).toBeInTheDocument();
    expect(screen.getByText('Pierini')).toBeInTheDocument();
    expect(screen.getByText('nico@gmail.com')).toBeInTheDocument();
  });

});