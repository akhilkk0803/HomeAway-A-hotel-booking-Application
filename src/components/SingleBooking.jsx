import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../url";
import CircularProgress from "@mui/material/CircularProgress";
import SinglePlaceImage from "./SinglePlaceImage";
import AllPhotos from "./AllPhotos";
import Address from "./Address";
import { format, differenceInCalendarDays } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookingDates from "./BookingDates";
import Price from "../util/Price";
const SingleBooking = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [allPhotos, setallPhotos] = useState(false);
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  useEffect(() => {
   fetch(url + "/account/bookings/" + id, {
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
  function deletebooking() {
    const res = prompt("Type OK  TO PROCEED");
    if (res !== "OK") {
      return;
    }
    fetch(url + "/account/booking/" + data._id, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    navigate("/account/bookings");
  }
  if (loading) {
    return <CircularProgress />;
  }
  if (allPhotos) {
    return <AllPhotos photos={data.place.photos} setallPhotos={setallPhotos} />;
  }
  return (
    <div>
      <div className="font-semibold text-2xl">{data.place.title}</div>
      <Address address={data.place.address} />
      <div className="bg-gray-100 p-10 mt-4 rounded-2xl flex flex-col gap-3  md:flex-row   md:justify-between  ">
        <div className="flex flex-col justify-between">
          <BookingDates el={data} />
          <div  className="font-semibold text-xl">
            Phone: {data.phone}
          </div>
          <div>
            <button
              onClick={deletebooking}
              className="bg-rose-500  py-3 px-5 text-xl rounded-2xl text-white"
            >
              Cancel Booking?{" "}
            </button>
          </div>
        </div>
        <div className="bg-rose-500 p-4  md:p-6 text-white rounded-2xl text-2xl flex flex-col items-center ">
          <p>Price</p>
          <Price price={data.price} />
        </div>
      </div>
      <SinglePlaceImage
        photos={data.place.photos}
        setallPhotos={setallPhotos}
      />
    </div>
  );
};

export default SingleBooking;
