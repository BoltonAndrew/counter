function SteveOrGary(props) {
  return (
    <>
      <button onClick={() => props.funcToChangeName("Steve")}>Steve</button>
      <h4>{props.myName}</h4>
      <button onClick={() => props.funcToChangeName("Gary")}>Gary</button>
    </>
  );
}

export default SteveOrGary;
