import React from 'react'
import "./MakeTransferPage.scss";
import MakeTransferForm from "../MakeTransferForm/MakeTransferForm";
import AddRecipient from '../AddRecipient/AddRecipient';
import ConfirmDetails from '../ConfirmDetails/ConfirmDetails';

const MakeTransferPage = () => {


  return (
    <div className='make-transfer'>
        <h6>Transfer</h6>
        <h1>Make Transfer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus.</p>
        <ConfirmDetails />
    </div>

  )
}

export default MakeTransferPage