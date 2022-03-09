import { render, screen, fireEvent} from '@testing-library/react';
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
  const items = screen.getByRole('combobox', {name: ""});
  // const menu = screen.getByTestId("currency-selector");
  // Assert 
  expect(items).toHaveValue("");

  //ACT
  fireEvent.change(items,{ target: { value: "usd" }});
  // //Assert
  expect(items.getAttribute("value")).toBe("usd");
  
});
 
})

 // function to be tested on currency converted page
// const handleChange = jest.fn();
// expect(handleChange).toHaveBeenCalledTimes(0);
  
  //Act 
  // eslint-disable-next-line testing-library/no-node-access
  // fireEvent.keyDown(menu.firstChild, { key: 'ArrowDown' });
  // eslint-disable-next-line testing-library/await-async-utils
  // await screen.findByText('USD');
  // fireEvent.click(screen.getByText('USD'));
  // expect(handleChange).toHaveBeenCalledTimes(1);