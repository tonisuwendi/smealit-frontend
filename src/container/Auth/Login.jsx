import React from "react";
import { Component } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="form">
          <h2 className="title">Login Akun!</h2>
          <p>Tambah ilmu dengan membaca</p>
          <form>
            <label htmlFor="username" className="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Username"
            />
            <label htmlFor="password" className="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button>Login</button>
            <Link to="">
              <p className="forget">Lupa password?</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
