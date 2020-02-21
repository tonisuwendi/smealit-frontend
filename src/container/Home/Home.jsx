import React, { Component, Fragment } from "react";
import Navbar from "../../component/Navbar/Navbar";
import "./Home.css";
import SideLeft from "../../component/SideLeft/SideLeft";
import HomeCore from "../../component/HomeCore/HomeCore";
import SideRight from "../../component/SideRight/SideRight";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <SideLeft />
          <HomeCore />
          <SideRight />
        </div>
      </Fragment>
    );
  }
}

export default Home;
