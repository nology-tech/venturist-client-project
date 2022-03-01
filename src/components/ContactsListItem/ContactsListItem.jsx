import "./ContactsListItem.scss";
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

export default function ListItem(props) {
  const { item, index, setFilteredData, filteredData } = props;

  const deleteItem = () => {
    const removeIndex = index;
    filteredData.splice(removeIndex, 1);
    const updatedArr = filteredData.filter((item) => item.index !== index);
    setFilteredData(updatedArr);
  };

  // navBar 230px wide

  return (
    <div key={index} className="item-grid" data-testid="item-grid">
      <div className="item-grid__align-img">
        <img src={item.bankIcon} alt={item.bankName} width="50px" />
      </div>
      <p data-testid="name-test">{`${item.firstName} ${item.lastName}`}</p>
      <p>{item.sortCode}</p>
      <p>{item.accountNumber}</p>
      <p>{item.bankName}</p>
      <p>{item.IBAN}</p>
      <div className="item-grid__align-img">
        <FontAwesomeIcon
          data-testid="delete-button"
          className="item-grid__bin"
          icon="fa-solid fa-trash-can"
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}