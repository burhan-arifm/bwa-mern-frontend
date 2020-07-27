import React, { Component } from 'react';
import Header from "sections/header";
import Categories from "sections/categories";
import Testimonials from 'sections/testimonials';
import Footer from 'sections/footer';

export default class Detail extends Component {
  render() {
    return (
      <>
        <Header { ...this.props } />
        
        <Categories data="" />
        <Testimonials data="" />
        <Footer />
      </>
    )
  }
}
