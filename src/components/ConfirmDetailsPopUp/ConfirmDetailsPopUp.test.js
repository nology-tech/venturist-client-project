import ConfirmDetailsPopUp from "./ConfirmDetailsPopUp";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

      const Name = screen.queryByText("Samantha Brooks");

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

  describe("Testing that buttons work correctly", () => {
  
    test("Test that select button brings up user Successful Message component", () => {
      render(
        <ConfirmDetailsPopUp 
        toggleSuccess={()=>{}}
        toggleConfirm={()=>{}}
        profileData={userProfile}
        totalAmount="100"
      />
      );

      const selectButton = screen.getAllByRole("button")[1];

      fireEvent.click(selectButton);
      const successfulMessageContainer = screen.queryByText("Completed");
    });

  });

