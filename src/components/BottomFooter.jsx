import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import "../style/pagecss.css";

const BottomFooter = () => {
  return (
    <div
      className="bottom-footer border-t border-gray-100 py-3 px-12 w-full"
      style={{
        backgroundColor: "#f7f7f7",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-6 align-items-center">
          {/* Left Side: Copyright Text */}
          <div className="md:col-span-4  md:text-start text-center">
            <p className="mb-0 text-muted">
              © 2025,{" "}
              <Link to="/" className="font-extrabold">
                Mutasim Naib
              </Link>
              <br />
              All rights reserved
            </p>
          </div>

          {/* Middle: Phone Number */}
          <div className="md:col-span-4 text-center">
            <div className=" align-items-center justify-content-center gap-2">
              <i className="bi bi-telephone text-muted"></i>
              <Link to="tel:8008008841" className=" font-black">
                8008008841
              </Link>
              <br />
              <span className="text-muted small">Working 8:00 - 22:00</span>
            </div>
          </div>

          {/* Right Side: Social Icons with React Icons */}
          <div className="md:col-span-4 items-center justify-end flex md:mt-0 mt-2">
            <Link to="#" className=" pe-5">
              <BsFacebook size={20} />
            </Link>
            <Link to="#" className=" pe-5">
              <BsTwitter size={20} />
            </Link>
            <Link to="#" className=" pe-5">
              <BsInstagram size={20} />
            </Link>
            <Link to="#" className=" pe-5">
              <BsPinterest size={20} />
            </Link>
            <Link to="#" className="">
              <BsYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
