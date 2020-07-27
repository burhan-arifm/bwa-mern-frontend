import React from "react";
import ReactHtmlParser from "react-html-parser";
import IconWithCounter from "components/icon-with-counter";

export default function DetailDescription({ data }) {
  return (
    <main className="description">
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row features">
        {data.features.map((feature, index) => {
          return (
            <div key={`feature-${index}`} className="col-3 feature-item">
              <IconWithCounter
                icon={feature.imageUrl}
                iconName={feature.name}
                count={feature.qty}
                size={36}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
