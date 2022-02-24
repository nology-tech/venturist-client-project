import React from 'react'
import './NavItem.scss'

const NavItem = (props) => {
  let className = 'navbar__nav-item';
  if (props.activeButton === props.label) {
    className += " navbar__nav-item--active"
  }
  return (
    <div className={className} onClick={() => props.handleClick(props.label) } key={props.index} data-testid="navItem">
      <div className='navbar__nav-item--icon'></div>
      <h3>{props.label}</h3>
    </div>
  )
}

export default NavItem