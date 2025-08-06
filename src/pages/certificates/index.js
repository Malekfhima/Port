import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { certificates, meta } from "../../content_option";
import "./style.css";
const Certificates = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Certifications | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Mes Certifications</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <p className="text-center mb-5">
              Formations et certifications professionnelles qui attestent de mes
              compétences
            </p>
          </Col>
        </Row>
        <Row className="sec_sp">
          {certificates.map((cert, index) => (
            <Col key={index} lg="8" md="10" sm="12" className="mx-auto">
              <div className="certificate-card">
                <div className="certificate-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <div className="certificate-meta">
                    <span className="issuer">
                      <i className="fas fa-building"></i>
                      {cert.issuer}
                    </span>
                    <span className="date">
                      <i className="fas fa-calendar"></i>
                      {cert.date}
                    </span>
                  </div>
                  <p>{cert.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="sec_sp">
          <Col lg="12"></Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
export default Certificates;
