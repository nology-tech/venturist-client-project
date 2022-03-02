import React from "react";
import "./UserProfile.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as IconsSolid from "@fortawesome/free-solid-svg-icons";
import * as IconsRegular from "@fortawesome/free-regular-svg-icons";

const iconListSolid = Object.keys(IconsSolid)
  .filter((key) => key !== "fas" && key !== "prefix")
  .map((icon) => IconsSolid[icon]);

library.add(...iconListSolid);
const iconListRegular = Object.keys(IconsRegular)
  .filter((key) => key !== "far" && key !== "prefix")
  .map((icon) => IconsRegular[icon]);

library.add(...iconListRegular);

const UserProfile = (props) => {
  const { imageIcon, name } = props;
  return (
    <div className="user-grid" data-testid="user">
      <h3>
        Sam Brooks
        {/* {name} */}
      </h3>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          // {imageIcon}

          alt="Profile" data-testid="image"
        /> 
     <FontAwesomeIcon
        icon="fa-solid fa-chevron-down"
        className="user-grid__icon"
      />
    </div>
  );
};

export default UserProfile;
