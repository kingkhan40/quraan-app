import React, { useState } from "react";
import PagesSection from "../Components/PagesSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
  });

  let name, value;
  const dataEnter = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, tel, message } = user;
    if (firstName && lastName && email && tel && message) {
      const res = await fetch(
        "https://learn-quran-by-harry-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            tel,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          tel: "",
          message: "",
        });
        toast.success("Form submission successfull");
      }
    } else {
      toast.error("Fill the Form");
    }
  };
  return (
    <>
      <PagesSection
        Title={"Contact Us"}
        image={
          "https://learnquraan.co.uk/vendor/local/imgs/kids-learns-basic-of-islam.webp"
        }
      />

      <div
        className="flex justify-center items-center w-screen h-auto bg-gray-100"
        // data-aos="fade-right"
        // data-aos-delay="300"
      >
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <form
            method="POST"
            className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl"
          >
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send A Message</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-slate-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={user.firstName}
                onChange={dataEnter}
                autoComplete="off"
                name="firstName"
                required
                placeholder="First Name*"
              />
              <input
                className="w-full bg-slate-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                value={user.lastName}
                onChange={dataEnter}
                autoComplete="off"
                name="lastName"
                required
                placeholder="Last Name*"
              />
              <input
                className="w-full bg-slate-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                value={user.email}
                onChange={dataEnter}
                autoComplete="off"
                name="email"
                required
                placeholder="Email*"
              />
              <input
                className="w-full bg-slate-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="tel"
                value={user.tel}
                onChange={dataEnter}
                autoComplete="off"
                name="tel"
                required
                placeholder="Phone*"
              />
            </div>
            <div className="my-4">
              <textarea
                required
                placeholder="Message*"
                value={user.message}
                onChange={dataEnter}
                autoComplete="off"
                name="message"
                className="w-full h-32 bg-slate-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-full w-full hover:bg-orange-500
                      focus:outline-none focus:shadow-outline"
                onClick={postData}
              >
                Send Message
              </button>
            </div>
          </form>

          <div
            className="w-full lg:-mt-60 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Drop in our office
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
                vitae nibh viverra, auctor turpis sed, scelerisque ex.
              </p>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-map-marker-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Main Office</h2>
                  <p className="text-gray-400">
                    5555 Tailwind RD, Pleasant Grove, UT 73533
                  </p>
                </div>
              </div>

              <div className="flex my-4 w-2/3 lg:w-1/2">
                <div className="flex flex-col">
                  <i className="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl">Call Us</h2>
                  <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p className="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>

              <div className="flex my-4 gap-2 w-2/3 lg:w-1/2">
                <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-facebook-f text-blue-900" />
                </a>
                <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-linkedin-in text-blue-900" />
                </a>
                <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-twitter text-blue-900" />
                </a>
                <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-skype text-blue-900" />
                </a>
                <a className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1">
                  <i className="fab fa-github text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
