import React, { useState } from "react";
import CreateAccount from "../../components/AuthenticationForms/CreateAccount/CreateAccount";
import "./CreateAccountPage.scss";

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
        <CreateAccount handleShowBankDetails={handleShowBankDetails} />
      )}

      {showBankDetails && <h1>Banking Here</h1>}

      {showBillingAddress && <h1>Billing Here</h1>}
    </div>
  );
};

export default CreateAccountPage;
