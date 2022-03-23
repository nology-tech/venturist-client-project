import { render, screen } from "@testing-library/react";
import ChangePassword from "./ChangePassword";

//Arrange
beforeEach(() => {
  render(<ChangePassword />);
}) 

describe("Testing Input Field", () => {
  it('should render password address input box', async () => {
    //Act
    const inputPasswordElement = screen.getByTestId('password-input')

    //Assert
    expect(inputPasswordElement).toBeInTheDocument();
  });

});
