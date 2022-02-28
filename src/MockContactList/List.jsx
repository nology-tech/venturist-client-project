import ListItem from "./ListItem";
import contacts from "./ContactsData";
import "./List.scss";
import { useState } from "react";

export default function ContactsList() {
  const [filteredData, setFilteredData] = useState(contacts);

  return (
    <section className="page" data-testid="page">
      <nav></nav>
      <div>
        <div className="headers-grid">
          <div></div>
          <h3>Name</h3>
          <h3>Sort Code</h3>
          <h3>Account No</h3>
          <h3>Bank</h3>
          <h3>IBAN</h3>
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
