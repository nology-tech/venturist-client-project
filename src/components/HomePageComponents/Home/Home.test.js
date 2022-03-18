import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Testing features section", () => {
  test("Render home section on the page", () => {
    //Arrange
    render(<Home />);
    //Act
    const homeSection = screen.getByTestId("home");
    //Assert
    expect(homeSection).toBeInTheDocument();
  });

  test("Render image on the page", () => {
    //Arrange
    render(<Home />);
    //Act
    const homeImg = screen.getByTestId("home-img");
    //Assert
    expect(homeImg).toBeInTheDocument();
  });
});
