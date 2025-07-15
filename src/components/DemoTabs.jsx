import React, { useState } from "react";

const DemoTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center tab-div">
          {[
            {
              id: 1,
              title: "Video Surveillance",
              icon: "/assets/images/icon/camerablack.png",
              hoverIcon: "/assets/images/icon/camerawhite.png",
            },
            {
              id: 2,
              title: "nexyos IoT Cloud",
              icon: "/assets/images/icon/cloudblack.png",
              hoverIcon: "/assets/images/icon/cloudwhite.png",
            },
            {
              id: 3,
              title: "LoRaWAN® Gateway",
              icon: "/assets/images/icon/lor.svg",
              hoverIcon: "/assets/images/icon/lorawan-white.svg",
            },
            {
              id: 4,
              title: "5G/4G Router",
              icon: "https://www.milesight.com/static/pc/en/online-demo-collection/cerllular-router.svg?t=1744191186348",
              hoverIcon: "/assets/images/icon/cerllularwhite.svg",
            },
          ].map((tab) => (
            <div
              key={tab.id}
              className="col-6 col-md-3 text-center mb-4"
              onClick={() => setActiveTab(tab.id)}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`d-flex justify-content-center align-items-center tab-hover mx-auto rounded-circle border ${
                  activeTab === tab.id ? "text-white" : ""
                }`}
                style={{
                  width: 120,
                  height: 120,
                  transition: "0.3s",
                  backgroundColor: activeTab === tab.id ? "#0299f4" : "",
                }}
              >
                {activeTab === tab.id ? (
                  typeof tab.hoverIcon === "string" ? (
                    <img src={tab.hoverIcon} alt={tab.title} width="50" />
                  ) : (
                    tab.hoverIcon
                  )
                ) : typeof tab.icon === "string" ? (
                  <img src={tab.icon} alt={tab.title} width="50" />
                ) : (
                  tab.icon
                )}
              </div>
              <div className={`mt-2 ${activeTab === tab.id ? "fw-bold" : ""}`}>
                {tab.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="row mt-4">
          {activeTab === 1 && (
            <>
              <div className="content-videoser">
                <div className="text-video text-center">
                  <h3>AI Video Surveillance Solution</h3>
                  <p>
                    Easily try our Network Cameras and NVRs with the online demo
                    today!
                  </p>
                </div>
            <div className="container py-5">
  <div className="row">
    {/* Network Camera Card */}
    <div className="col-md-6 " style={{marginBottom:'10px'}}>
      <div className="h-100 bg-white" style={{borderRadius:'10px'}}   >
        <div className="row g-1">
          <div className="col-7">
            <img
              alt="network camera"
              src="https://www.milesight.com/static/pc/en/online-demo-collection/network-camera.png"
              className="img-fluid rounded-start"
              title="network camera"
            />
          </div>
          <div className="col-5">
            <div className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
              <h5 className="card-title text-black">Network Camera</h5>
              <p className="card-text">User: nexyos<br />Password: nexyos2024</p>
              <a href="http://ipc.nexyos.com:18082/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
  style={{ margin: '20px 0' }} >Play Online</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* PTZ Camera Card */}
    <div className="col-md-6 " style={{marginBottom:'10px'}}>
      <div className="h-100 bg-white" style={{borderRadius:'10px'}} >
        <div className="row g-1">
          <div className="col-7">
            <img
              alt="ptz camera"
              src="https://www.milesight.com/static/pc/en/online-demo-collection/ptz-camera.png"
              className="img-fluid rounded-start"
              title="ptz camera"
            />
          </div>
          <div className="col-5">
            <div className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
              <h5 className="card-title text-black">PTZ Camera</h5>
              <p className="card-text">User: nexyos<br />Password: nexyos2024</p>
              <a href="http://ptz.nexyos.com:18081/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
  style={{ margin: '20px 0' }} >Play Online</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Speed Dome Card */}
  <div className="col-md-6" style={{marginBottom:'10px'}}>
  <div className="h-100 bg-white" style={{borderRadius:'10px'}} >
    <div className="row g-1">
      <div className="col-7">
        <img
          alt="speed dome"
          src="https://www.milesight.com/static/pc/en/online-demo-collection/speed-dome.png"
          className="img-fluid rounded-start"
          title="speed dome"
        />
      </div>
      <div className="col-5">
        <div
          className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}
        >
          <h5 className="card-title text-black">Speed Dome</h5>
          <p className="card-text">
            User: nexyos<br />
            Password: nexyos2024
          </p>
          <a
            href="http://spd.nexyos.com:18080/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ margin: '20px 0' }}
          >
            Play Online
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Fisheye Camera Card */}
    <div className="col-md-6 " style={{marginBottom:'10px'}}>
      <div className="h-100 bg-white" style={{borderRadius:'10px'}} >
        <div className="row g-1">
          <div className="col-7">
            <img
              alt="360° fisheye"
              src="https://www.milesight.com/static/pc/en/online-demo-collection/360%C2%B0-panoramic-fisheye-camera.png"
              className="img-fluid rounded-start"
              title="360° panoramic fisheye camera"
            />
          </div>
          <div className="col-5">
            <div className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
              <h5 className="card-title text-black">360° Panoramic Fisheye Camera</h5>
              <p className="card-text">User: nexyos<br />Password: nexyos2024</p>
              <a href="http://fisheye.nexyos.com:18085/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
  style={{ margin: '20px 0' }} >Play Online</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* NVR Card (One only, avoid duplicate) */}
    <div className="col-md-6 " style={{marginBottom:'10px'}}>
      <div className="h-100 bg-white" style={{borderRadius:'10px'}} >
        <div className="row g-1">
          <div className="col-7">
            <img
              alt="nvr"
              src="https://www.milesight.com/static/pc/en/online-demo-collection/nvr.png"
              className="img-fluid rounded-start"
              title="nvr"
            />
          </div>
          <div className="col-5">
            <div className="card-body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
              <h5 className="card-title text-black">NVR</h5>
              <p className="card-text">User: nexyos<br />Password: nexyos2024</p>
              <a href="http://nvr.nexyos.com:18089/" target="_blank" rel="noopener noreferrer" className="btn btn-primary"
  style={{ margin: '20px 0' }} >Play Online</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

              </div>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="container content-videoser">
                <div className="row">
                  <div className="text-video text-center">
                    <h3>Enhance Your On-Cloud Decision Making</h3>
                    <p>
                      Nexyos IoT Cloud, an application-enabled platform,{" "}
                      integrates unified device management and data-driven
                      <br />
                      analysis. It powers up your applications in the fields of
                      Smart City, Smart Agriculture, Smart Buidlings, and beyond
                      <br />
                      to provide users with maximum flexibility with
                      unparalleled levels of vertical integration with Nexyos
                      <br />
                      LoRaWAN® gateways, sensors and controllers.
                    </p>
                  </div>
                </div>

                <div className="container py-5">
                  <div className="row">
                    {/* Network Camera Card */}

                    <div className="d-flex justify-content-center text-IoT">
                      <div>
                        <img
                          alt="network camera"
                          src="https://www.milesight.com/static/pc/en/online-demo-collection/network-camera.png?t=1744191186348"
                          className="
                          "
                          title="network camera"
                        />
                      </div>
                      <div>
                        <div className="card-body">
                          <h5 className="card-title text-black">Nexyos IoT Cloud</h5>

                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://ipc.nexyos.com:18082/"
                            className="btn"
                             style={{ margin: '20px 0' }}
                           
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 3 && (
            <>
              <div className="content-videoser">
                <div className="text-video text-center">
                  <h3>Extend Your Network Reach of End Devices</h3>
                  <p>
                    Nexyos LoRaWAN® Gateway Online Demo offers more
                    visibility into IoT data practices and increases <br />
                    transparency around your gateway governance and management.
                  </p>
                </div>
                <div className="container py-5">
                  <div className="row">
                    {/* Network Camera Card */}
                    <div className="col-md-6 " style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}} >
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="network camera"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ug63-sg50-online-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="network camera"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body"style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                SG50/UG63 LoRaWAN® Gateway
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://ipc.nexyos.com:18082/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PTZ Camera Card */}
                    <div className="col-lg-6 col-md-6 mb-4" style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="ptz camera"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ug65-lorawan-gateway-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="ptz camera"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body"
                            style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                UG65 Indoor LoRaWAN® Gateway
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://ptz.nexyos.com:18081/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Speed Dome Camera Card */}
                    <div className="col-lg-6 col-md-6 mb-4" style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="speed dome"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ug67-lorawan-gateway-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="speed dome"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body"style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                UG67 Outdoor LoRaWAN® Gateway
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://spd.nexyos.com:18080/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 4 && (
            <>
              <div className="content-videoser">
                <div className="text-video text-center">
                  <h3>Scalable and Centralized Management</h3>
                  <p>
                    Nexyos LoRaWAN® Gateway Online Demo offers more visibility
                    into IoT data practices and increases <br />
                    transparency around your gateway governance and management.
                  </p>
                </div>
                <div className="container py-5">
                  <div className="row">
                    {/* Network Camera Card */}
                 <div className=" col-md-6 " style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="network camera"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ur32-industrial-router-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="network camera"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                UR32L Industrial Cellular Router
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://ipc.nexyos.com:18082/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PTZ Camera Card */}
                 <div className="col-md-6 " style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="ptz camera"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ur35-industrial-router-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="ptz camera"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                UR35 Industrial Cellular Router
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://ptz.nexyos.com:18081/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Speed Dome Camera Card */}
                    <div className=" col-md-6 " style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="speed dome"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/ur75-industrial-router-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="speed dome"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">
                                UR75 Industrial 5G Cellular Router
                              </h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://spd.nexyos.com:18080/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 <div className=" col-md-6 " style={{marginBottom:'10px'}}>
                      <div className="bg-white" style={{borderRadius:'10px'}}>
                        <div className="row g-1">
                          <div className="col-7">
                            <img
                              alt="speed dome"
                              src="https://www.milesight.com/static/pc/en/online-demo-collection/uf51-5g-cpe-demo.png?t=1744191186348"
                              className="img-fluid rounded-start"
                              title="speed dome"
                            />
                          </div>
                          <div className="col-5">
                            <div className="card-body" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100%',
          }}>
                              <h5 className="card-title text-black">UF51 5G CPE</h5>
                              <p className="card-text">
                                User: nexyos
                                <br />
                                Password: nexyos2024
                              </p>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="http://spd.nexyos.com:18080/"
                                className="btn btn-primary"
                                 style={{ margin: '20px 0' }}
                              >
                                Learn More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DemoTabs;
