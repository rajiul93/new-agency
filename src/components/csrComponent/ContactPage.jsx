"use client";

import axios from "axios";
import { useState } from "react";

const ContactPage = () => {
  const [value, setValue] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
  });
  const onInputChange = (key, value) => {
    setValue((fromValue) => ({ ...fromValue, [key]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.fname.length === 0) {
      return null;
    }
    if (value.lname.length === 0) {
      return null;
    }
    if (value.email.length === 0) {
      return null;
    }
    if (value.msg.length === 0) {
      return null;
    } else {
      await axios.post("/api/contact", value);
      setValue({
        fname: "",
        lname: "",
        email: "",
        msg: "",
      })
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex justify-around">
        <div>
          <h1 className="text-green-500 text-3xl">Blog_</h1>
          <h1 className="">So much more than a business analytics tool</h1>
        </div>
        <div>
          <h1 className="text-green-500 text-center">Create a new account</h1>
          <form
            onSubmit={handleSubmit}
            className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <span>first name:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              value={value.fname}
              onChange={(e) => onInputChange("fname", e.target.value)}
              type="text"
              name="fname"
            />
            <br />

            <span>last name name:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              value={value.lname}
              onChange={(e) => onInputChange("lname", e.target.value)}
              type="text"
              name="lname"
            />
            <br />

            <span>Email:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              value={value.email}
              onChange={(e) => onInputChange("email", e.target.value)}
              type="text"
              name="email"
            />
            <br />

            <span>Massage:</span>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
              value={value.msg}
              onChange={(e) => onInputChange("msg", e.target.value)}
              type="text"
              name="msg"
            />
            <br />
            <button type="submit" className="btn-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
