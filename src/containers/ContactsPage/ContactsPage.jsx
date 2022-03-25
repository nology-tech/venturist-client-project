import React from 'react'
import Header from '../../components/Header/Header';
import ContactsList from '../ContactsList/ContactsList';
import './ContactsPage.scss'

const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <Header title="Contacts" pageFunctionHeading="Your Contacts" textDescription="View your contacts here." />
      <ContactsList />
    </div>
  )
}

export default ContactsPage