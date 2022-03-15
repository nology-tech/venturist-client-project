import ConfirmDetailsPopUp from "./ConfirmDetailsPopUp";
import { render, screen } from "@testing-library/react";
import userProfile from "../../assets/data/samanthaBrooksProfile";

describe("Testing that elements render on screen", () => {
  
  test("Test to render container on screen", () => {
    render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />);

    const container = screen.getByTestId("confirm-popup");

    expect(container).toBeInTheDocument();
  });

    test("Test that name renders on screen", () => {
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />);

      const Name = screen.queryByText("Sam Brooks");

      expect(Name).toBeInTheDocument();
    });
    
    test("Test that account number renders on screen", () => {
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );

      const accountNumber = screen.queryByText("12345678");

      expect(accountNumber).toBeInTheDocument();
    });
    
    test("Test that sort code renders on screen", () => {
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );

      const sortCode = screen.queryByText("553456");

      expect(sortCode).toBeInTheDocument();
    });
    
    test("Test that transfer amount renders on screen", () => {
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );

      const transferAmount = screen.getByTestId("total-amount").innerHTML;

      expect(transferAmount).toContain("100");
    });

    test("Test that component header renders on the screen", () => {
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );

      const componentHeader = screen.queryByText("Confirm Details");

      expect(componentHeader).toBeInTheDocument();
    });
  });

  describe("Testing that button is present", () => {
  
    test("Should render the button on the page", () => {
      
      render(
      <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );
    
      const goBackButton = screen.getAllByTestId("button")[0];
      const confirmButton = screen.getAllByTestId("button")[1];
    
      expect(goBackButton).toBeInTheDocument();
      expect(confirmButton).toBeInTheDocument();

    }); 

  });

