import React from 'react';
import StarRating from 'components/star-rating';
import Button from 'components/button';


export default function Testimonials({ data }) {
  return (
    <section id="testimonial" className="container">
      <div className="row align-items-center">
        <div className="col-5 justify-content-center">
          <div className="image-container">
            <img src={ data.imageUrl } alt={ data.familyName } className="testimonial-image"/>
            <div className="image-frame"></div>
          </div>
        </div>
        <div className="col-6 review-container">
          <h4 className="mb-5">{ data.name }</h4>
          <StarRating value={ data.rate } size={30} />
          <h3 className="review">{ data.content }</h3>
          <h6 className="reviewer">{ data.familyName }, { data.familyOccupation }</h6>

          <Button className="btn px-5" hasShadow isPrimary>
            Read Their Story
          </Button>
        </div>
      </div>
    </section>
  )
}
