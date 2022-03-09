import { render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from "./DropDown.jsx";

const codes = ["usd", "gbp", "eur"];

describe ("Testing the drop-down menu item", ()=> {

  test("It should render", ()=> { 
    //Arrange 
    render(<DropDown codes={codes} />)
    //Act 
    const menu = screen.getByTestId("currency-selector");
    //Assert
    expect(menu).toBeInTheDocument();
    expect(codes.length).toEqual(3);
  })
 
  test('should render input placeholder without errors', () => {
    //Arrange 
    render(<DropDown codes={codes}/>);
    //Act 
    const placeholder = screen.getByText('Select...');
    //Assert
    expect(placeholder).toBeTruthy();
  });

  test('should render input option when changed', () => {
    // Arrange 
    render(<DropDown codes={codes}/>);
    // Act
    let items = screen.getByRole('combobox', {name: ""});
    // const menu = screen.getByTestId("currency-selector");
    // Assert 
    expect(items).toHaveValue("");

    //ACT
    fireEvent.change(items,{ target: { value: "usd" }});
    items = screen.getByRole('combobox', {name: ""});
    // //Assert
    expect(items.getAttribute("value")).toBe("usd");
    
  });

  test("Should run mock function on change", () => {

    const mock = jest.fn();
    render(<DropDown codes={codes} handleChange={mock} />);

    userEvent.click(screen.getByText('Select...'));
    userEvent.click(screen.getByText('USD'));

    expect(mock).toHaveBeenCalled();


  });

  test("Test to see if mock function returns the correct value", () => {

    const mock = (code) => {
      expect(code).toBe("USD");
    }
    render(<DropDown codes={codes} handleChange={mock} />);

    userEvent.click(screen.getByText('Select...'));
    userEvent.click(screen.getByText('USD'));

  });

});