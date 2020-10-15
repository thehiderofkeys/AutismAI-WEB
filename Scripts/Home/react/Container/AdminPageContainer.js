import React from "react";

const AdminPageContainer = ({ children }) => {
  // Any variables or methods declared in newProps will be passed through to children
  // components as declared in frontpage.jsx

  const handleChange = () => {
  };

  const newProps = { handleChange };

  return React.cloneElement(children, { ...newProps });
};

export default AdminPageContainer;
