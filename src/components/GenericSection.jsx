import React, { useState } from "react";

const GenericSection = ({
  id,
  sectionTitle,
  sectionSubtitle,
  sectionDescription,
  tabsData = [],
  activeTabDefault,
  backgroundOverlay = true,
  successStories = [],
  gridItems = [],
  type = "tabs", // tabs | grid | custom
}) => {
  const [activeTab, setActiveTab] = useState(activeTabDefault || (tabsData[0]?.id || ""));

  return (
    <section id={id} className="max-w-7xl mx-auto px-20 py-12">
      {/* Title */}
      {sectionTitle && (
        <h2 className="text-4xl font-bold text-center mb-4">{sectionTitle}</h2>
      )}

      {/* Subtitle & Description */}
      {(sectionSubtitle || sectionDescription) && (
        <div className="ps-16 py-12">
          {sectionSubtitle && (
            <p className="text-left text-lg text-black mb-6">{sectionSubtitle}</p>
          )}
          {sectionDescription && (
            <p className="text-left text-black">{sectionDescription}</p>
          )}
        </div>
      )}

      {/* Tabs */}
      {type === "tabs" && tabsData.length > 0 && (
        <>
          <div className="overflow-x-auto">
            <div className="flex space-x-6 min-w-max px-2 border-b border-gray-300 justify-center">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-10 text-base font-medium transition-all duration-300 ${
                    activeTab === tab.id ? "bg-red-500 text-white rounded-t-lg" : "text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="relative mt-10 h-[400px] w-full rounded-xl overflow-hidden">
            {tabsData
              .filter((tab) => tab.id === activeTab)
              .map((tab) => (
                <div key={tab.id} className="relative h-full w-full">
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {backgroundOverlay && (
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center ps-20">
                      <h3 className="text-white text-4xl font-bold mb-4">{tab.label}</h3>
                      {tab.subtitle && (
                        <p className="text-white text-lg mb-6">{tab.subtitle}</p>
                      )}
                      {tab.buttons?.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                          {tab.buttons.map((btn, idx) => (
                            <button
                              key={idx}
                              className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
                            >
                              {btn}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </>
      )}

      {/* Grid Items */}
      {type === "grid" && gridItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {gridItems.map((item, index) => (
            <div key={index} className="text-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-52 object-cover transition-transform hover:scale-110"
              />
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Success Stories */}
      {successStories.length > 0 && (
        <div className="py-12">
          <h2 className="text-2xl font-bold mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-bold text-lg mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GenericSection;
