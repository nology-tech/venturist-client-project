import React from "react";
import "./UserProfile.scss";

const UserProfile = ({ profileData }) => {
  
  return (
    <div className="user-grid" data-testid="user">
      {profileData && <h3>
        {profileData.firstName + " " + profileData.lastName}
      </h3>}
    </div>
  );
};

export default UserProfile;
