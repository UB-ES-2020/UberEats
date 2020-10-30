import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function RegisterClient() {
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Name</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <label>E-mail</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <label>Password</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <label>DNI</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <label>Address</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <label>Tlf number</label>
        <input
        type="text"
        autoFocus
        required
        ></input>
        <p className="errorMsg"></p>

        <div className="btnContainer">
          <button> Sign up</button>
          <p>Do you have an account ?   
          <a href="../Login.js">Sign in</a></p>
          <p>Do you want to register as a restaurant ?   
          <a href="../RegisterRest.js">Sign up</a></p>
        </div>       
      </div>
    </section>

    

  );
}

export default RegisterClient;