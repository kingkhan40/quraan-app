import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Packages from "./Pages/Packages";
import Signin from "./Components/auth/Signin";
import Signup from "./Components/auth/Signup";
import { auth } from "./Components/auth/firebase";
import { AuthProvider } from "./Components/auth/AuthContext";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null); // Update user state to null after logout
    });
  };

  return (
    <>
      <div className="px-4">
        <AuthProvider>
          <Header />
          <Routes>
            {user ? (
              <>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/about"
                  element={<About />}
                />
                <Route
                  path="/services"
                  element={<Services />}
                />
                <Route
                  path="/blog"
                  element={<Blog />}
                />
                <Route
                  path="/packages"
                  element={<Packages />}
                />
                <Route
                  path="/contact"
                  element={<Contact />}
                />
                <Route
                  path="/logout"
                  element={<Navigate to="/signin" />}
                />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={<Navigate to="/signin" />}
                />
                <Route
                  path="/signin"
                  element={<Signin />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
              </>
            )}
          </Routes>
          <Footer />
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
