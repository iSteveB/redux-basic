import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {

  const users = useSelector(state => state.userReducer)
  return (
    <div className="user-container">
      <div className="user">
        <h3>{ !isEmpty(users) && users[0].pseudo }</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>35 ans</p>
        <p>{!isEmpty(users) && users[0].likes} like{!isEmpty(users) && users[0].likes > 1 ? 's' : null}</p>
      </div>
    </div>
  );
};

export default User;
