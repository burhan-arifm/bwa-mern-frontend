import React, { Component } from "react";
import propTypes from "prop-types";
import { NumberInput, DateInput } from "components/form";
import Button from "components/button";

export default class DetailBookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const duration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: duration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  // startBook = () => {
  //   const { data } = this.state;
  //   this.props.startBook({
  //     _id: this.props.itemDetails._id,
  //     duration: data.duration,
  //     date: {
  //       startDate: data.date.startDate,
  //       endDate: data.date.endDate,
  //     },
  //   });
  //   this.props.history.push("/checkout");
  // };

  render() {
    const { data } = this.state;
    const { itemDetails, startBook } = this.props;

    return (
      <div className="card booking-form">
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-price mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}.
          </span>
        </h5>
        <label htmlFor="duration">How long will you stay?</label>
        <NumberInput
          max={30}
          suffix={` ${itemDetails.unit}`}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="date">Pick the dates</label>
        <DateInput onChange={this.updateData} name="date" value={data.date} />
        <h6 className="text-gray-500 font-weight-light text-total">
          You will pay{" "}
          <span className="text-secondary font-weight-bold">
            USD{itemDetails.price * data.duration}
          </span>{" "}
          for{" "}
          <span className="text-secondary font-weight-bold">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>
        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBook}
        >
          Continue to book
        </Button>
      </div>
    );
  }
}

DetailBookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBook: propTypes.func,
};
