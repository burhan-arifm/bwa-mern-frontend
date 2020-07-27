import React from "react";
import StarRating from "components/star-rating";
import { render } from "@testing-library/react";

it("should render 5 stars.", () => {
  const value = 3.75;
  const size = 50;
  const { container } = render(<StarRating value={value} size={size} />);

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.getElementsByTagName("svg")).toHaveLength(5);
});

it("should render rating with full stars.", () => {
  const value = 5;
  const size = 50;
  const { container } = render(<StarRating value={value} size={size} />);
  const test = [...container.getElementsByClassName("score")];
  const rating = test.filter((item) => item.getAttribute("offset") === "1");

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.getElementsByTagName("svg")).toHaveLength(5);
  expect(rating).toHaveLength(5);
});

it("should render rating with zero stars.", () => {
  const value = 0;
  const size = 50;
  const { container } = render(<StarRating value={value} size={size} />);
  const test = [...container.getElementsByClassName("score")];
  const rating = test.filter((item) => item.getAttribute("offset") === "1");

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.getElementsByTagName("svg")).toHaveLength(5);
  expect(rating).toHaveLength(0);
});

it("should render rating with 3.75 stars.", () => {
  const value = 3.75;
  const size = 50;
  const { container } = render(<StarRating value={value} size={size} />);
  const test = [...container.getElementsByClassName("score")];
  const fulfilled = test.filter((item) => item.getAttribute("offset") === "1");
  const partial = test.filter(
    (item) => item.getAttributeNode("offset").value < 1
  );
  const empty = test.filter((item) => item.getAttribute("offset") === "0");

  expect(container.querySelector("div.stars")).toBeInTheDocument();
  expect(container.getElementsByTagName("svg")).toHaveLength(5);
  expect(fulfilled).toHaveLength(3);
  expect(Number(partial[0].getAttributeNode("offset").value)).toBe(0.75);
  expect(empty).toHaveLength(1);
});
