import React, { useEffect, useState } from 'react'
import AddContact from '../../components/ContactsPages/AddContact/AddContact';
import ConfirmAddContact from '../../components/ContactsPages/ConfirmAddContact/ConfirmAddContact';
import Header from '../../components/Header/Header';
import ContactsList from '../ContactsList/ContactsList';
import MobileNotFound from '../../components/MobileNotFound/MobileNotFound';

import './ContactsPage.scss'

const ContactsPage = () => {

  const emptyContact = {
    contactName: "",
    bankName: "",
    accountNo: "",
    sortCode: ""
  }

  const [showAddRecipient, setShowAddRecipient] = useState(false);
  const [showConfirmAddContact, setShowConfirmAddContact] = useState(false)
  const [newContact, setNewContact] = useState(emptyContact)

 useEffect(() => {console.log(newContact)},[newContact])

  const toggleAddRecipient = () => {
    setShowAddRecipient(!showAddRecipient);
  };

  const toggleConfirmAddContact = () => {
    setShowConfirmAddContact(!showConfirmAddContact);
  };

  // const handleShowConfirmation = () => {
  //   setShowConfirmation(true);
  //   setShowConfirmAccount(false);
  // };
  
  return (
    <>
    <div className='contacts-page'>
      <Header title="Contacts" pageFunctionHeading="Your Contacts" textDescription="View your contacts here." />
      <ContactsList toggleAddRecipient={toggleAddRecipient}/>
      {showAddRecipient && <AddContact toggleAddRecipient={toggleAddRecipient} toggleConfirmAddContact={toggleConfirmAddContact} setNewContact={setNewContact} />}
      {showConfirmAddContact && <ConfirmAddContact newContact={newContact} toggleConfirmAddContact={toggleConfirmAddContact} showConfirmAddContact={showConfirmAddContact} />}
    </div>
    <MobileNotFound />
    </>
  )
}

export default ContactsPage