import { render, screen } from "@testing-library/react";
import Features from "./Features.jsx";

describe("Testing features section", () => {
  test("Render features section on the page", () => {
    //Arrange
    render(<Features />);
    //Act
    const featureSection = screen.getByTestId("features");
    //Assert
    expect(featureSection).toBeInTheDocument();
  });

  test("Render button on the page", () => {
    //Arrange
    render(<Features />);
    //Act
    const button = screen.getByTestId("button");
    //Assert
    expect(button).toBeInTheDocument();
  });
});
