import React, { Component } from "react";
import Header from "sections/header";
import { Title, Images, Description, BookingForm } from "sections/detail";
import Categories from "sections/categories";
import Testimonials from "sections/testimonials";
import Footer from "sections/footer";
import ItemDetails from "json/itemDetails.json";

export default class Detail extends Component {
  componentDidMount() {
    window.title = "Detail | Staycation";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <Title breadcrumb={breadcrumb} data={ItemDetails} />
        <Images data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={ItemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimonials data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
