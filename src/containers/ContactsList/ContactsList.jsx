import "./ContactsList.scss";
import { useEffect, useState } from "react";
import ListItem from "../../components/ContactsPages/ContactsListItem/ContactsListItem";
import Button from "../../components/Button/Button";
import icons from "../../assets/icons/icons";

export default function ContactsList(props) {

  const [filteredData, setFilteredData] = useState([]);

  const { toggleAddRecipient, userID } = props;

  const getContacts = async () => {
    const result = await fetch(
      `https://venturist-app.nw.r.appspot.com/contacts/${userID}`
    );
    const data = await result.json();
    setFilteredData(data);
  };

  const updateFilteredData = id => {
    const newArr = filteredData.filter(item => item.id !== id);
    setFilteredData(newArr);
  };

  const handleDelete = contactId => {
    fetch(`https://venturist-app.nw.r.appspot.com/contact/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
      .then(updateFilteredData(contactId));
  };

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userID]);

  return (
    <section className="page" data-testid="page">
      <div>
        <div className="add-contact">
          <Button
            buttonName={"Add Contact"}
            hasIcon={true}
            iconSrc={icons.Contacts}
            buttonFunction={toggleAddRecipient}
          />
        </div>
        <div className="headers-grid">
          <p className="headers-grid__name">Name</p>
          <p className="headers-grid__sort-code">Sort Code</p>
          <p className="headers-grid__account-no">Account No</p>
          <p className="headers-grid__bank">Bank</p>
          <div></div>
        </div>
        {!filteredData && <h3>Loading...</h3>}
        {filteredData.map((item, index) => {
          return (
            <ListItem
              data-testid="single-item"
              item={item}
              index={index}
              key={index}
              setFilteredData={setFilteredData}
              filteredData={filteredData}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </section>
  );
}
