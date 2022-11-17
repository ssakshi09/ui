import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

function Form() {
  return (
    <div class="textCenter">
      <div>
        <TextField
          id="standard-basic"
          label="Employee id"
          variant="standard"
          class="textfield"
        />
      </div>
      <div>
        <TextField id="standard-basic" label="Message" variant="standard" />
      </div>
      <div class="btn">
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

export default Form;
