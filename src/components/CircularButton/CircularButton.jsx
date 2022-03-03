import React from 'react'
import './CircularButton.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';

const iconListSolid = Object
  .keys(IconsSolid)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => IconsSolid[icon])

library.add(...iconListSolid)

const CircularButton = (props) => {
  return (
    <button data-testid="circular-button" className='circular-button' onClick={props.handleClick} >{props.content}</button>
  )
}

export default CircularButton