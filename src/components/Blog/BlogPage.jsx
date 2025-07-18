// pages/BlogPage.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";
import CategoryTabs from "./CategoryTabs";
import SearchBar from "./SearchBar";
import styles from "../../style/BlogPage.module.css";
import BannerBlog from "../Company/BannerBlog";

const BlogPage = () => {
  // Sample blog data
  const blogsData = [
    {
      id: 1,
      title:
        "Cracking the Congestion Code: Why Precision ANPR is Critical to the Cities of Tomorrow",
      excerpt:
        "Discover how high-accuracy ANPR systems are revolutionizing smart city mobility – reducing urban...",
      date: "April 29, 2025",
      categories: ["Solution"],
      image:  "https://www.milesight.com/static/pc/en/company/blog/2025/iot-gateway-lns/milesight-lorawan-gateway-lorawan-network-server.jpg?t=1740623000739",
    },
    {
      id: 2,
      title:
        "ANPR Illumination: How to Choose the Right Lighting Solution for Optimal Performance",
      excerpt:
        "Explore the best ANPR lighting solutions for reliable license plate recognition. Discover Nexyos Intelligent...",
      date: "April 28, 2025",
      categories: ["Innovation", "Solution"],
      image: "https://www.milesight.com/static/1-654x327.jpg?t=1746697199711",
    },
    {
      id: 3,
      title:
        "2025 Ultimate Guide to LPR Technology: How License Plate Recognition Transforms Traffic...",
      excerpt:
        "Gain a comprehensive understanding of LPR technology: you will know how the advanced LPR cameras overcome.",
      date: "April 25, 2025",
      categories: ["Innovation"],
      image:
        "https://www.milesight.com/static/pc/en/company/blog/2025/lpr-technology/thumbnail.jpg?t=1745574951651",
    },
    {
      id: 4,
      title: "A Comprehensive Guide to People Counting Technology",
      excerpt:
        "Discover the various people counting technologies, including AI-based, Time-of-Flight (ToF), Passive...",
      date: "March 10, 2025",
      categories: ["Innovation"],
      image:
        "https://www.milesight.com/static/pc/en/company/blog/2025/seo-vs-people-counting-tech/blog.jpg?t=1741598580186",
    },
    {
      id: 5,
      title:
        "Utilizing IoT Solutions to Boost Operations and Energy Efficiency Across Industries in Spain",
      excerpt:
        "Monolitic is our experienced partner who has successfully grounded educational and practical...",
      date: "March 7, 2025",
      categories: ["Campaign"],
      image:
        "https://www.milesight.com/static/pc/en/company/blog/2025/monolitic/iot-monolitic-spain-partner.jpg?t=1741315969140",
    },
    {
      id: 6,
      title:
        "Nexyos LoRaWAN® Gateways Integrated with Popular LoRaWAN® Network Servers",
      excerpt:
        "Nexyos LoRaWAN gateways are compatible with a wide range of mainstream LoRaWAN Network Servers...",
      date: "February 27, 2025",
      categories: ["Product"],
      image:
        "https://www.milesight.com/static/pc/en/company/blog/2025/iot-gateway-lns/milesight-lorawan-gateway-lorawan-network-server.jpg?t=1740623000739",
    },
  ];

  const categories = ["Product", "Solution", "Innovation", "Campaign"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      activeCategory === "All" || blog.categories.includes(activeCategory);
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <BannerBlog />
      <Container className={styles.blogPage}>
        <Row className="mb-4">
          <Col md={8}>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </Col>
          <Col md={4}>
            <SearchBar onSearch={setSearchTerm} />
          </Col>
        </Row>

        <Row>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Col
                key={blog.id}
                xs={12}
                sm={6}
                lg={4}
                className={styles.blogcols}
              >
                <BlogCard blog={blog} />
              </Col>
            ))
          ) : (
            <Col className="text-center py-5">
              <h4  data-aos="fade-right">No blogs found matching your criteria</h4>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
};

export default BlogPage;
