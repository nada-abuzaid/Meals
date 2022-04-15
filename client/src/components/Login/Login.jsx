import React from 'react';
import './login.css';

export default function Login({ handleLogin, closeModal, history, type }) {
  return (
    < div className = "modal" >
      <form onSubmit={(e) => { handleLogin(e); 
        type !== "mealDetails" && history.push('/') 
        }}>
        <div className="header-modal">
          <p className="modal-title">Login</p>
          <i
            onClick={() => closeModal('login')}
            className="fa-solid fa-xmark"
          ></i>
        </div>
        <div className="field">
          <span className="fa fa-user"></span>
          <input
            className="form-control"
            placeholder="Username"
            name="username"
          />
        </div>
        <div className="field">
          <span className="fa fa-lock"></span>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name='password'
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}