
'use client'

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(20, "day"),
  ]);

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
        minDate={new DateObject()}
      />
    </div>
  );
};

export default DateSearch;
