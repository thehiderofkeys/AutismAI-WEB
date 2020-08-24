import React from "react";
import PropTypes from "prop-types";

const Dashboardpage = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <div className="AdminPage">
      <p>This is the DashBoard page.</p>
    </div>
  );
};

Dashboardpage.defaultProps = {
  handleChange: () => {}
};

Dashboardpage.propTypes = {
  handleChange: PropTypes.func
};

export default Dashboardpage;
