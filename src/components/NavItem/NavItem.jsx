import React from 'react'
import './NavItem.scss'
import {Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons'

const iconListSolid = Object
  .keys(IconsSolid)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => IconsSolid[icon])

library.add(...iconListSolid)
const iconListRegular = Object
  .keys(IconsRegular)
  .filter(key => key !== "far" && key !== "prefix" )
  .map(icon => IconsRegular[icon])

library.add(...iconListRegular)



const NavItem = (props) => {
  let className = 'navbar__nav-item';
  if (props.activeButton === props.label) {
    className += " navbar__nav-item--active"
  }
  return (
    <Link to={"/"+props.label.split(" ").join("")} style={{ textDecoration: 'none' }}>
      <div className={className} onClick={() => props.handleClick(props.label) } key={props.index} data-testid="navItem">
        <div className='navbar__nav-item--icon'><FontAwesomeIcon icon={props.icon} /></div>
        <p>{props.label}</p>
      </div>
    </Link>
  )
}

export default NavItem