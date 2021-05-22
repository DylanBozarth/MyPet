import React, { useState } from "react";

const Login = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

  return (
    <div className="row">
    <div className="col-sm-4"></div>
    <div className="submit-form col-sm-4">
      <h3 className="text-center">Use whatever username and password you want, this is not a secure application.</h3>
      <div>
        <div className="form-group">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            className="form-control white"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">Password</label>
          <input
            type="text"
            className="form-control "
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
          />
        </div>
<div className="text-center">
        <button onClick={login} className="btn btn-success text-center">
          Login
        </button>
      </div></div>
      <br /> I will totally sell your data if given the chance.
    </div>
    <div className="col-sm-4"></div></div>
  );
};

export default Login;