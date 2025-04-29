import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase";

const LogIn = () => {
    const [user, setUser] = useState(null);
    const [errorMsg, setErrorMsg] = useState('')
    const handleLogin = (e) => {
        e.preventDefault();

        setUser(null);
        setErrorMsg('');
        let email = e.target.email.value;
        let password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            console.log(result.user)
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
            setErrorMsg(error.message)
        })
    }
  return (
    <>
        <div className="mt-30 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
    <Link to={"/"}>Go back</Link>
    <h1 className="text-3xl text-green-600">{user && 'User logged in successfully'}</h1>
    <h1 className="text-3xl text-red-600">{errorMsg && errorMsg}</h1>
    </>
  );
};

export default LogIn;
