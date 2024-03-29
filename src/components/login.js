import React, { useState, useEffect } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);
useEffect(() => {
  console.log(user)
})
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="row login">
    <div className="col-sm-4"></div>
    <div className="submit-form col-sm-4">
      <h3 className="text-center">Use whatever username you want, this is not a secure application.</h3>
      <div>
        <div className="form-group">
          <label htmlFor="user">Your Name <br /> Your username is case sensitive</label>
          <input
            type="text"
            className="form-control "
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">Your password</label>
          <input
            type="text"
            className="form-control "
            id="id"
            required
           
          />
        </div>

<div className="text-center">
        <button onClick={() => login()} className="btn btn-success text-center">
          Login
        </button>
      </div></div>
      <br /> <h3 className="text-center">I will totally sell your data if given the chance. So please don't enter any personal information.</h3>
    </div>
    <div className="col-sm-4"></div></div>
  );
};

export default Login;