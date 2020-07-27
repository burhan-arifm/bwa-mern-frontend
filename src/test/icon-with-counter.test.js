import React from 'react';
import { render } from '@testing-library/react';
import IconCounter from "components/icon-with-counter";

it('should render icon with counter.', () => {
  const data = {
    "_id": "asd1293uasdads1",
    "qty": "2",
    "name": "refrigerator",
    "imageUrl": "/images/icon-refrigerator.svg"
  };
  const { container } = render(
    <IconCounter icon={ data.imageUrl } iconName={ data.name } count={ data.qty } size={ 36 } />
  );

  expect(container.querySelector("div.icon-with-counter")).toBeInTheDocument();
});
