import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../firebase";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [createUser, setCreatedUser] = useState(null);

  const handleCreateUser = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setCreatedUser(null);

    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
        console.log(result.user);
        setCreatedUser(result.user)
    })
    .catch(error => {
        console.log(error.message);
        setErrorMsg(true);
    })
  }

  return (
    <div>
      <form onSubmit={handleCreateUser}>
        <div className="mt-30 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
          <h1 className="text-4xl font-bold p-2 text-center">
            Please, sign up first!
          </h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                name="photoURL"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-sm absolute top-[22px] right-6 z-50"
                >
                  {showPassword === false ? (
                    <IoEyeOff size={"25px"}></IoEyeOff>
                  ) : (
                    <IoEye size={"25px"}></IoEye>
                  )}
                </button>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
      <Link to={"/"}>Go back</Link>
      <h1 className="text-3xl text-green-600">{createUser && 'User created successfully'}</h1>
      <h1 className="text-3xl text-red-600">{errorMsg && 'Thers been an error'}</h1>
    </div>
  );
};

export default SignUp;
