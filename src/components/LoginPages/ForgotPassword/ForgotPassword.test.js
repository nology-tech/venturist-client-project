import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ForgotPassword from "./ForgotPassword";

const mockTogglePage = jest.fn()

//Arrange
beforeEach(() => {
  render(<ForgotPassword togglePage={mockTogglePage} />);
}) 

describe("Testing Input Field", () => {
  it('should render email address input box', async () => {
    //Act
    const inputEmailElement = screen.getByTestId('email-input')

    //Assert
    expect(inputEmailElement).toBeInTheDocument();
  });

  it('should be able to type into the email input box', async () => {
    //Act
    const inputEmailElement = screen.getByTestId('email-input')
    userEvent.click(inputEmailElement)
    userEvent.type(inputEmailElement, 'sambrooks@gmail.com')

    //Assert
    expect(inputEmailElement.value).toBe('sambrooks@gmail.com')
  });
});

describe("Testing Buttons", () => {
    it('should render send button on the page', async () => {
    //Act
    const buttonElement = screen.getByText(/Send/i);
  
    //Assert
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render go back button on the page', async () => {
    //Act
    const buttonElement = screen.getByText(/Go Back/i);
  
    //Assert
    expect(buttonElement).toBeInTheDocument();
  });
});
