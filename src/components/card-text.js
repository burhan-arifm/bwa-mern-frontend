import React from 'react';
import Button from "./button";

export default function CardText(props) {
  return (
    <Button type="link" className="products d-block" href={ `/detail/${props.data._id}` }>
      <div className="badge">
        ${props.data.price}&nbsp;<span>per {props.data.unit}</span>
      </div>
      <img className="product-image" src={ props.data.imageUrl } alt={ props.data.name } />
      <div className="product-name">
        <span className="name">{ props.data.name }</span>
        <span className="location">{ props.data.city }, { props.data.country }</span>
      </div>
    </Button>
  );
}
