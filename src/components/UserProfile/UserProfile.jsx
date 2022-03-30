import React from "react";
import "./UserProfile.scss";

const UserProfile = (props) => {
  
  return (
    <div className="user-grid" data-testid="user">
      <h3>
        {props.userID}
      </h3>
    </div>
  );
};

export default UserProfile;
