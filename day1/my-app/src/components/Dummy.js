const Dummy = (props) => {
  const dummyButtonHandler = () => {
    props.onDummyClick();
  };
  return (
    <>
      <button onClick={dummyButtonHandler}>Grand Child</button>
    </>
  );
};

export default Dummy;
