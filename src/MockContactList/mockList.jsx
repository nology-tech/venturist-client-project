import ListItem from "./mockListItem";
import contacts from "./mockData";
import "./mockList.scss";
import { useState } from "react";

export default function ContactsList() {
  const [filteredData, setFilteredData] = useState(contacts);

  return (
    <section>
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
            item={item}
            index={index}
            key={index}
            setFilteredData={setFilteredData}
            filteredData={filteredData}
          />
        );
      })}
    </section>
  );
}
