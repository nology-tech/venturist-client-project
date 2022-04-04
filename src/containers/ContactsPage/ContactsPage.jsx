import React, { useEffect, useState } from "react";
import AddContact from "../../components/ContactsPages/AddContact/AddContact";
import ConfirmAddContact from "../../components/ContactsPages/ConfirmAddContact/ConfirmAddContact";
import Header from "../../components/Header/Header";
import ContactsList from "../ContactsList/ContactsList";
import MobileNotFound from "../../components/MobileNotFound/MobileNotFound";

import "./ContactsPage.scss";

const ContactsPage = (props) => {
  const { userID } = props;

  const emptyContact = {
    userID: "",
    contactName: "",
    bankName: "",
    accountNumber: "",
    sortCode: "",
  };

  const [filteredData, setFilteredData] = useState(null);
  const [showAddRecipient, setShowAddRecipient] = useState(false);
  const [showConfirmAddContact, setShowConfirmAddContact] = useState(false);
  const [newContact, setNewContact] = useState(emptyContact);

  useEffect(
    () => {
      getContacts();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newContact]
  );

  const toggleAddRecipient = () => {
    setShowAddRecipient(!showAddRecipient);
  };

  const toggleConfirmAddContact = () => {
    setShowConfirmAddContact(!showConfirmAddContact);
  };

  const confirmAddRecipient = () => {
    postData(newContact);
    toggleConfirmAddContact();
  };

  const getContacts = async () => {
    const result = await fetch(
      `https://venturist-app.nw.r.appspot.com/contacts/${userID}`
    );
    const data = await result.json();
    setFilteredData(data);
  };

  const postData = async (bodyObject) => {
    try {
      await fetch("https://venturist-app.nw.r.appspot.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObject),
      });
      // alert("Successfully added!");
      getContacts();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleShowConfirmation = () => {
  //   setShowConfirmation(true);
  //   setShowConfirmAccount(false);
  // };

  return (
    <>
      <div className="contacts-page">
        <Header
          title="Contacts"
          pageFunctionHeading="Your Contacts"
          textDescription="View your contacts here."
        />
        {!filteredData && <h3 className="withdraw-loading">Loading contacts...</h3>}
        {filteredData && (
          <ContactsList
            setFilteredData={setFilteredData}
            filteredData={filteredData}
            getContacts={getContacts}
            toggleAddRecipient={toggleAddRecipient}
            userID={userID}
          />
        )}
        {showAddRecipient && (
          <AddContact
            toggleAddRecipient={toggleAddRecipient}
            toggleConfirmAddContact={toggleConfirmAddContact}
            setNewContact={setNewContact}
            userID={userID}
          />
        )}
        {showConfirmAddContact && (
          <ConfirmAddContact
            newContact={newContact}
            toggleConfirmAddContact={toggleConfirmAddContact}
            showConfirmAddContact={showConfirmAddContact}
            confirmAddRecipient={confirmAddRecipient}
          />
        )}
      </div>
      <MobileNotFound />
    </>
  );
};

export default ContactsPage;
