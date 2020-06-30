import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CardText from "components/card-text";

it('should render card.', () => {
  const {container} = render(
    <Router>
      <CardText data=""></CardText>
    </Router>
  );

  expect(container.querySelector('a.products')).toBeInTheDocument();
  expect(container.querySelector('img.product-image')).toBeInTheDocument();
  expect(container.querySelector('div.product-name')).toBeInTheDocument();
});

it("should show badge with text 'Popular Choice' when it's popular.", () => {
  const {container, getByText} = render(
    <Router>
      <CardText data="" isPopular={ true }></CardText>
    </Router>
  );

  expect(container.querySelector('div.badge')).toBeInTheDocument();
  expect(getByText(/Popular/i)).toBeInTheDocument();
});

