import React from "react";

const SocialLink = () => {
  return (
    <div className="flex justify-center items-center gap-3 mb-8">
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          width="50px"
          className="transition-transform transform group-hover:scale-110"
          alt="Instagram"
        />
      </a>
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/800px-Facebook_icon_2013.svg.png"
          width="50px"
          className="transition-transform transform group-hover:scale-110"
          alt="Facebook"
        />
      </a>
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
          width="50px"
          className="transition-transform transform group-hover:scale-110"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default SocialLink;
