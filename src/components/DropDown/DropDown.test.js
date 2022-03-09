import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from "./DropDown.jsx";

const codes = ["usd", "gbp", "eur"];

describe ("Testing the drop-down menu item", ()=> {
  test("It should render", ()=> {
    //Arrange 
    render(<DropDown codes={codes}/>)

    //Act 
    const menu = screen.getByTestId("currency-selector");
    //Assert
    expect(menu).toBeInTheDocument();
    expect(codes.length).toEqual(3);
  })
 
  test('should render input placeholder without errors', () => {
    render(<DropDown codes={codes}/>);

    const placeholder = screen.getByText('Select...');

    expect(placeholder).toBeTruthy();
  });

test('should render input option when changed', () => {

  // Arrange 
  render(<DropDown codes={codes}/>);
   
  // Act
  const items = screen.getByRole('combobox', {name: ""});

  // Assert 
  expect(items).toHaveValue("");
  
  //Act 
  fireEvent.change(items,{ target: { value: "usd" }});

  //Assert
  expect(items.getAttribute("value")).toBe("usd");
});
 
})

