import { render,screen } from "@testing-library/react";
import Navbar from "./NavBar";

describe("Testing the Navbar", () => {

  test("Check to see if Navbar Renders", () => {
    // Arrange
    render(<Navbar />)

    // Act
    const navbar = screen.getByTestId("navbar");
    // Assert
    expect(navbar).toBeInTheDocument();

  })

  test("Check to see if Header Renders", () => {
    // Arrange
    render(<Navbar />);

    // Act
    const header = screen.getAllByRole("heading");

    // Assert
    expect(header[0]).toHaveTextContent("VENTURIST")
  })

  test("Check for all button headers", () => {
    // Arrange
    const buttonLabels = ["Wallet","Live Rates","Convert","Transfer","Contacts"]
    render(<Navbar />);

    // Act
    const header = screen.getAllByRole("heading");

    // Assert
    for (let i = 1; i < header.length; i++)
    expect(header[i]).toHaveTextContent(buttonLabels[i-1]);
  })

})