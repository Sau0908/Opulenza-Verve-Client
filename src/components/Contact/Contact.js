import React from "react";
import BusinessCard from "./BusinessCard";
import ContactForm from "./ContactForm";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";

function Contact() {
  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div class="bg-bcgd bg-cover py-12">
        <div class="min-h-screen flex flex-col lg:flex-row">
          <div class="lg:w-1/2 mt-16 lg:mt-0">
            <div class="px-4">
              <div class="mb-8">
                <BusinessCard />
              </div>
            </div>
          </div>

          <div class="mt-4 lg:w-1/2">
            <div class="min-h-screen">
              <div class="flex flex-col justify-center px-4 lg:px-16">
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Contact;
