import React from 'react';
import CardText from 'components/card-text';

export default function Categories({ data }) {
  return data.map( (category, index1) => category.items.length !== 0
    ? <section className="container" key={ `category-${index1}` }>
        <h4 className="mb-3">{ category.name }</h4>
        <div className={category.items.length !== 0 ? "container-grid" : "container d-flex"}>
          {
            category.items.map((item, index2) => {
              return (
                <div className="item column-3 rowline-1" key={ `category-item-${index2}` }>
                  <CardText data={ item } isPopular={ item.isPopular } />
                </div>
              );
            })
          }
        </div>
      </section>
    : ""
  );
}
