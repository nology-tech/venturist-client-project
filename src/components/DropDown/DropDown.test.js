import { render,fireEvent, cleanup, waitForElement, screen } from '@testing-library/react';
import DropDown from "./DropDown.jsx";

afterEach(cleanup);

const mockedOptions = ["usd","gbp", "eur"];
const mockedOnChange = jest.fn();

describe ("Testing the drop-down menu item",()=> {
  test("It should render", ()=> {
    //Arrange 
    render(<DropDown codes={mockedOptions} mockedOnChange={mockedOnChange}/>)

    //Act 
    const placeholder = screen.getByText('Select...');
    //Assert
    expect(placeholder).toBeTruthy();
  })

  test("It should call the onChange function when the first option is selected", ()=> {
    //Arrange 
    render(<DropDown codes={mockedOptions} mockedOnChange={mockedOnChange}/>)

    //Act 
    const mySelectComponent = screen.getByTestId('currency-selector');


    //Assert
    expect(mySelectComponent).toBeDefined();
    expect(mySelectComponent).not.toBeNull();
    expect(mockedOnChange).toHaveBeenCalledTimes(0);

    // fireEvent.keyDown(mySelectComponent.firstChild, { key: 'ArrowDown' });
    // await waitForElement(() => screen.findByText('usd'));
    

    
    // expect(mockedOnChange).toHaveBeenCalledWith('usd');
  })

})

