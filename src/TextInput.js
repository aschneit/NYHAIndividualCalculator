import { TextField, InputAdornment } from "@material-ui/core";
import React from "react";

const TextInput = (props) => {
  return (
    <TextField
      {...props}
      variant="outlined"
      color="secondary"
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  );
};

export default TextInput;
