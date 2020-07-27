import React, { useState, useRef, useEffect } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";
import formatDate from "utils/formatDate";

export default function DateInput(props) {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);
  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    };

    props.onChange(target);
  };
  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) setIsShowed(false);
  };
  const check = (focus) => focus.indexOf(1) < 0 && setIsShowed(false);
  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-blue-zodiac">
          <span className="input-group-text">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 3H3C1.89543 3 1 3.89543 1 5V21C1 22.1046 1.89543 23 3 23H22C23.1046 23 24 22.1046 24 21V5C24 3.89543 23.1046 3 22 3Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M9 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 5.44772 18 6 18H9C9.55228 18 10 17.5523 10 17V14C10 13.4477 9.55228 13 9 13Z"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M19 13H16C15.4477 13 15 13.4477 15 14V17C15 17.5523 15.4477 18 16 18H19C19.5523 18 20 17.5523 20 17V14C20 13.4477 19.5523 13 19 13Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M1 8H24" stroke="white" strokeWidth="2" />
              <path
                d="M5 1V5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M20 1V5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          readOnly
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDataInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

DateInput.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
