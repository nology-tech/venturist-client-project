import React from 'react'
import Header from '../../components/Header/Header';
import MakeTransferForm from '../../components/MakeTransferForm/MakeTransferForm';
import "./MakeTransferPage.scss";

const MakeTransferPage = (props) => {

  const {liveRateData} = props;

  return (
    <div className='make-transfer'>
        <Header title="Transfer" pageFunctionHeading="Make Transfer" textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus." />

        <MakeTransferForm exchangeFrom={liveRateData[0]} exchangeTo={liveRateData[1]} handleChangeCurrency={()=>alert("changing currency")} handleChangeAmount={()=>alert("changing amount")} />
    </div>

  )
}

export default MakeTransferPage