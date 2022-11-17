import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";
// require('dotenv-webpack').config();

function Form() {
  const [id, setId] = useState([]);
  const [msg, setMsg] = useState("");
  
  const requestBody = {
    employees: id,
    message: msg
  }

  function handleSubmit (e){
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key':process.env.REACT_APP_API_KEY },
      body: JSON.stringify(requestBody) 
    };
    fetch(process.env.REACT_APP_PIA_URL, requestOptions);
  }
  function handleID (e){
    const employeeIdsArray = e.target.value.split(',')
    setId(employeeIdsArray);
  }
  function handleMsg (e){
    setMsg(e.target.value);
  }
  return (
    <div className="textCenter">
      <form onSubmit={handleSubmit} >
      <div>
        <TextField
          id="standard-basic"
          label="Employee id"
          variant="standard"
          required
          sx={{
            width: 300,
          }}
          onChange={handleID}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Message"
          variant="standard"
          required
          sx={{
            width: 300,
          }}
          onChange={handleMsg}
        />
      </div>
      <div className="btn">
        <Button variant="contained" type="submit">Submit</Button>
      </div>
      </form>
    </div>
  );
}

export default Form;
