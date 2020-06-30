import React, { Component } from 'react';
import HomeData from "json/home";
import Header from "sections/header";
import Hero from "sections/hero";
import MostPicked from "sections/most-picked";
import Categories from "sections/categories";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={HomeData.hero} reference={this.refMostPicked} />
        <MostPicked data={HomeData.mostPicked} reference={this.refMostPicked} />
        <Categories data={HomeData.categories} />
      </>
    )
  }
};
