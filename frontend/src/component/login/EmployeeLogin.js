import React, { useEffect, useState } from "react";
import authHeader from "../services/auth-header";
import axios from "axios";
import "./LoginRegister.css";
import log from "../../images/log.svg"
import { Link, useHistory } from "react-router-dom";
import { url } from "../common/constants";

const EmployeeLogin = () => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [errortype, seterrortype] = useState("");
  const Login = (e) => {
    e.preventDefault();
    const employee = { email, password };
    axios.post(url + "/login",employee,{authHeader}).then((Response) => {
      console.log(Response.data.jwt);
      if(Response.data.jwt)
        localStorage.setItem('user',JSON.stringify(Response.data));
      if (Response.status == 200) {
        history.push("/customer/welcome");
      } else {
        setemail("");
        setpassword("");
        seterror(Response.data);
        seterrortype("alert-box");
      }
    }
  );

  }
 
  useEffect(() => {
    const container = document.querySelector(".container-l");
  });
  return (
    <div>
      <div className="container-l">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form l-form">
              <h2 className="title fw-bold">Team Sign In</h2>
              <input type="text" className="input-fields-l" placeholder="Email" value={email} onChange={(e) => { setemail(e.target.value) }} />
              <input type="password" className="input-fields-l" placeholder="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
              <input type="submit" value="Login" className="btn-l solid" onClick={Login} />
              <div className={errortype} role="alert">{error}</div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content pt-5">
              <h1 className="pt-5 pb-3">Hello, Folks!</h1>

            </div>
            <img src={log} className="image-l" alt="" />
          </div>

        </div>
      </div>

    </div>
  );
}
export default EmployeeLogin;
