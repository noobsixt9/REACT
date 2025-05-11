import { useState } from "react";
import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import "./styles/app.css";

const App = () => {
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);
  // const contacts = [];
  const addContactData = (contactData) => {
    const allcontacts = [...contacts, contactData];
    setContacts(allcontacts);
    localStorage.setItem("contacts", JSON.stringify(allcontacts));
  };

  return (
    <>
      <div className="contact_add">
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        <div className="contact">
          {contacts.map((data) => (
            <Contact key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
