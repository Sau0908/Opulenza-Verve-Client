import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const initialFormData = {
    name: "",
    date: "",
    selectedHour: "",
    partySize: "",
    email: "",
    phone: "",
    selectedPeriod: "AM",
  };

  const [formData, setFormData] = useState(initialFormData);

  const hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  const isDateValid = (selectedDate) => {
    const currentDate = new Date();
    // Set the time portion of currentDate to midnight (00:00:00)
    currentDate.setHours(0, 0, 0, 0);
    // Set the time portion of selectedDate to midnight (00:00:00)
    selectedDate.setHours(0, 0, 0, 0);
    return selectedDate >= currentDate;
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (isDateValid(selectedDate)) {
      handleInputChange(e);
    } else {
      toast.error("Please select a future date.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit numeric phone number.");
      return;
    }

    console.log(formData);
    try {
      const response = await axios.post(
        "https://opulenza-verve-server-hvpl.vercel.app/api/reservation",
        formData
      );
      Swal.fire({
        icon: "success",
        title: "Booking request sent successfully",
        html: "Please wait for a reply email.",
      });
    } catch (error) {
      Swal.fire("Error", "Cannot Send", "error");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-bcgd bg-cover py-10">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-cover bg-center bg-no-repeat shadow-2xl border rounded-lg p-4 md:p-4 lg:p-8 w-full max-w-xl bg-white bg-opacity-10">
          <h2 className="h2 capitalize text-white text-center">Booking</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-white font-primary mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                style={{ backgroundColor: "#3B3B3B" }}
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-white font-primary  mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                style={{ backgroundColor: "#3B3B3B" }}
                placeholder="Date"
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                name="date"
                value={formData.date}
                onChange={handleDateChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="selectedHour"
                className="block text-white font-primary mb-2"
              >
                Time
              </label>
              <div className="flex">
                <select
                  id="selectedHour"
                  className="w-1/2 px-4 py-2 rounded-lg bg-opacity-10 border text-lg text-white"
                  value={formData.selectedHour}
                  style={{ backgroundColor: "#3B3B3B" }}
                  onChange={handleInputChange}
                  name="selectedHour"
                  required
                >
                  <option value="">Select Hour</option>
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
                <select
                  id="selectedPeriod"
                  className="w-1/2 px-4 py-2 ml-1 rounded-lg bg-opacity-10 border text-lg text-white"
                  value={formData.selectedPeriod}
                  style={{ backgroundColor: "#3B3B3B" }}
                  onChange={handleInputChange}
                  name="selectedPeriod"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="partySize"
                className="block text-white font-primary mb-2"
              >
                Party Size
              </label>
              <input
                type="number"
                id="partySize"
                style={{ backgroundColor: "#3B3B3B" }}
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                placeholder="Number of Members"
                name="partySize"
                value={formData.partySize}
                onChange={handleInputChange}
                min="1"
                max="12" // Set the maximum value to 12
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-primary mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                style={{ backgroundColor: "#3B3B3B" }}
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-white font-primary mb-2"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                style={{ backgroundColor: "#3B3B3B" }}
                className="w-full px-4 py-2 rounded-lg h-[40px] bg-opacity-10 border text-lg text-white"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-2">
              <button
                type="submit"
                className="btn bg-black font-primary w-full text-white h-[40px]"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
