import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import ProductCard from "../Components/ProductCard";


jest.mock("qrcode.react", () => ({
  QRCodeCanvas: () => <div data-testid="mock-qrcode" />,
}));

const mockProduct = {
  name: "Aloe Vera",
  image: "aloe.jpg",
  price: 150,
  description: "A low-maintenance indoor plant.",
  url: "https://asikhnursery.com/products/aloe-vera"
};

describe("ProductCard Component", () => {
  test("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Aloe Vera");
    const name = screen.getByText("Aloe Vera");
    const price = screen.getByText("150"); 
    const description = screen.getByText("A low-maintenance indoor plant.");

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test("renders QR code", () => {
    render(<ProductCard product={mockProduct} />);

    const qrCode = screen.getByTestId("mock-qrcode");
    expect(qrCode).toBeInTheDocument();
  });
});
