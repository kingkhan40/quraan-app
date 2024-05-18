import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState();
  const [activeBtn, setActiveBtn] = useState(false);
  let name, value;
  const dataEnter = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!user.email || !user.password) {
      setErrorMsg("Please Fill all the Fields");
      return;
    }
    setActiveBtn(true);
    setErrorMsg("");
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(async (res) => {
        setActiveBtn(false);
        console.log("🚀🚀🚀 ~~ file: Signin.js:35 ~~ .then ~~ res::", res);
        navigate("/");
      })
      .catch((err) => {
        console.log("🚀🚀🚀 ~~ file: Signin.js:43 ~~ onSubmit ~~ err::", err);
        setErrorMsg(err.message);
        setActiveBtn(false);
      });
  };

  return (
    <div className="bg-gray-600 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign In to Learn Quran
        </h2>
        <form className="space-y-4">
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
              value={user.password}
              onChange={dataEnter}
              name="password"
              autoComplete="off"
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
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-4 text-sm text-center">
          <span className="text-gray-600">Don't have an account?</span>
          <a
            href="/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Create one here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
