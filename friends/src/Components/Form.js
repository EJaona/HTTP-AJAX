import React from "react";

const Form = props => {
  return (
    <form style={{ margin: "3% auto" }} onChange={props.handleChange}>
      <input
        type="text"
        name="name"
        value={props.newFriend.name}
        placeholder="Type new friends name"
      />
      <input
        type="text"
        name="age"
        value={props.newFriend.age}
        placeholder="Type new friends age"
      />
      <input
        type="text"
        name="email"
        value={props.newFriend.email}
        placeholder="Type new friends email address"
      />
      <input type="button" value="Submit" onClick={props.addFriend} />
    </form>
  );
};

export default Form;
