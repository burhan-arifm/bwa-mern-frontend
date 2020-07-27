import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from "components/button";

it('should not allowed click button if isDisabled is present.', () => {
  const {container} = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

it('should render loading or spinner.', () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

it('should render <a> tag.', () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});

it('should render <Link> tag.', () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});



