import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../style/WhatMatters.css";
import BannerBrand from "../../components/Company/BannerModal";
import SensingProducts from "../../components/Company/Sensing";
import SliderPartner from "../../components/Company/SliderPartner";
import Contact from "../../components/Contact";

const Brand = () => {
  return (
    <>
      <BannerBrand />
      <Container className="center-wrap">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="content-left pe-md-5">
            <h2 className="title mb-4 animate__animated animate__fadeInUp"  data-aos="fade-right">
              What Does "Matter"
              <br />
              Mean to Us?
            </h2>
            <p className="text mb-4 animate__animated animate__fadeInUp">
              In a world where data drives decisions and impacts outcomes, it is
              the unnoticed, "too small," or "too everyday" things that often
              hold the most significant potential. Sensing can be the
              cornerstone of understanding and interacting with our world.
            </p>
            <p className="text animate__animated animate__fadeInUp">
              What matters is not always the same. New technologies will be
              born, new needs will emerge, and new applications will arise. What
              remains unchanged is that Nexyos always{" "}
              <span className="fw-bold">
                focuses on what delivers the most value
              </span>
              , whether it's our products, the data we capture, or the way we
              work with our customers and partners.
            </p>
          </Col>

          {/* Right Content */}
          <Col md={6} className="content-right">
            <Card className="p-4 animate__animated animate__fadeInUp">
              <Card.Body>
                <h4 className="card__title mb-4"  data-aos="fade-right">
                  At Nexyos, everything we do is about{" "}
                  <span className="text-primary">Making Sensing Matter</span> so
                  that:
                </h4>

                <Row className="card__icons g-4">
                  <Col xs={12} md={4} className="card__icon text-center">
                    <img
                      alt="make sensing matter data icon"
                      src="https://www.milesight.com/static/pc/en/company/our-brand-new/make-sensing-matter-data-icon.png"
                      className="img-fluid mb-3"
                      style={{ height: "60px" }}
                    />
                    <p className="icon__text">
                      YOU can capture the most valuable data
                    </p>
                  </Col>

                  <Col xs={12} md={4} className="card__icon text-center" >
                    <img
                      alt="make sensing matter connect icon"
                      src="https://www.milesight.com/static/pc/en/company/our-brand-new/make-sensing-matter-connect-icon.png"
                      className="img-fluid mb-3"
                      style={{ height: "60px" }}
                    />
                    <p className="icon__text">
                      YOU can create meaningful connections with your
                      surroundings
                    </p>
                  </Col>

                  <Col xs={12} md={4} className="card__icon text-center">
                    <img
                      alt="make sensing matter impact icon"
                      src="https://www.milesight.com/static/pc/en/company/our-brand-new/make-sensing-matter-impact-icon.png"
                      className="img-fluid mb-3"
                      style={{ height: "60px" }}
                    />
                    <p className="icon__text">
                      YOU have the right product and technology for specific
                      needs
                    </p>
                  </Col>
                </Row>

                <p className="card__text mt-4">
                  To make sensing truly work across challenges, applications,
                  and industries, that's what "matter" means to us.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <SensingProducts />
      <SliderPartner />
      <Contact />
    </>
  );
};

export default Brand;
