import "./ContactsList.scss";
import contacts from "../../assets/data/contactExample";
import { useState } from "react";
import ListItem from "../../components/ContactsListItem/ContactsListItem";

export default function ContactsList() {
  const [filteredData, setFilteredData] = useState(contacts);

  return (
    <section className="page" data-testid="page">
      <div>
        <div className="headers-grid">
          <div></div>
          <p className="headers-grid__name">Name</p>
          <p className="headers-grid__sort-code">Sort Code</p>
          <p className="headers-grid__account-no">Account No</p>
          <p className="headers-grid__bank">Bank</p>
          <p className="headers-grid__iban">IBAN</p>
          <div></div>
        </div>
        {filteredData.map((item, index) => {
          return (
            <ListItem
              data-testid="single-item"
              item={item}
              index={index}
              key={index}
              setFilteredData={setFilteredData}
              filteredData={filteredData}
            />
          );
        })}
      </div>
    </section>
  );
}
