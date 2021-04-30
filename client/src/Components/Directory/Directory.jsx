import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../MenuItem/MenuItem";
import { selectDirectorySection } from "../../redux/Directory/directory-selector";
import "./Directory.scss";

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...OtherProps }) => (
        <MenuItem key={id} {...OtherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});
export default connect(mapStateToProps)(Directory);
