import "./mockListItem.scss";

export default function ListItem(props) {
  const { item } = props;

  return (
    <div>
      <img src={item.bankIcon} alt={item.bankName} />
      <p>{`${item.firstName} ${item.lastName}`}</p>
      <p>{item.sortCode}</p>
      <p>{item.accountNumber}</p>
      <p>{item.bankName}</p>
      <p>{item.IBAN}</p>
      {/* // img bin icon coming from assets (probably) */}
    </div>
  );
}
