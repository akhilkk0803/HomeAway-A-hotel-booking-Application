import React, { useEffect, useState } from "react";
import { url } from "../url";
import Price from "../util/Price";
import CircularProgress from "@mui/material/CircularProgress";

import PaymentIcon from "@mui/icons-material/Payment";
import { NavLink } from "react-router-dom";
import BookingDates from "./BookingDates";
const Bookings = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log("first");
    fetch(url + "/account/bookings", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setdata(data);
      });
  }, []);
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div className="flex flex-col gap-3">
      {" "}
      {data.length === 0 && <p className="font-2xl"> No bookings made yet</p>}
      {data.length > 0 &&
        data.map((el) => (
          <NavLink to={`${el._id}`}>
            <div
              key={el._id}
              className="cursor-pointer bg-gray-200 flex flex-col sm:flex-row gap-2 rounded-2xl overflow-hidden"
            >
              <div>
                <img
                  className="aspect-square w-full sm:w-72"
                  src={url + "/uploads/" + el.place.photos[0]}
                  alt="Image"
                />
              </div>
              <div className="p-5 flex flex-col gap-1 grow">
                <div className="mb-2 border-b-2 border-gray-300 p-2">
                  <h3 className="font-semibold text-xl"> {el.place.title}</h3>
                </div>

                <BookingDates el={el} />
                <div className="flex text-xl gap-1 items-center p-3  ">
                  <PaymentIcon sx={{}} />
                  <p> Total Price:</p>
                  <p>{<Price price={el.price} />}</p>
                </div>
              </div>
            </div>{" "}
          </NavLink>
        ))}{" "}
    </div>
  );
};

export default Bookings;
