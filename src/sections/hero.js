import React from 'react';
import Button from 'components/button';
import IconTraveler from "images/ic_traveler.svg";
import IconCities from "images/ic_cities.svg";
import IconTreasure from "images/ic_treasure.svg";
import ImageHero from "images/img-hero.jpg";
import IconCounter from "components/icon-with-counter";

export default function Hero({ data, reference }) {
  function showMostPicked() {
    window.scrollTo({
      top: reference.current.offsetTop - 30,
      behavior: "smooth"
    });
  }

  return (
    <section className="container">
      <div className="row align-items-center justify-content-center">
        <div id="hero-texts" className="col-6 pr-5">
          <h1 className="font-weight-bold text-blue-zodiac mb-2 text-blue-zodiac">
            Forget Busy Work,<br/>Start Next Vacation
          </h1>
          <p className="mb-4 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show Me Now
          </Button>
          <div className="counter row">
            <IconCounter icon={ IconTraveler } iconName="Travelers" count={ data.travelers } size={ 36 } />
            <IconCounter icon={ IconTreasure } iconName="Treasures" count={ data.treasures } size={ 36 } />
            <IconCounter icon={ IconCities } iconName="Cities" count={ data.cities } size={ 36 } />
          </div>
        </div>
        <div id="hero-banner" className="col-6 pl-5">
          <div className="image-hero-container">
            <div id="image-hero" style={{ backgroundImage: `url(${ImageHero})` }}></div>
            <div id="image-hero-frame"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
