import React from "react";
import image2 from "../../assets/images/ourpledge.avif";
import image1 from "../../assets/images/a_culinary_fest.webp";

const InfoDisplay = () => {
  const imageDimensions = "h-100 w-100";
  return (
    <div className="m-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-16 px-6">
        <div className="flex md:flex-col md:justify-center">
          <img
            src={image1}
            alt="I1"
            className="max-w-full h-auto md:h-80 mr-4 rounded-lg shadow-lg"
            style={{ verticalAlign: "top" }}
          />
        </div>
        <div className="flex md:flex-col md:justify-center max-w-screen-md">
          {" "}
          {/* Set a maximum width for the text container */}
          <div className="text-center md:text-left">
            <h2 className="h2 capitalize text-black py-2 ">A Culinary Feast</h2>
            <p>
              Join us on a culinary odyssey where every dish is a work of art,
              crafted with passion and authenticity. From the aromatic spices of
              North India to the vibrant flavors of South India, and the finesse
              of Italian cuisine, every plate tells a tale.
            </p>{" "}
            <br />
            <p>
              Our culinary artists take inspiration from their heritage,
              infusing each creation with tradition and innovation.
            </p>{" "}
            <br />
            <p>
              From the aromatic spices of North India to the vibrant flavors of
              South India, and the finesse of Italian cuisine, every plate tells
              a tale.
            </p>
            <div>
              <button className="btn mt-6 mx-auto capitalize h-[40px]">
                Explore The Delights
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pb-16 px-6">
        <div className="flex md:flex-col md:justify-center">
          <div className="text-center md:text-left">
            <h2 className="h2 capitalize text-black py-2">Our Pledge</h2>
            <br></br>
            <p>
              We are unwavering in our commitment to quality. We source the
              freshest local ingredients to ensure every bite is a burst of
              flavor. <br /> <br />
              Our team of chefs, each a master in their craft, pour their
              expertise and creativity into every dish, presenting a symphony of
              tastes that will leave you wanting more.
            </p>

            <div>
              <button className="btn mt-6 mx-auto capitalize h-[40px]">
                Dive into Flavor
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col md:justify-center">
          <img
            src={image2}
            alt="I2"
            className="max-w-full h-auto md:h-80 mr-4 rounded-lg shadow-lg"
            style={{ verticalAlign: "top" }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoDisplay;
