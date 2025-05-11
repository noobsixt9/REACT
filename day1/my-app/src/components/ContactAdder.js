import { useState } from "react";
import Dummy from "./Dummy";

const ContactAdder = (props) => {
  const [name, setName] = useState("John Doe");
  const [mobile, setMobile] = useState("9825674877");
  const [location, setLocation] = useState("Nepal");

  const onClickHandler = () => {
    const contactData = {
      name: name,
      num: mobile,
      location: location,
    };
    props.onContactAdded(contactData);
  };

  const dummyClickHandler = () => {
    props.childFunction();
  };

  return (
    <>
      Contact Adder:
      <br />
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
      <button onClick={onClickHandler}>Click me</button>
      <Dummy onDummyClick={dummyClickHandler} />
    </>
  );
};

export default ContactAdder;
