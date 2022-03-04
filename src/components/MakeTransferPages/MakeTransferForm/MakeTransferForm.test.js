import MakeTransferForm from "./MakeTransferForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { CurrencyFlag } from "react-currency-flags/dist/components";
import mockData from "../../../assets/data/liveRatesExample";

test("", () => {});

// test("Test that button renders with correct inner text", () => {
//   //Arrange
//   render(<Button buttonName="test button" />);
//   //Act
//   const button = screen.getByTestId("button");
//   //Assert
//   expect(button).toBeInTheDocument();
//   expect(button).toHaveTextContent("test button");
// });

// test("Test that the button onClick={buttonFunction} calls the function passed in a prop", () => {
//   //Arrange
//   const onClick = jest.fn();
//   render(<Button buttonFunction={onClick} buttonName="test button" />);
//   const button = screen.getByTestId("button");
//   //Act
//   fireEvent.click(button);
//   //Assert
//   expect(onClick).toHaveBeenCalled();
// });

// test("Test image tag renders when hasIcon is true", () => {
//   //Arrange
//   render(<Button hasIcon={true} iconSrc={icons.Convert}/>);
//   //Act
//   const button = screen.getByTestId("button");
//   const buttonIcon = screen.getByTitle("Convert")
//   //Assert
//   expect(buttonIcon).toBeInTheDocument();
// });

// test("Test that an icon does NOT render inside of the button when prop hasIcon is false", () => {
//   //Arrange
//   render(<Button hasIcon={false} buttonName="test button" />);
//   //Act
//   const button = screen.getByTestId("button");
//   const buttonIcon = screen.queryByAltText("test button");
//   //Assert
//   expect(button).not.toContainElement(buttonIcon);
// });

test("Input box renders with the correct inner text", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>)

  // Act 

  const youSendInput = screen.getByTestId("amountInput");

  // Assert

  expect(youSendInput).toBeInTheDocument();
 

});



test("Correct inner text for input", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>)

  // Act 

 const youSendInput2 = screen.getByPlaceholderText("00.00");

  // Assert

 expect(youSendInput2).toHaveAttribute("placeholder");
 
});

test("placeholder text", () => {
  // Arrange 
  const onClick = jest.fn();
  render(<MakeTransferForm exchangeFrom={mockData[0]}
    exchangeTo={mockData[1]}
    handleChangingCurrency={(onClick)}
    handleShowForm={(onClick)}/>)

  // Act 

  const youSendInput3 = screen.getByTestId("amountInput");

  // Assert

  expect(youSendInput3).toHaveAttribute("placeholder", "00.00")
 
});








