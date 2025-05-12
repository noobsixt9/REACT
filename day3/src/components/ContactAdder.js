import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    // prevents refreshing while submitting form
    const contactData = {
      id: Math.random(),
      name: name,
      num: mobile,
      location: location,
    };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
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
      <h1>Contact Adder:</h1>
      <form onSubmit={onClickHandler}>
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
        <button>Add Contact</button>
        <button
          onClick={getData}
          type="button"
          style={{ background: " #557B00" }}
        >
          Get Contacts
        </button>
        <button
          onClick={clearData}
          type="button"
          style={{ background: "#cc0800" }}
        >
          Delete Contacts
        </button>
      </form>
    </>
  );
};

export default ContactAdder;
