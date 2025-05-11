const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.num}
        <br />
        {props.data.location}
      </div>
      <hr />
    </>
  );
};

export default Contact;
