// import React, {useState} from 'react'
import React from 'react';
import Header from '../../components/Header/Header';
import "./MakeTransferPage.scss";
import MakeTransferChooseRecipient from '../../components/MakeTransferPages/MakeTransferChooseRecipient/MakeTransferChooseRecipient';
import userCardList from "../../assets/data/contactExample"


const MakeTransferPage = () => {
  return (
    <div className='make-transfer'>
        <Header title="Transfer" pageFunctionHeading="Make Transfer" textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus." />
        
    </div>
  )
}

export default MakeTransferPage