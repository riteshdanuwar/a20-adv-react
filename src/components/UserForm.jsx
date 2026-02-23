import React from "react";

const UserForm = () => {
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input placeholder="Enter your name" />
        <input placeholder="Enter your email" type="email" />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
