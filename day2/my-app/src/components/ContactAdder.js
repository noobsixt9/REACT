import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = () => {
    const contactData = {
      id: Math.random(),
      name: name,
      num: mobile,
      location: location,
    };
    props.onContactAdded(contactData);
  };

  const getData = () => {
    const getdata = localStorage.getItem("contacts");
    alert(getdata);
  };

  const clearData = () => {
    // localStorage.removeItem("name");
    localStorage.clear();
    // localStorage.clear(); -- removes all of the localStorage data at once
  };
  return (
    <>
      <h3>Contact Adder:</h3>
      <input
        type="text"
        placeholder="Contact Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        addContactData
      ></input>
      <input
        type="text"
        placeholder="Contact Number"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Contact Location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <button onClick={onClickHandler}>Save Contact</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={clearData}>Delete Data</button>
    </>
  );
};

export default ContactAdder;
