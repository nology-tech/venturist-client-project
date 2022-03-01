import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = {
  Convert: <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" title="Convert"/>,
  Wallet: <FontAwesomeIcon icon="fa-solid fa-wallet" title="Wallet"/>,
  LiveRates: <FontAwesomeIcon icon="fa-solid fa-chart-line" title="LiveRates"/>,
  Transfer: <FontAwesomeIcon icon="fa-solid fa-paper-plane" title="Transfer"/>,
  Contacts: <FontAwesomeIcon icon="fa-solid fa-user-group" title="Contacts"/>,
  SignOut: <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" title="SignOut"/>,
  DropDownProfile: <FontAwesomeIcon icon="fa-solid fa-chevron-down" title="DropDownProfile"/>,
  EyeShow: <FontAwesomeIcon icon="fa-regular fa-eye" title="EyeShow"/>,
  EyeHide: <FontAwesomeIcon icon="fa-regular fa-eye-slash" title="EyeHide"/>,
  TickSuccessful: <FontAwesomeIcon icon="fa-regular fa-check" title="TickSuccessful"/>,
  Exclamation: <FontAwesomeIcon icon="fa-solid fa-exclamation" title="Exclamation"/>,
  Search: <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" title="Search"/>,
  Deposit: <FontAwesomeIcon icon="fa-solid fa-circle-plus" title="Deposit"/>,
  Withdraw: <FontAwesomeIcon icon="fa-solid fa-money-bill-wave" title="Withdraw"/>,
  TrashCan: <FontAwesomeIcon icon="fa-solid fa-trash-can" title="TrashCan"/>,
};

export default icons;

// Upon saving, double quotes around convert, wallet, live rates, transfer and contacts were removed.
