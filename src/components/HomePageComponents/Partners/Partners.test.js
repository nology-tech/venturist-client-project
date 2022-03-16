import { render, screen } from "@testing-library/react";
import Partners from "./Partners";

describe("Testing partners section", () => {
  test("Render partners section on the page", () => {
    //Arrange
    render(<Partners />);
    //Act
    const partersSection = screen.getByTestId("partners");
    //Assert
    expect(partersSection).toBeInTheDocument();
  });
});
