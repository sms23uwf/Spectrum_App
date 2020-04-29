import React from "react";
import Typography from "@material-ui/core/Typography";

//require('bootstrap/dist/css/bootstrap.css');

const Checkbox = ({ id, checked, label, pairingId, onCheckboxChange }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onCheckboxChange}
        className="form-check-input"
      />
      <Typography type="body2" style={{ fontSize: '1.25em', fontWeight: `bold`, color: `#000000`, textAlign: `left` }} gutterBottom>{label}</Typography>
    </label>
  </div>
);

export default Checkbox;
