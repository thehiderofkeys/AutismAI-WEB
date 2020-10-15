import React from "react";
import PropTypes from "prop-types";

const Adminpage = ({}) => {
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
