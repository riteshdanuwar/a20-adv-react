import React from "react";

const UserForm = ({ editId, users }) => {
  const editUserDetail = users.find((user) => user.id === editId);

  const [formData, setFormData] = React.useState({
    name: editUserDetail?.name,
    email: editUserDetail?.email,
  });

  console.log(formData, "id is form");
  return (
    <form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input value={formData.name} placeholder="Enter your name" />
        <input
          value={formData.email}
          placeholder="Enter your email"
          type="email"
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default UserForm;
