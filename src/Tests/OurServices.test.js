import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OurServices from '../Pages/OurServices'; 
import '@testing-library/jest-dom'; 

describe('OurServices Component', () => {
  test('renders the header and breadcrumb', async () => {
    render(
      <MemoryRouter>
        <OurServices />
      </MemoryRouter>
    );

    expect(screen.getAllByText('Our Services')).toHaveLength(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders all service cards with title, description, and image', () => {
    render(
      <MemoryRouter>
        <OurServices />
      </MemoryRouter>
    );

    
    const serviceCards = screen.getAllByRole('heading', { level: 2 });

    
    expect(serviceCards.length).toBeGreaterThan(0);
    
    serviceCards.forEach((title) => {

      const description = screen.getAllByText(/plant care|focus|garden maintenance|home delivery|custom garden setup/i);
      const images = screen.getAllByAltText((alt) => alt.length > 0); 

      expect(title).toBeInTheDocument();
      expect(description.length).toBeGreaterThan(0); 
      expect(images.length).toBeGreaterThan(0); 
    });
  });

  test('"Know more" links navigate correctly', () => {
    render(
      <MemoryRouter>
        <OurServices />
      </MemoryRouter>
    );


    const links = screen.getAllByText('Know more →');
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '/our-services');
    });
  });
});