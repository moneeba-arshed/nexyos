// components/BlogCard.js
import React from "react";
import styles from "../../style/BlogCard.module.css";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
<div
  className={`card ${styles.blogCard}`}
  style={{ width: "100%", height: "550px", display: "flex", flexDirection: "column" }}
>
  <img
    src={blog.image}
    className={`card-img-top ${styles.blogImage}`}
    alt={blog.title}
    style={{ height: "200px", objectFit: "cover", width: "100%" }}
  />
  <div
    className="card-body"
    style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
  >
    <div className={styles.categoryBadges}>
      {blog.categories.map((category, index) => (
        <span key={index} className={`badge ${styles.categoryBadge}`}>
          {category}
        </span>
      ))}
    </div>
    <h5 className={`card-title ${styles.blogTitle}`}>{blog.title}</h5>
    <p className={`card-text ${styles.blogExcerpt}`}>{blog.excerpt}</p>
    <div className={styles.blogMeta} style={{ marginTop: "auto" }}>
      <span className={styles.blogDate}>{blog.date}</span>
      <Link to={`/blog/${blog.id}`} className={`btn ${styles.readMoreBtn}`}>
        Read More
      </Link>
    </div>
  </div>
</div>


  );
};

export default BlogCard;
