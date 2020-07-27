import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NumberInput from "components/form/number-input";

class TestInput extends React.Component {
  state = { value: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <NumberInput
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
  const input = container.querySelector(`input.form-control[name='value']`);

  return { input };
};

it("should be able to change value.", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

it("should not be able to change the value when it reaches max value.", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
