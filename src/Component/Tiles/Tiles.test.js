import { getByTestId, render,screen } from "@testing-library/react";
import Tiles from "./Tiles";


  test("Should Render Provided Account Name", () => {

    // Arrange
    render(<Tiles accountName="Samantha" /> );

    // Act
    const tiles = screen.getByTestId("tiles");
  

    // Assert
    expect(tiles).toHaveTextContent("Samantha");
  })


  test("Should Render Provided Account Balance", () => {

    // Arrange
    render(<Tiles accountBalance= "3751.59" /> );

    // Act
    const tiles = screen.getByTestId("tiles");

    // Assert
    expect(tiles).toHaveTextContent("3751.59");
  })

  test("Should Render Provided Currency Symbol", () => {

    // Arrange
    render(<Tiles currencySymbol= "£" /> );

    // Act
    const tiles = screen.getByTestId("tiles");
  
    // Assert
    expect(tiles).toHaveTextContent("£");
  })



  