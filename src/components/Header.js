import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link
            to="https://www.linkedin.com/in/alireza-hajizaki-4a0aa8278"
            target="_blank"
          >
            <p className="text-gradient text-[25px]">
              {" "}
              SHAHRAM <span className=""> HAJIZAKI</span>
            </p>
          </Link>
          {/* button */}
          <Link to='tel:+989902226331' target="_blank">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
