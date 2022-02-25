import "./mockListItem.scss";

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
        <img
          data-testid="delete-button"
          src="https://img.icons8.com/material-outlined/344/trash.png"
          alt="Delete"
          width="25px"
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}
