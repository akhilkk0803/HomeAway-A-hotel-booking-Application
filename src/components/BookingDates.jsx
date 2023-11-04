import React from "react";
import { format, differenceInCalendarDays } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const BookingDates = ({el}) => {
  return (
    <div className="flex gap-2 flex-col items-start text-xl md:flex-row text-gray-900 p-3">
      <div className="flex md:border-r-2  border-gray-500 ">
        <p> Nights:</p>
        <p className="font-semibold mr-2">
          {" "}
          {differenceInCalendarDays(
            new Date(el.checkOut),
            new Date(el.checkIn)
          )}
        </p>
      </div>
      <div className="md:border-r-2   border-gray-500 flex items-center justify-center  ">
        {" "}
        <CalendarMonthIcon
          sx={{
            fontSize: "17px",
            marginRight: "7px",
          }}
        />
        {format(new Date(el.checkIn), "dd-MM-yyyy")}
        &rarr;{" "}
        <CalendarMonthIcon
          sx={{
            fontSize: "17px",
            marginRight: "7px",
          }}
        />
        <p className="mr-2">{format(new Date(el.checkOut), "dd-MM-yyyy")} </p>
      </div>
      <div className="flex">
        <p>No of Guests:</p>
        <p className="font-semibold">{el.guests}</p>
      </div>
    </div>
  );
};

export default BookingDates;
