import React from "react";
import ReactPlayer from "react-player";
import "./About.css";

const RPlayer = () => {
  return (
    <div className="company-profile">
      <div className="container">
        <h1 className="profile-title"  data-aos="fade-right">Company Profile</h1>

        <div className="profile-content">
          <p className="profile-description">
            Nexyos offers multi-potential sensing products to capture the most
            meaningful data and makes it accessible across diverse applications.
            It innovatively applies emerging technologies such as AI, 5G, and
            IoT to distinct use scenarios. With a commitment to making sensing
            matter, Milesight quickly responds to customer-specific challenges
            and collaborates with an expanding network of partners to deliver
            unique data value. It is determined to make real, positive impacts
            in smart buildings, intelligent traffic, intelligent security, smart
            cities, and beyond.
          </p>

          <div className="divider"></div>

          <div className="video-section">
            <h2 className="video-title"  data-aos="fade-right">Nexyos Corporate Film</h2>
            <p className="video-subtitle">
              Sense the Infinity Do Drive the World
            </p>

            <div className="video-container">
              <ReactPlayer
                url="https://youtu.be/LrgVRwDzlpw" // Replace with your YouTube video ID
                width="100%"
                height="100%"
                controls={true}
                className="youtube-player"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPlayer;
