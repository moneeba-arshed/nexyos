import React, { useRef, useState, useEffect } from "react";
import TypicalApplications from "./TypicalApplications";

const FeatureTiles = () => {
  const overviewRef = useRef(null);
  const applicationRef = useRef(null);
  const highlightRef = useRef(null);
  const benefitRef = useRef(null);
  const productsRef = useRef(null);
  const successRef = useRef(null);
  const sensingRef = useRef(null);

  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { name: "Space Occupancy", key: "overview", ref: overviewRef },
    { name: "Typical Application", key: "application", ref: applicationRef },
    { name: "Highlight", key: "highlight", ref: highlightRef },
    { name: "Benefit", key: "benefit", ref: benefitRef },
    { name: "Products", key: "products", ref: productsRef },
    { name: "Success Story", key: "success", ref: successRef },
    { name: "People Sensing", key: "sensing", ref: sensingRef },
  ];

  const scrollToSection = (ref, tabName) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveTab(tabName); // for instant highlight on click
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // triggers when section is centered
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting);

      if (visibleSection) {
        const matchedTab = tabs.find(tab => tab.ref.current === visibleSection.target);
        if (matchedTab) {
          setActiveTab(matchedTab.key);
        }
      }

      // when scrolled above all
      const allAbove = entries.every((entry) => entry.boundingClientRect.top > 0);
      if (allAbove) {
        setActiveTab("");
      }
    }, options);

    tabs.forEach((tab) => {
      if (tab.ref.current) {
        observer.observe(tab.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Sticky Navigation */}
      <div className="Featuresnavlink bg-white flex flex-wrap  shadow-sm text-sm font-medium ">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`featurestab md:px-12 ${
              activeTab === tab.key ? "bg-[#00667C] text-white" : "text-black"
            }`}
          >
            <button
              onClick={() => scrollToSection(tab.ref, tab.key)}
              className="md:px-12 my-6 featuresbutton"
            >
              {tab.name}
            </button>
          </div>
        ))}
        
      </div>

      {/* Sections */}
      <section ref={overviewRef} className="text-center px-6 py-16 mt-36">
        <h1 className="text-3xl md:text-4xl font-bold mb-18"  data-aos="fade-right">
          Monitoring Meeting Room, Desk, and Other Workspace Occupancy
        </h1>
        <p className="max-w-4xl text-xs mx-auto text-gray-700 mb-4">
          Space occupancy measures how many people use a given area—a key priority for facility managers...
        </p>
        <p className="max-w-4xl text-xs mx-auto text-gray-700">
          Milesight provides IoT-enabled devices deployed in conference rooms...
        </p>
        <div className="mt-12 flex justify-center">
          <img
            src="http://milesight.com/static/pc/en/solution/smart-space-occupancy/space-occupancy-solution-topology.png?t=1752224588823"
            alt="Space Occupancy Diagram"
            className="max-w-5xl w-full rounded-md shadow-md"
          />
        </div>
      </section>

      <TypicalApplications ref={applicationRef} />
      <section ref={highlightRef} className="py-24 text-center text-xl font-semibold text-gray-600">Highlight Section</section>
      <section ref={benefitRef} className="py-24 bg-gray-50 text-center text-xl font-semibold text-gray-600">Benefit Section</section>
      <section ref={productsRef} className="py-24 text-center text-xl font-semibold text-gray-600">Products Section</section>
      <section ref={successRef} className="py-24 bg-gray-50 text-center text-xl font-semibold text-gray-600">Success Story Section</section>
      <section ref={sensingRef} className="py-24 text-center text-xl font-semibold text-gray-600">People Sensing Section</section>
    </div>
  );
};

export default FeatureTiles;
