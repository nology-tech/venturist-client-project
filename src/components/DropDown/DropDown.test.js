import { render, screen } from '@testing-library/react';
import DropDown from "./DropDown.jsx";

const codes = ["usd", "gbp", "eur"];

describe ("Testing the drop-down menu item",()=> {
  test("It should render", ()=> {
    //Arrange 
    render(<DropDown codes={codes} />)

    //Act 
    const menu = screen.getByTestId("currency-selector");
    //Assert
    expect(menu).toBeInTheDocument();
  })

})

