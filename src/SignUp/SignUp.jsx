import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { auth } from "../firebase";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorMeassage, setErrorMessage] = useState("");
  const [createUser, setCreatedUser] = useState(null);

  const handleCreateUser = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    const checkBox = e.target.terms.checked;
    setCreatedUser(null);
    setErrorMessage("");
    setErrorMsg(false);

    if (passRegEx.test(password) === false) {
      setErrorMessage(
        "Password must contain eight character, one capital, one special chracter, one number."
      );
      return;
    }

    if(checkBox === false) {
      setErrorMessage('Please accept our terms and conditions');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setCreatedUser(result.user);
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert('verification email sent successfully')
        })
        const userProfile = {
          displayName : userName,
          photoURL : photo
        }
        updateProfile(auth.currentUser, userProfile)
          .then(() => {
            alert('user profile updated successfully')
          })
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg(error.message);
      });
  };

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
                <div className="mt-2">
                  <label className="label">
                    <input
                      type="checkbox"
                      name="terms"
                      className="checkbox"
                    />
                    Accept Our terms and conditions
                  </label>
                </div>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </fieldset>
            <p className="py-2">Already have an account? <Link to={"/login"} className="text-blue-700 underline">Log in</Link></p>
            <Link to={"/"}><button className="mt-2 btn btn-warning">Go back</button></Link>
      <h1 className="text-3xl text-green-600">
        {createUser && `${createUser.email} user created successfully`}
      </h1>
      <h1 className="text-3xl text-red-600">{errorMsg && errorMsg}</h1>
      <h1 className="text-3xl text-rose-600">
        {errorMeassage && errorMeassage}
      </h1>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default SignUp;
