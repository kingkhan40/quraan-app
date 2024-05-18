import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const [activeBtn, setActiveBtn] = useState(false);
  let name, value;
  const dataEnter = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = () => {
    // e.preventDefault();
    if (!user.name || !user.tel || !user.email || !user.password) {
      setErrorMsg("Please Fill all the Fields");
      return;
    }
    setActiveBtn(true);
    setErrorMsg("");
    createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
      user.tel,
      user.name
    )
      .then(async (res) => {
        setActiveBtn(false);
        const user = res.user;
        await updateProfile(user, { displayName: user.name });
        console.log(res);
        navigate("/");
        setUser({
          name: "",
          tel: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };
  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign Up to Learn Quran
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              value={user.name}
              onChange={dataEnter}
              name="name"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              autoComplete="off"
              value={user.tel}
              onChange={dataEnter}
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black p-2 rounded-md"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={dataEnter}
              name="email"
              autoComplete="off"
              required
              className="mt-1  block w-full shadow-sm sm:text-sm border border-black rounded-lg   text-black p-2"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              value={user.password}
              onChange={dataEnter}
              name="password"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-black p-2 rounded-md"
            />
          </div>
          <div
            className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative ${
              errorMsg ? "block" : "hidden"
            }`}
            role="alert"
          >
            <span className="block sm:inline">{errorMsg}</span>
          </div>

          <div>
            <button
              type="submit"
              onClick={onSubmit}
              disabled={activeBtn}
              className={`w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white ${
                activeBtn
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-center">
          <span className="text-gray-600">Already! have an account?</span>
          <a
            href="/signin"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            LogIn Here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
