import React from 'react';
import propTypes from 'prop-types';

export default function IconWithCounter({ icon, iconName, count, size}) {
  function numberFormat(number) {
    const formatNumbering = new Intl.NumberFormat("id-ID");

    return formatNumbering.format(number);
  }

  return (
    <div className="icon-with-counter col-auto">
      <img width={ size } height={ size } src={ icon } alt={`${ Number(count) } Travelers`}/>
      <h6 className="mt-2">
        { numberFormat(Number(count)) } <span className="text-gray-500 font-weight-light">{ iconName }</span>
      </h6>
    </div>
  )
}

IconWithCounter.propTypes = {
  icon: propTypes.string,
  iconName: propTypes.string,
  count: propTypes.string,
  size: propTypes.number
}