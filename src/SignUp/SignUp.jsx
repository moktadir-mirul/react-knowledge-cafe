import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div>
      <div className="mt-30 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h1 className="text-5xl font-bold">Please, sign up first!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default SignUp;
