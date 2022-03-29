import { render, screen, fireEvent } from "@testing-library/react";
import MobileNotFound from "./MobileNotFound";
import {BrowserRouter as Router} from "react-router-dom";

describe('Render tests', () => {
  test('Component renders', () => {
    render(<Router><MobileNotFound /></Router>);

    const component = screen.getByTestId("mobile-empty");
    
    expect(component).toBeInTheDocument();
  });
});