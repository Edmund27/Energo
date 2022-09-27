import React, { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";

import "./Styles.css";
import "react-datetime/css/react-datetime.css";

function Filters() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="map_filters">
      <Datetime
        dateFormat="DD-MM-YYYY"
        timeFormat="HH:00"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        onClose={() =>
          console.log("This is where I send request to the backend")
        }
        isValidDate={(currentDate, selectedDate) =>
          moment(selectedDate).isAfter(currentDate)
        }
        initialValue={startDate}
      />
    </div>
  );
}

export default Filters;
