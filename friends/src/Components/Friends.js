import React from "react";

const Friends = props => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "1% auto",
        width: "40%",
        textAlign: "center"
      }}
    >
      <h1>{props.friend.name}</h1>
      <p>{props.friend.age}</p>
      <p style={{ cursor: "pointer", textDecoration: "underline" }}>
        {props.friend.email}
      </p>
      <input
        type="button"
        value="Edit"
        onClick={_ => props.updateFriend(props.friend.name)}
      />
      <input
        type="button"
        value="Delete"
        onClick={() => props.deleteFriend(props.friend.name)}
      />
    </div>
  );
};

export default Friends;
