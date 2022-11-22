import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

function Form() {
  const [id, setId] = useState([]);
  const [msg, setMsg] = useState("");
  const [idError, setIdError] = useState(null);
  const [msgError, setMsgError] = useState(null);
  
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

  function isValidEmployeeId(employeeId) {
    return /^[-,0-9 ]+$/.test(employeeId);
  }

  function handleID (e){
    setIdError(null);
    if(e.target.value===""){
      setIdError('Please enter Employee ID')
    }
    else if (!isValidEmployeeId(e.target.value)) {
      setIdError('Employee ID is invalid');
    }
    if(idError===null){
      const employeeIdsArray = e.target.value.split(',')
      setId(employeeIdsArray);
    }
  }

  function handleMsg (e){
    if(e.target.value===""){
      setMsgError('Please enter a message');
    }
    else{
      setMsgError(null);
    }
    if(msgError===null){
      setMsg(e.target.value);
    }
  }

  return (
    <div className="textCenter">
      <form onSubmit={handleSubmit} >
      <div>
        <TextField
          id="standard-basic"
          label="Employee id"
          variant="outlined"
          required
          multiline
          rows={4}
          sx={{
            width: 400,
          }}
          onChange={handleID}
        />
        {idError && <p style={{color: 'red'}}>{idError}</p>}
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Message"
          variant="outlined"
          required
          multiline
          rows={4}
          sx={{
            marginTop: 2,
            width: 400,
          }}
          onChange={handleMsg}
        />
         {msgError && <p style={{color: 'red'}}>{msgError}</p>}
      </div>
      <div className="btn">
        <Button variant="contained" type="submit" disabled={idError!==null || msgError!==null}>Submit</Button>
      </div>
      </form>
    </div>
  );
}

export default Form;
