import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Aos from "aos";

import useMenu from "../../hooks/useMenu";
import HeaderForRoute from "../shared/HeaderForRoute";
import Footer from "../Home/Footer";

const MenuItems = () => {
  const catagories = ["Indian", "North Indian", "South Indian", "Italian"];
  const { menu } = useParams();
  const initialIndex = catagories.indexOf(menu);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menuitems] = useMenu();

  const indian = menuitems.filter((items) => items.menu === "Indian");
  const northIndian = menuitems.filter(
    (items) => items.menu === "North Indian"
  );
  const southIndian = menuitems.filter(
    (items) => items.menu === "South Indian"
  );
  const italian = menuitems.filter((items) => items.menu === "Italian");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <HeaderForRoute></HeaderForRoute>
      <div className="bg-opacity-50 bg-hero bg-cover bg-right pt-20">
        <div className="mx-auto max-w-2xl py-32 sm:py-20 lg:py-20">
          <div className="text-center">
            <h1 className="h2 capitalize text-white text-center">Menu</h1>
            <p className="text-white font-bold capitalize mb-2">
              Explore Our Delicious Favorites
            </p>
            <p className="text-white font-bold capitalize mb-8">
              Click Tabs for Tantalizing Options
            </p>
          </div>
        </div>

        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="md:flex justify-center rounded-lg gap-4 md:gap-10 bg-black bg-opacity-70 my-1 px-2 mx-2 md:mx-10 py-2 md:py-1  md:h-28 lg:h-[80px]">
            <Tab
              activeClass="active"
              className="text-[#F1ECE1] hover:text-gray-500 tab font-primary w-full py-2 md:py-3 text-semibold rounded-none text-xl md:text-2xl text-center"
            >
              <button>Indian Cuisine</button>
            </Tab>
            <Tab className="text-[#F1ECE1] hover:text-gray-500 tab w-full py-2 md:py-3 font-primary text-semibold rounded-none text-xl md:text-2xl text-center">
              <button>North Indian Cuisine</button>
            </Tab>
            <Tab className="text-[#F1ECE1] hover:text-gray-500 tab w-full py-2 md:py-3 font-primary text-semibold rounded-none text-xl md:text-2xl text-center">
              <button>South Indian Cuisine</button>
            </Tab>
            <Tab className="text-[#F1ECE1] hover:text-gray-500 tab w-full py-2 md:py-3 font-primary text-semibold rounded-none text-xl md:text-2xl text-center">
              <button>Italian Cuisine</button>
            </Tab>
          </TabList>

          <TabPanel>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10"
              data-aos="zoom-out-right"
            >
              {indian.map((items) => (
                <div
                  key={items.id}
                  className="flex space-x-2 text-white bg-black bg-opacity-40 p-2 rounded-md"
                >
                  <img
                    src={items.image}
                    style={{ borderRadius: "0 200px 200px 200px" }}
                    className="w-[90px] h-[90px]"
                    alt="food"
                  />
                  <div>
                    <h3 className="uppercase h5">{items.item} ---------</h3>
                    <p>{items.recipe}</p>
                  </div>
                  <p className="text-white">₹{items.price}</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white "
              data-aos="zoom-in-down"
            >
              {northIndian.map((items) => (
                <div
                  key={items.id}
                  className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md"
                >
                  <img
                    style={{ borderRadius: "0 200px 200px 200px" }}
                    className="w-[90px] h-[90px]"
                    src={items.image}
                    alt="food"
                  />
                  <div>
                    <h3 className="uppercase h5">{items.item} ---------</h3>
                    <p>{items.recipe}</p>
                  </div>
                  <p className="text-white">₹{items.price}</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white"
              data-aos="zoom-in-down"
            >
              {southIndian.map((items) => (
                <div
                  key={items.id}
                  className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md"
                >
                  <img
                    style={{ borderRadius: "0 200px 200px 200px" }}
                    className="w-[90px] h-[90px]"
                    src={items.image}
                    alt="food"
                  />
                  <div>
                    <h3 className="uppercase h5">{items.item} ---------</h3>
                    <p>{items.recipe}</p>
                  </div>
                  <p className="text-white">₹{items.price}</p>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white"
              data-aos="zoom-out-left"
            >
              {italian.map((items) => (
                <div
                  key={items.id}
                  className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md"
                >
                  <img
                    style={{ borderRadius: "0 200px 200px 200px" }}
                    className="w-[90px] h-[90px]"
                    src={items.image}
                    alt="food"
                  />
                  <div>
                    <h3 className="uppercase h5">{items.item} ---------</h3>
                    <p>{items.recipe}</p>
                  </div>
                  <p className="text-white">₹{items.price}</p>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default MenuItems;
