import React from "react";

export default function DetailImages({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "rowline-1" : "rowline-2"
              }`}
            >
              <div className="card products h-100">
                <figure>
                  <img
                    src={item.url}
                    alt={item._id}
                    className="product-image"
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
