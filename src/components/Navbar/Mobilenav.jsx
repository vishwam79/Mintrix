import React from "react";

import "./Mobilenav.css";
import { MdArrowOutward } from "react-icons/md";

const Mobilenav = () => {
  return (
    <div className="mobilenav">
      <div className="mobilenav-content ">
        <div className="mobilenav-a">
          <ul className="mobilenav-list ">
            <li className="mobilenav-item">home</li>
            <li className="mobilenav-item">Product</li>
            <a href="/chat">
              <li className="mobilenav-item mobilenav-hover">Our Chatbots</li>
            </a>
            <li className="mobilenav-item">Contact</li>
          </ul>
        </div>

        <button className="mobilenav-button">
          Get started for FREE <MdArrowOutward className="btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default Mobilenav;
