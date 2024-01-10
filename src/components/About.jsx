import React from "react";

const About = () => {
  return (
    <>
      <div id="our-product" className="about-wrapper">
        <div className="about-container">
          <h1 className="about-heading">About Our Product</h1>
          <div className="about-para-container">
            <p className="about-para">
              Our solution uniquely brings together core applications and intuitive UI features optimized for Risk mitigation and Collections on a single data-driven platform
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card card1">
              <h3>Monitor Risks and Run Diagnostics for targeted Risk Mitigation</h3>
              {/* <h3>Monitors risks & runs</h3>
              <h3>diagnostics in near-real time</h3>
              <p>
                Our platform monitors risks and conducts near-real-time
                diagnostics, providing timely insights for informed
                decision-making in lending operations.
              </p> */}
            </div>
            <div className="about-card card2">
              <h3>Optimize Strategies with precision, control and speed of deployment</h3>
              {/* <p>
                Our platform optimizes strategies, reducing deployment time, and
                enabling agile decision-making to enhance performance and
                efficiency in lending operations.
              </p> */}
            </div>
            <div className="about-card card3">
              <h3>Automates execution and monitors compliance for comprehensive solutions</h3>
              {/* <p>
                Our platform automates execution, ensuring efficient operations,
                while also monitoring compliance to industry standards,
                providing a comprehensive solution for lending institutions.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
