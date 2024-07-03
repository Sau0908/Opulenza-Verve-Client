import React, { useEffect } from "react";
import SocialLink from "./SocialLink";

function BusinessCard() {
  return (
    <>
      <div className="rounded-lg overflow-hidden border  sm:mt-14 md:mt-20 lg:mt-24 xl:mt-20 mx-4 sm:mx-8 md:mx-12 lg:mx-20 xl:mx-20 bg-white bg-opacity-10">
        <div className="px-5 py-5">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.086415494081!2d77.31791909250312!3d28.583476502766036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce457175bd67f%3A0xe15e16d1018e02ac!2sSector%204%2C%20Noida%2C%20Uttar%20Pradesh%20201301%2C%20India!5e0!3m2!1sen!2sus!4v1694149792155!5m2!1sen!2sus"
              width="100%"
              height="250"
              style={{ border: "1px solid black" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="p-4">
          <h5 className="h4  text-white text-center">Contact Information</h5>
          <div className="flex items-center mt-4">
            <svg
              className="w-6 h-6 text-white mr-2"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
              <path d="M12 8v8l-4-4-2 2 6 6 8-8-2-2-4 4z"></path>
            </svg>
            <p className="text-white text-lg underline font-semibold hover:text-black">
              Sector-4 Noida, Uttar Pradesh
            </p>
          </div>
          <div className="flex items-center mt-4">
            <svg
              className="w-6 h-6 text-white mr-2"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 10C22 16.5268 16.5268 22 10 22C3.47316 22 0 16.5268 0 10C0 3.47316 3.47316 0 10 0C16.5268 0 22 3.47316 22 10ZM2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10H2Z"></path>
              <circle cx="12" cy="10" r="4"></circle>
            </svg>
            <p className="text-white text-lg font-semibold">
              Email:{" "}
              <a
                href="mailto:abc@gmail.com"
                className="text-white  underline hover:text-black"
              >
                abc@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center mt-4">
            <svg
              className="w-6 h-6 text-white mr-2"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M22 10C22 16.5268 16.5268 22 10 22C3.47316 22 0 16.5268 0 10C0 3.47316 3.47316 0 10 0C16.5268 0 22 3.47316 22 10ZM2 10C2 15.5229 6.47715 20 12 20C17.5229 20 22 15.5229 22 10H2Z"></path>
              <path d="M15 8H19.4L23 12.6V18H1V6H23V11.4L18.4 6H15V8Z"></path>
            </svg>
            <p className="text-white text-lg font-semibold">
              Phone:{" "}
              <a
                href="tel:(123) 456-7890"
                className="text-white underline hover:text-black"
              >
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <SocialLink />
      </div>
    </>
  );
}

export default BusinessCard;
