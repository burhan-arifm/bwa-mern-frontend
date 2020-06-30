import React from 'react';
import Button from 'components/button';
import IconTraveler from "images/ic_traveler.svg";
import IconCities from "images/ic_cities.svg";
import IconTreasure from "images/ic_treasure.svg";
import ImageHero from "images/img-hero.jpg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.reference.current.offsetTop - 30,
      behavior: "smooth"
    });
  }

  function numberFormat(number) {
    const formatNumbering = new Intl.NumberFormat("id-ID");

    return formatNumbering.format(number);
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
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
            <div className="col-auto">
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`}/>
              <h6 className="mt-2">
                {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`}/>
              <h6 className="mt-2">
                {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
              </h6>
            </div>
            <div className="col-auto">
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`}/>
              <h6 className="mt-2">
                {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
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
