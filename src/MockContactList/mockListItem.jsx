import "./mockListItem.scss";

export default function ListItem(props) {
  const { item, index } = props;

  return (
    <div key={index} className="item-grid">
      <div className="item-grid__align-img">
        <img src={item.bankIcon} alt={item.bankName} width="50px" />
      </div>
      <p>{`${item.firstName} ${item.lastName}`}</p>
      <p>{item.sortCode}</p>
      <p>{item.accountNumber}</p>
      <p>{item.bankName}</p>
      <p>{item.IBAN}</p>
      {/* // img bin icon coming from assets (probably) */}
    </div>
  );
}
