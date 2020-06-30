import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardText from "components/card-text";

it('should render card', () => {
  const {container} = render(
    <Router>
      <CardText data=""></CardText>
    </Router>
  );

  expect(container.querySelector('a.products')).toBeInTheDocument();
  expect(container.querySelector('img.product-image')).toBeInTheDocument();
  expect(container.querySelector('div.product-name')).toBeInTheDocument();
});

test("should show badge when it's special", () => {
  const {container} = render(
    <Router>
      <CardText data=""></CardText>
    </Router>
  );

  expect(container.querySelector('div.badge')).toBeInTheDocument();
});

