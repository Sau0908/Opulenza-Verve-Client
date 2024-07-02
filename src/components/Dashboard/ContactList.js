import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContactUs = () => {
    axios
      .get("https://opulenza-verve-server-hvpl.vercel.app/api/contact") // Replace with your backend API URL
      .then((response) => {
        setContacts(response.data); // Assuming the response is an array of contact
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Function to delete a contact by ID
  const handleDeleteContact = (id) => {
    console.log(id);

    axios
      .delete(`https://opulenza-verve-server-hvpl.vercel.app/api/contact/${id}`)
      .then((response) => {
        console.log("Contact Item deleted successfully:", response.data);
        fetchContactUs();
      })
      .catch((error) => {
        console.error("Error deleting Contact", error);
      });
  };
  const handleMailContact = (contact) => {
    const recipientEmail = encodeURIComponent(contact.email);
    const subject = encodeURIComponent("Thank You for Contacting Us");
    const body = encodeURIComponent(
      `Dear ${contact.name},\n\nThank you for contacting us! We appreciate your interest and will get back to you as soon as possible. Your message is important to us, and we look forward to assisting you.\n\nBest regards,\nOpulenza Verve`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  useEffect(() => {
    fetchContactUs();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl text-white bg-black p-2 rounded-lg shadow-md">
        Contact Lists
      </h2>
      <ul className="divide-y mt-4">
        {contacts.map((contact) => (
          <li key={contact._id} className="py-2">
            <div className="bg-white w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl rounded-lg shadow-md p-3 whitespace-normal">
              <div className="mb-2">
                <span className="text-gray-600 font-semibold">Name:</span>{" "}
                {contact.name}
              </div>
              <div className="mb-2">
                <span className="text-gray-600 font-semibold">Email:</span>{" "}
                {contact.email}
              </div>
              <div className="mb-2">
                <span className="text-gray-600 font-semibold">Subject:</span>{" "}
                {contact.subject}
              </div>
              <div className="mb-2">
                <span className="text-gray-600 font-semibold">Message:</span>{" "}
                <div className="h-16 overflow-y-hidden truncate">
                  {contact.message}
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md mr-2"
                  onClick={() => handleDeleteContact(contact._id)}
                >
                  Delete
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                  onClick={() => handleMailContact(contact)}
                >
                  Mail
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
