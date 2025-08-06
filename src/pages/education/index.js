import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { education, meta } from "../../content_option";
import "./style.css";
const Education = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Éducation | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row>
          <Col lg="8">
            <h1 className="mb-5 mt-3 pt-md-3">Mon Parcours Éducatif</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <p className="text-center mb-1">
              Mon parcours académique et mes formations qui ont façonné mes
              compétences
            </p>
          </Col>
        </Row>
        <Row className="sec_sp">
          {education.map((edu, index) => (
            <Col key={index} lg="6" md="6" sm="12" className="mb-4">
              <div className="education-card">
                <div className="education-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="education-content">
                  <h3>{edu.degree}</h3>
                  <div className="education-meta">
                    <a href={edu.link} target="_self" rel="noopener noreferrer">
                      <span className="institution">
                        <i className="fas fa-university"></i>
                        {edu.institution}
                      </span>
                    </a>
                    <span className="date">
                      <i className="fas fa-calendar"></i>
                      {edu.date}
                    </span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <div className="education-footer">
              <p>
                Formation continue et développement de compétences pour exceller
                dans le domaine de l'informatique
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
export default Education;
