import { Cancel, Place } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import "./login.css";

function Login(props) {
  const [fail, setFail] = React.useState(false);
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post("/users/login", user);
      props.myStorage.setItem("user", res.data.username);
      props.setCurrentUser(res.data.username);
      props.setShowLogin(false);
      setFail(false);
    } catch (err) {
      setFail(true);
      console.log(err);
    }
  };

  return (
    <div className="loginContainer">
      <div className="logo">
        {" "}
        <Place />
        GeoConnect
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name" ref={nameRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button className="loginButton">Log In</button>
        {fail && <span className="failure">Something went wrong!</span>}
      </form>
      <Cancel
        className="loginCancel"
        onClick={() => props.setShowLogin(false)}
      />
    </div>
  );
}

export default Login;
