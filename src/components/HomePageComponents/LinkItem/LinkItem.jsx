import React from "react";
import "./LinkItem.scss";

const LinkItem = (props) => {
  const { link, index } = props;
  return (
    <a
      href="https://github.com/nology-tech/venturist-client-project"
      key={index}
    >
      {link}
    </a>
  );
};

export default LinkItem;
