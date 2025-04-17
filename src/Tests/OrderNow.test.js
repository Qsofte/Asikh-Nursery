import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderNow from '../Pages/OrderNow';
import { MemoryRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));


jest.mock('../ImageProducts/Asparagus marry.jpg', () => 'asparagus.jpg');
jest.mock('../ImageProducts/Rangon Chinease.jpg', () => 'rangon.jpg');

describe('OrderNow Component', () => {
  test('renders product cards with correct data', () => {
    render(
      <MemoryRouter>
        <OrderNow />
      </MemoryRouter>
    );

    expect(screen.getByText('Asparagus marry')).toBeInTheDocument();
    expect(screen.getByText('Rangon Chinease')).toBeInTheDocument();
    expect(screen.getAllByText(/Buy Now/i)).toHaveLength(2);
  });

  test('filter by category works correctly', () => {
    render(
      <MemoryRouter>
        <OrderNow />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Category/i), {
      target: { value: 'Indoor' },
    });

    expect(screen.getByText('Asparagus marry')).toBeInTheDocument();
    expect(screen.queryByText('Rangon Chinease')).not.toBeInTheDocument();
  });

  test('sorting by price low to high works', () => {
    render(
      <MemoryRouter>
        <OrderNow />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Sort by/i), {
      target: { value: 'price-low-high' },
    });

    const productNames = screen.getAllByRole('heading', { level: 3 });
    const names = productNames.map((el) => el.textContent);
    expect(names).toEqual(['Rangon Chinease', 'Asparagus marry']); // ₹120 before ₹150
  });

  test('clicking Buy Now navigates', () => {
    render(
      <MemoryRouter>
        <OrderNow />
      </MemoryRouter>
    );

    const buyButtons = screen.getAllByText(/Buy Now/i);
    fireEvent.click(buyButtons[0]);
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
