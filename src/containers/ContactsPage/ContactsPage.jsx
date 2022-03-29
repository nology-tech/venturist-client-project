import React from 'react'
import Header from '../../components/Header/Header';
import MobileNotFound from '../../components/MobileNotFound/MobileNotFound';
import './ContactsPage.scss'

const ContactsPage = () => {
  return (
    <>
    <div className='contacts-page'>
      <Header title="Contacts" pageFunctionHeading="Your Contacts" textDescription="View your contacts here." />
    </div>
    <MobileNotFound />
    </>
  )
}

export default ContactsPage