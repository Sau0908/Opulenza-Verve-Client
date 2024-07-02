import React from "react";
import image1 from "../../assets/images/opexptrial3.jpg";
import image2 from '../../assets/images/exp-bg_trial1.webp';

const Experience = () => {
  return (
    <section className="bg-image py-16" style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover' }}>
      <div className="container mx-auto text-center">
        <h2 className="h2 capitalize text-white py-4">The Opulenza Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-center px-4 md:px-10">
          <div className="md:px-64">
            <p className="text-white m-4 py-8 text-2xl">
              At Opulenza Verve, dining is an elevated experience. Our refined ambiance,
              gracious hospitality, and a menu designed to tantalize your taste buds create an
              atmosphere where you can cherish unforgettable moments with friends and
              family.
            </p>
          </div>
          {/* <div>
            <img
                src={image1} // Replace with your actual image path
                alt="Restaurant"
                className="max-w-full h-auto md:h-96 rounded-lg shadow-lg"
            />
        </div> */}
        </div>
      </div>
    </section>

  );
};

export default Experience;
