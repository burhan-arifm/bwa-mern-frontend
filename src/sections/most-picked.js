import React from 'react';
import CardText from "components/card-text";

export default function MostPicked({ data, reference }) {
  return (
    <section className="container" ref={reference}>
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid">
        {
          data.map( (item, index) => 
            <div key={ `mostpicked-${index}` } className={`item column-4 rowline-${ index === 0 ? "2" : "1" }`}>
              <CardText data={ item } mostPicked />
            </div>
          )
        }
      </div>
    </section>
  )
}
