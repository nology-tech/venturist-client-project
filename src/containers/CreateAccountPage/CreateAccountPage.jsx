import React, { useState } from "react";
import CreateAccount from "../../components/AuthenticationForms/CreateAccount/CreateAccount";
import AddBankDetails from "../../components/AuthenticationForms/AddBankDetails/AddBankDetails";
import "./CreateAccountPage.scss";
import BillingAddress from "../../components/AuthenticationForms/BillingAddress/BillingAddress";

const CreateAccountPage = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(true);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  const handleShowBankDetails = () => {
    setShowCreateAccount(false);
    setShowBankDetails(true);
  };

  const handleShowBillingAddress = () => {
    setShowBankDetails(false);
    setShowBillingAddress(true);
  };

  return (
    <div className="createAccount" data-testid="createAccount">
             
      {showCreateAccount && (
        <CreateAccount handleShowBankDetails={handleShowBankDetails}/>
      )}

    {showBankDetails && (
        <AddBankDetails handleShowBillingAddress={handleShowBillingAddress} />
      )}

    {showBillingAddress && (
        <h1><BillingAddress /></h1>
        )}

      
    </div>
  );
};

export default CreateAccountPage;
