import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DateInput from "components/form/date-input";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <DateInput
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector(`.input-date`);
  const input = container.querySelector(`input.form-control`);

  return { container, wrapper, input };
};

it("should have wrapper with className '.form-control'.", () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

it("should have tag <input> and has className '.form-control'.", () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

it("should show date picker when input field clicked.", () => {
  const { container, input } = setup();

  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(`.date-range-wrapper`);

  expect(datePickerWrapper).toBeInTheDocument();
});
