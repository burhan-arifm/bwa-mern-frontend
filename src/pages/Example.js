import React, { Component } from "react";
import Breadcrumb from "components/breadcrumb";

export default class Example extends Component {
  breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="container borderize-orange">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
