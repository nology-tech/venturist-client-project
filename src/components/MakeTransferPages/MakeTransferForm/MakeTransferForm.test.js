import MakeTransferForm from "./MakeTransferForm";
import { fireEvent, render, screen } from "@testing-library/react";

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
