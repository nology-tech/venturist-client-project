import React from 'react';
import "./MakeTransferChooseModal.scss";
import MakeTransferCard from '../MakeTransferCard/MakeTransferCard';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconsRegular from '@fortawesome/free-regular-svg-icons';
import icons from "../../../assets/icons/icons";
import cross from "./../../../assets/icons/black-cross.png"

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

const MakeTransferChooseModal = (props) => {

  const {type, content, handleEvent, handleSearch, handleShowModal} = props;
  console.log(content)
  const emptyList = content.length === 0;

  const emptyText = <p className="transfer-page__choose__empty">No results found.</p>;

  const listComponents = content.map((item,index) => <MakeTransferCard key={index} type={type} cardContent={item} handleEvent={handleEvent} />);

  let headers;
  if(type==="Currency") {
    headers = [<h5 key={1}>Currency</h5>,
    <h5 className="transfer-page__choose__list__headers__rate" key={2} >Rate</h5>]
  } else if(type==="Recipient") {
    headers = [<h5 key={1} >Name</h5>,
    <h5 className="transfer-page__choose__list__headers__sort-code" key={2} >Sort Code</h5>,
    <h5 className="transfer-page__choose__list__headers__account-no" key={3} >Account No</h5>]
  }

  return (
    <>
    <div className="transfer-page__choose" data-testid="choose-modal">
      <h2 className="transfer-page__choose__header">Choose {type}</h2>
      <img src={cross} alt="Close menu" className="transfer-page__choose__close-menu" onClick={handleShowModal} />
      <h4 className="transfer-page__choose__subheader">Search</h4>
      {icons.Search}
      <input type="text" placeholder="Search..." className="transfer-page__choose__search" onChange={handleSearch} />

      <div className="transfer-page__choose__list">
        <div className="transfer-page__choose__list__headers">
          {headers}
        </div>
        <div className="transfer-page__choose__list__cards" data-testid="choose-cards">
          {!emptyList && listComponents}
          {emptyList && emptyText}
        </div>
      </div>
    </div>
    <div className="overlay-background"></div>
    </>
  )
}

export default MakeTransferChooseModal