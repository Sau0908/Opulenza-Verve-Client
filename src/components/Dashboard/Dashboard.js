import React, { useState } from "react";

import ReservationList from "./ReservationList";
import ContactList from "./ContactList";
import HeaderForRoute from "../shared/HeaderForRoute";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("reservation");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div className="bg-hero bg-cover bg-center w-full min-h-screen pt-20">
        <div className="container mx-auto p-4 lg:w-2/3 md:w-3/4 sm:w-full">
          <h1 className="h1 text-3xl text-white font-semibold mb-4 text-center">
            Opulenza Verve Dashboard
          </h1>
          <div className="bg-black bg-opacity-40 border shadow-md rounded-lg">
            <div className="flex flex-col lg:flex-row justify-start p-4">
              <button
                className={`${
                  activeTab === "reservation"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-4 py-2 m-2 rounded-lg`}
                onClick={() => handleTabChange("reservation")}
              >
                Reservation List
              </button>
              <button
                className={`${
                  activeTab === "contact"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                } px-4 py-2 m-2 rounded-lg`}
                onClick={() => handleTabChange("contact")}
              >
                Contact List
              </button>
            </div>
            <div className="p-4">
              {activeTab === "reservation" ? (
                <ReservationList />
              ) : (
                <ContactList />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
