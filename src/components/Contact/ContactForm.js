import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "", // Add subject field
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://opulenza-verve-server-hvpl.vercel.app/api/contact",
        formData
      )
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: "Message request sent successfully",
          html: "Please wait for a reply email.",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "Cannot Send", "error");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-cover bg-center bg-no-repeat  shadow-2xl border rounded-lg p-4 md:p-4 lg:p-8 w-full max-w-xl  bg-white bg-opacity-10">
        <h2 className="h2 capitalize text-white text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="label-text font-primary text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ backgroundColor: "#3B3B3B" }}
              className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border  text-lg text-white"
              required
            />
          </div>
          <div>
            <label className="label-text font-primary text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ backgroundColor: "#3B3B3B" }}
              className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border  text-lg text-white"
              required
            />
          </div>
          <div>
            <label className="label-text font-primary  text-white">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{ backgroundColor: "#3B3B3B" }}
              className="w-full px-4 py-2 rounded-lg h-[40px]  border  text-lg text-white"
              required
            />
          </div>
          <div>
            <label className="label-text font-primary text-white">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ backgroundColor: "#3B3B3B" }}
              className="w-full px-4 py-2 rounded-md h-[40px]  border  text-lg text-white"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn bg-black font-primary w-full text-white h-[40px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
