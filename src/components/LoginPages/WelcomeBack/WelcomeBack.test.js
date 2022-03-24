import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WelcomeBack from "./WelcomeBack";
import { BrowserRouter, Router } from "react-router-dom";

const mockTogglePage = jest.fn()

//Arrange
beforeEach(() => {
  render(<BrowserRouter><WelcomeBack togglePage={mockTogglePage}/></BrowserRouter>);
}) 

describe("Testing Input Fields", () => {
  it('should render email input box', async () => {
    //Act
    const inputEmailElement = screen.getByTestId('email-input')

    //Assert
    expect(inputEmailElement).toBeInTheDocument();
  });

  it('should render password input box', async () => {
    //Act
    const inputPasswordElement = screen.getByTestId('password-input')

    //Assert
    expect(inputPasswordElement).toBeInTheDocument();
  });

  it('should be able to type into the email input box', async () => {
    //Act
    const inputEmailElement = screen.getByTestId('email-input')
    userEvent.click(inputEmailElement)
    userEvent.type(inputEmailElement, 'sambrooks@gmail.com')

    //Assert
    expect(inputEmailElement.value).toBe('sambrooks@gmail.com')
  });

  
  it('should be able to type into the password input box', async () => {
    //Act
    const inputPasswordElement = screen.getByTestId('password-input')
    userEvent.click(inputPasswordElement)
    userEvent.type(inputPasswordElement, 'password')

    //Assert
    expect(inputPasswordElement.value).toBe('password')
  });

  it('password input box should have initial type password', async () => {
    //Act
    const inputPasswordElement = screen.getByTestId('password-input')
    userEvent.click(inputPasswordElement)
    userEvent.type(inputPasswordElement, 'password')

    //Assert
    expect(inputPasswordElement).toHaveAttribute('type', 'password')
  });

  it('password input box should have type text when clicking eye', async () => {
    //Act
    const inputPasswordElement = screen.getByTestId('password-input')
    const eyeShowIconElement = screen.getByTestId('eye-show')
    userEvent.type(inputPasswordElement, 'password')
    userEvent.click(eyeShowIconElement)

    //Assert
    expect(inputPasswordElement).toHaveAttribute('type', 'text')
  });

});

describe("Testing Buttons", () => {
    it('should render button on the page', async () => {
    //Act
    const buttonElement = screen.getByText(/Login/i);
  
    //Assert
    expect(buttonElement).toBeInTheDocument();
  });
});

  // it('calls "onClick" prop on button click', () => {
  //   const onClick = jest.fn();
  //   const { getByText } = render(<Button onClick={onClick} />);
  
  //   fireEvent.click(getByText(/Login/i));
  //   expect(onClick).toHaveBeenCalled();
  // });


    //Act
    // const onClick  = jest.fn();
    // const buttonElement = screen.getByText(/Login/i);
    // fireEvent.click(buttonElement);
    // const message = screen.getAllByText("*This field is required");
  
    //Assert
    // expect(onClick ).toHaveBeenCalled();
    // expect(message).toBeInTheDocument();
    // expect(inputEmailElement).toHaveAttribute("nodeValue", "border: 2px solid rgb(55, 216, 221)")
    // expect(inputPasswordElement).toHaveStyle("border: 2px solid rgb(55, 216, 221)")