import { Cancel, Place } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import "./register.css";

function Register(props) {
  const [success, setSuccess] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await axios.post("/users/register", newUser);
      setFail(false);
      setSuccess(true);
    } catch (err) {
      setFail(true);
    }
  };

  return (
    <div className="registerContainer">
      <div className="logo">
        {" "}
        <Place />
        GeoConnect
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button className="registerButton">Register</button>
        {success && (
          <span className="success">
            Account Registered. You may now login!
          </span>
        )}
        {fail && <span className="failure">Something went wrong!</span>}
      </form>
      <Cancel
        className="registerCancel"
        onClick={() => props.setShowRegister(false)}
      />
    </div>
  );
}

export default Register;
