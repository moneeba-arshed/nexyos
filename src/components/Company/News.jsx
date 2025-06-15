import React, { useState } from "react";
import styles from "./NewsPage.module.css";
import BannerNews from "./BannerNews";

const newsData = [
  {
    title: "Nexyos x Arteco: Taking Smart Surveillance to the Next Level",
    description:
      "Enhanced collaboration strengthens the integration between Nexyos AI-powered cameras and Arteco’s uSee cloud.",
    date: "2025/04/30",
    image:
      "https://www.milesight.com/static/milesight-arteco-banner.jpg?t=1745910206310",
    year: 2025,
  },
  {
    title:
      "ISC West 2025 Spotlight: Nexyos Showcases Edge AI and Ecosystem Innovation",
    description:
      "Focused innovations demonstrating real-world impact of latest technologies.",
    date: "2025/04/25",
    image:
      "https://www.milesight.com/static/milesight-team-photo.jpg?t=1745393425905",
    year: 2025,
  },
  {
    title: "Nexyos and DIGIEVER Partnership for Smart Integration",
    description:
      "Nexyos and DIGIEVER team up for powerful NVR solutions integrated with AI camera intelligence.",
    date: "2025/04/15",
    image:
      "https://www.milesight.com/static/milesight-digiever-banner.jpg?t=1745390065590",
    year: 2024,
  },
  {
    title: "AI Innovation Group Strengthens Security Collaboration",
    description:
      "Exploring new synergies in AI camera development and data processing.",
    date: "2025/03/12",
    image:
      "https://www.milesight.com/static/a1-innovation-group.jpg?t=1745380522390",
    year: 2024,
  },
  {
    title: "Nexyos Welcomes New Partner Bao123Cai",
    description:
      "Expanding regional collaboration to boost AI adoption across industries.",
    date: "2025/02/18",
    image: "https://www.milesight.com/static/bao123cai.jpg?t=1743404739964",
    year: 2023,
  },
  {
    title: "TC Groups Joins Forces with Nexyos",
    description:
      "Together to deliver cutting-edge surveillance to Southeast Asia.",
    date: "2025/02/05",
    image:
      "https://www.milesight.com/static/tc-groups-solutions-partnership.jpg?t=1743126570503",
    year: 2022,
  },
  {
    title: "Nexyos Launches AI Traffic Monitoring System",
    description: "AI-powered traffic systems help optimize urban mobility.",
    date: "2024/12/10",
    image:
      "https://www.milesight.com/static/milesight-arteco-banner.jpg?t=1745910206310",
    year: 2022,
  },
  {
    title: "Nexyos Brings Edge AI to Retail Surveillance",
    description:
      "Retailers leverage facial recognition and heatmaps for better insights.",
    date: "2024/11/08",
    image:
      "https://www.milesight.com/static/milesight-team-photo.jpg?t=1745393425905",
    year: 2021,
  },
  {
    title: "AI Surveillance Trends in 2024",
    description: "Exploring industry shifts and where Nexyos fits in.",
    date: "2024/08/14",
    image:
      "https://www.milesight.com/static/milesight-team-photo.jpg?t=1745393425905",
    year: 2021,
  },
  {
    title: "Nexyos Education: Empowering Through Training",
    description: "Train-the-trainer sessions for partners around the world.",
    date: "2024/07/22",
    image:
      "https://www.milesight.com/static/milesight-team-photo.jpg?t=1745393425905",
    year: 2021,
  },
];

const years = ["All", "2025", "2024", "2023", "2022", "2021"];

const NewsPage = () => {
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter((item) => {
    const matchesYear =
      selectedYear === "All" || item.year === Number(selectedYear);
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesSearch;
  });

  return (
    <>
      <BannerNews />
      <div className={styles.newsContainer}>
        <div className={styles.filters}>
          <div className={styles.years}>
            {years.map((year) => (
              <button
                key={year}
                className={`${styles.yearBtn} ${
                  selectedYear === year ? styles.active : ""
                }`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.newsList}>
          {filteredNews.map((item, idx) => (
            <div key={idx} className={styles.newsCard}>
              <img src={item.image} alt="news" className={styles.newsImage} />
              <div className={styles.newsContent}>
                <div className={styles.newsTitle}>{item.title}</div>
                <div className={styles.newsDate}>{item.date}</div>
                <div className={styles.newsDescription}>{item.description}</div>
              </div>
            </div>
          ))}
          {filteredNews.length === 0 && (
            <p className={styles.noResults}>No news found for this filter.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
