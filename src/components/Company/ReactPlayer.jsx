import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./About.css";
import axios from "axios";

const RPlayer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://portal.nexyos.com/api/about/sec/two")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  if (data.length === 0) return null;

  return (
    <div className="company-profile">
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="profile-content-wrapper">
            <h1 className="profile-title" data-aos="fade-right">
              {item.main_heading}
            </h1>

            <div className="profile-content">
              <p className="profile-description text-center">
                {item.main_description}
              </p>

              <div className="divider"></div>

              <div className="video-section">
                <h2 className="video-title" data-aos="fade-right">
                  {item.second_heading}
                </h2>
                <p className="video-subtitle">
                  Sense the Infinity Do Drive the World
                </p>

                <div className="video-container">
                  <ReactPlayer
                    url={item.video}
                    width="100%"
                    height="100%"
                    controls={true}
                    className="youtube-player"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RPlayer;
