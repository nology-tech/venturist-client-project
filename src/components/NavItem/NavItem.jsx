import React, { useEffect, useState } from 'react'
import './NavItem.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import {Link, useLocation} from "react-router-dom";

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

  const location = useLocation();
  

  const [className,setClassName] = useState('navbar__nav-item');


  const handToggle = () => {
    if (window.location.pathname.split("/")[1].toLowerCase() === props.label.split(" ").join("").toLowerCase()) {
      setClassName(className + ' navbar__nav-item--active')
    } else {
      setClassName('navbar__nav-item');
    }
  }

  useEffect ( () => {
    handToggle();
  }, [location])

  return (
    <Link to={"/" + props.label.split(" ").join("").toLowerCase()} style={{ textDecoration: 'none' }} >
      <div className={className} onClick={() => props.handleClick(props.label) } key={props.index} data-testid="navItem">
        <div className='navbar__nav-item--icon'>{props.icon}</div>
        <p>{props.label}</p>
      </div>
    </Link>
  )
}

export default NavItem