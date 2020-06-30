import React from 'react';
import Button from "./button";
import propTypes from 'prop-types';

export default function CardText({ data, mostPicked, isPopular }) {
  return (
    <Button type="link" className={`products${mostPicked ? " most-picked " : " "}d-block`} href={ `/detail/${data._id}` }>
      {
        mostPicked || isPopular
          ? mostPicked
            ? <div className="badge">
                ${data.price}&nbsp;<span>per {data.unit}</span>
              </div>
            : <div className="badge">
                Popular&nbsp;<span>Choice</span>
              </div>
          : ""
      }
      <figure>
        <img className="product-image" src={ data.imageUrl } alt={ data.name } />
      </figure>
      <div className="product-name">
        <span className="name">{ data.name }</span>
        <span className="location">{ data.city }, { data.country }</span>
      </div>
    </Button>
  );
}

CardText.propTypes = {
  mostPicked: propTypes.bool,
  isPopular: propTypes.bool
}