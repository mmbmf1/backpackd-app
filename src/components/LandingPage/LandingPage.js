import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapSigns,
  faWeight,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function LandingPage() {
  return (
    <div className="LandingPage_wrapper">
      <section className="section-one">
        <div className="section-one-box">
          <h3>a better way to backpack</h3>
          <div id="container">
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <Link className="button-text" to={"/backpacks"}>
                Explore
              </Link>
            </button>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="info_card_container">
          <div className="info_heading"></div>
          <div className="section-two-box">
            <div className="info_card">
              <FontAwesomeIcon icon={faWeight} />
              <div className="info_card_text">
                <h3>Understand Backpack Weight</h3>
                <p>See which items weigh you down</p>
              </div>
            </div>
            <div className="info_card">
              <FontAwesomeIcon icon={faQuestion} />
              <div className="info_card_text">
                <h3>Remove Unncessary Weight</h3>
                <p>Easily compare items between backpacks</p>
              </div>
            </div>
            <div className="info_card">
              <FontAwesomeIcon icon={faMapSigns} />
              <div className="info_card_text">
                <h3>Save and Edit Backpacks</h3>
                <p>Optimize backpack weight quickly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="footer_text"> */}
      {/* <p>Created by Michael Mace</p> */}
      <div className="footer_brands">
        {/* <a href="https://github.com/mmbmf1">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/michael-mace-kc/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
