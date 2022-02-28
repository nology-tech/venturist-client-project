import ListItem from "./ListItem";
import contacts from "../assets/data/contactExample";
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
          <p>Name</p>
          <p>Sort Code</p>
          <p>Account No</p>
          <p>Bank</p>
          <p>IBAN</p>
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
