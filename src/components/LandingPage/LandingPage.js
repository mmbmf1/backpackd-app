import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="LandingPage_wrapper">
      <section className="section-one">
        <div className="section-one-box">
          <h3>a better way to backpack</h3>
          {/* <p>
            backpackd helps you optimize your backpack by tracking the weight of
            all your items
          </p> */}
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
          <br />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
