import { getByTestId, render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Testing the Header", () => {
  test("Check to see if Header Renders", () => {
    // Arrange
    render(<Header />);

    // Act
    const header = screen.getByTestId("header");
    // Assert
    expect(header).toBeInTheDocument();
  });

  //   Title (h5) test
  test("Check if the Header title Renders", () => {
    // Arrange
    render(<Header />);

    // Act
    const title = screen.getByTestId("title");

    // Assert
    expect(title).toBeInTheDocument();
  });

  // Title - convert
  test("Check to see if title 'convert' Renders", () => {
    // Arrange
    render(<Header title="Convert" />);

    // Act
    const title = screen.getByTestId("title");

    // Assert
    expect(title).toHaveTextContent("Convert");
  });

  //   Page function heading (h1) test
  test("Check if the Header pageFunctionHeading Renders", () => {
    // Arrange
    render(<Header />);

    // Act
    const pageFunction = screen.getByTestId("page-function");

    // Assert
    expect(pageFunction).toBeInTheDocument();
  });

  //   Page function heading (h1) - currency converter
  test("Check if the Header pageFunctionHeading 'currency converter' Renders", () => {
    // Arrange
    render(<Header pageFunctionHeading="Currency Converter"/>);

    // Act
    const pageFunction = screen.getByTestId("page-function");

    // Assert
    expect(pageFunction).toHaveTextContent("Currency Converter");
  });

  //   Description text (p tag) test
  test("Check if the Header textDescription Renders", () => {
    // Arrange
    render(<Header />);

    // Act
    const textDescription = screen.getByTestId("description");

    // Assert
    expect(textDescription).toBeInTheDocument();
  });

  //   Description text (p tag) test - text
  test("Check if the Header textDescription 'text' Renders", () => {
    // Arrange
    render(<Header textDescription="All your friends and family"/>);

    // Act
    const textDescription = screen.getByTestId("description");

    // Assert
    expect(textDescription).toHaveTextContent("All your friends and family");
  });
});