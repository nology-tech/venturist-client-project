import { getByTestId, render,screen } from "@testing-library/react";
import Tiles from "./Tiles";


  test("Should Render Provided Account Name", () => {

    // Arrange
    render(<Tiles accountName="Harvir" /> );

    // Act
    const tiles = screen.getByTestId("tiles");
  

    // Assert
    expect(tiles).toHaveTextContent("Harvir");


  })


  test("Should Render Provided Account Balance", () => {

    // Arrange
    render(<Tiles accountBalance= "200" /> );

    // Act
    const tiles = screen.getByTestId("tiles");
  

    // Assert
    expect(tiles).toHaveTextContent("200");


  })

  test("Should Render Provided Currency Symbol", () => {

    // Arrange
    render(<Tiles currencySymbol= "£" /> );

    // Act
    const tiles = screen.getByTestId("tiles");
  

    // Assert
    expect(tiles).toHaveTextContent("£");


  })



  