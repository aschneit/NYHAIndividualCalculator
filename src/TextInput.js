import { makeStyles } from "@material-ui/styles";
import { TextField, InputAdornment } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({}));

const TextInput = (props) => {
  const classes = useStyles();
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
