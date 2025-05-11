import Contact from "./components/Contact";
import ContactAdder from "./components/ContactAdder";
import "./styles/app.css";

const App = () => {
  const contacts = [];
  const addContactData = (contactData) => {
    contacts.push(contactData);
    console.log(contacts);
  };

  const childFunctionHandler = () => {
    alert("Grand Parent was called.");
  };
  return (
    <>
      <div className="contact_add">
        <ContactAdder onContactAdded={addContactData}  childFunction={childFunctionHandler} />
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        <div className="contact">
          {contacts.map((data) => (
            <Contact data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
