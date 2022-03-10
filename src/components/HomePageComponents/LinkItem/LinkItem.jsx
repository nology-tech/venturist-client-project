import React from "react";
import "./LinkItem.scss";

const LinkItem = (props) => {
  const { link, index } = props;
  return (
    <a href="#" key={index}>
      {link}
    </a>
  );
};

export default LinkItem;
