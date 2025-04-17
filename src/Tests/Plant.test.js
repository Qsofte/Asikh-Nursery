import { render, screen } from "@testing-library/react";
import Plant from "../Pages/Plant"; 
import "@testing-library/jest-dom";


describe("Plant Component", () => {
  test("renders the main header", () => {
    render(<Plant />);
    const headerElement = screen.getByText("Plant Care:");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders the points section header", () => {
    render(<Plant />);
    const pointsHeader = screen.getByText("Points-");
    expect(pointsHeader).toBeInTheDocument();
  });

  test("renders both images with alt text", () => {
    render(<Plant />);
    const images = screen.getAllByAltText("description");
    expect(images.length).toBe(2); 
  });

  test("renders important paragraph texts", () => {
    render(<Plant />);
    expect(
      screen.getByText(/sunlight.*some prefer full sun/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/watering.*avoid overwatering/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/soil.*use well-drained/i)
    ).toBeInTheDocument();
  });
});
