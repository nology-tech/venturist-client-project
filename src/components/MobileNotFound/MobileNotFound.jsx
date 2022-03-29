import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import "./MobileNotFound.scss";

const MobileNotFound = () => {
  return (
    <div className="mobile-empty">
      <h2 className="mobile-empty__header">Oops!</h2>
      <p className="mobile-empty__text">That feature is not currently available on mobile.</p>
      <p className="mobile-empty__text">Sorry for any inconvenience caused.</p>
      <Link to="/wallet">
        <Button buttonName="Go to wallet" />
      </Link>
    </div>
  )
}

export default MobileNotFound