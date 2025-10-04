import { render, screen } from '@testing-library/react';
import CardProducto from '../src/componentes/CardProducto/CardProducto.jsx';

describe('Pruebas en el componente <CardProducto />', () => {

  const mockProducto = {
    id: 1,
    title: 'iPhone 9',
    description: 'Esto es un telefono de Apple',
    price: 549,
  };

  test('debe renderizar la información del producto pasada por props', () => {
    
    render(<CardProducto producto={mockProducto} />);

    expect(screen.getByText('iPhone 9')).toBeInTheDocument();

    const descripcionCortada = `${mockProducto.description.substring(0, 80)}...`;
    expect(screen.getByText(descripcionCortada)).toBeInTheDocument();

    expect(screen.getByText('$549')).toBeInTheDocument();
  });

});