import React from "react";
import BookingForm from "./BookingForm";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";

const Booking = () => {
  return (
    <div>
      <HeaderForRoute />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Booking;
