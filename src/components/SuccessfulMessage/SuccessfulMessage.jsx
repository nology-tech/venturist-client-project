import React from 'react';
import './SuccessfulMessage.scss';
import Icons from '../../assets/icons/icons.js';
import { Link } from "react-router-dom";

const SuccessfulMessage = (props) => {

    const { message } = props;

  return (
    <>
        <div className='popup-background'></div>
        <div className='success'>
            <Link to="/" className='success__icon'>X</Link>
            <p className='success__title'>Completed</p>
            <span className='success__line-top'></span>
            <p className='success__message'>{message}</p>
            <span className='success__line-bottom'></span>
        </div>
    </>
  )
}

export default SuccessfulMessage