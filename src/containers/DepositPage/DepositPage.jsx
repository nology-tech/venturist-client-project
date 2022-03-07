import React from 'react';
import Header from '../../components/Header/Header';
import SuccessfulMessage from '../../components/SuccessfulMessage/SuccessfulMessage';
import './DepositPage.scss';


const DepositPage = () => {
  return (
    <div className='deposit-page'>
      <Header title="Deposit" pageFunctionHeading="Deposit Funds" textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus." />
      <SuccessfulMessage message="Deposit has been successful."/>
    </div>
  )
}

export default DepositPage