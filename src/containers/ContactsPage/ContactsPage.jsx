import React from 'react'
import Header from '../../components/Header/Header';
import './ContactsPage.scss'

const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <Header title="Contacts" pageFunctionHeading="Your Contacts" textDescription="View your contacts here." />
    </div>
  )
}

export default ContactsPage