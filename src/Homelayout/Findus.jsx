import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Findus = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us on</h2>

      <div className="flex flex-col gap-3">
        <button className="btn btn-info btn-outline flex items-center gap-2">
          <FaFacebookF className="text-lg" /> Facebook
        </button>

        <button className="btn btn-info btn-outline flex items-center gap-2">
          <FaInstagram className="text-lg" /> Instagram
        </button>

        <button className="btn btn-info btn-outline flex items-center gap-2">
          <FaTwitter className="text-lg" /> Twitter
        </button>
      </div>
    </div>
  );
};

export default Findus;
