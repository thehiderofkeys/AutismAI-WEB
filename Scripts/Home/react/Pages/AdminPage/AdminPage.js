import React from "react";
import PropTypes from "prop-types";

const Adminpage = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="AdminPage">
      <p>This is the Admin Page.</p>
    </div>
  );
};

Adminpage.defaultProps = {
  handleChange: () => {}
};

Adminpage.propTypes = {
  handleChange: PropTypes.func
};

export default Adminpage;
