import React, { useContext, useEffect, useState } from "react";
import Price from "../util/Price";
import { differenceInDays } from "date-fns";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { url } from "../url";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../UserContext";

const BookingWidjet = ({ data }) => {
  const navigate = useNavigate();
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [checkIn, setCheckin] = useState(null);
  const [checkOut, setCheckout] = useState(null);
  const { user } = useContext(Usercontext);
  useEffect(() => {
    setName(user.name);
  }, [user]);
  let diff = 0;
  if (checkIn && checkOut) {
    diff = differenceInDays(new Date(checkOut), new Date(checkIn));
  }
  const booking = async (e) => {
    e.preventDefault();
    if (!name || !phone || !checkIn || !checkOut) {
      alert("Please fill all the details");
      return;
    }
    const Bookdata = {
      name,
      phone,
      checkIn,
      price: diff * data.price,
      guests,
      checkOut,
      id: data._id,
    };
    console.log(Bookdata);
    const res = await fetch(url + "/place/booking", {
      method: "POST",
      body: JSON.stringify(Bookdata),
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    if (res.status === 500) {
      alert("Something went wrong Try Again ");
      return;
    }
    navigate("/account/bookings");
  };
  return (
    <>
      <div className="text-2xl text-center flex justify-center">
        <div className="text-xl md:text-2xl">Price: </div>
        <b className="font-semibold">
          <Price price={data.price} />
        </b>{" "}
        <div className="text-xl md:text-2xl">/night</div>
      </div>
      <form onSubmit={booking}>
        <div className="border mt-3 rounded-2xl p-4 mb-3">
          <div className="flex flex-col  md:flex-row ">
            <div className="  my-4 py-2 px-4 ">
              <label>Check in:</label>
              <input type="date" onChange={(e) => setCheckin(e.target.value)} />
            </div>
            <div className=" sm:border-t md:border-l my-4 py-2 px-4 ">
              <label>Check out:</label>
              <input
                type="date"
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>
          </div>
          {diff > 0 && (
            <div className="text-center font-semibold flex justify-center">
              Total Price:
              {<Price price={diff * data.price} />}
            </div>
          )}
          <div className=" py-3 px-4 border-t  flex flex-col sm:  gap-3">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <label>Guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={1}
                max={data.maxGuests}
                className="border w-8/12 ml-1 py-3 px-2 rounded-2xl border-black"
              />
            </div>
            {diff > 0 && (
              <>
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <label>Name</label>
                  <input
                    value={name}
                    type="text"
                    name="name"
                    placeholder="Akhil KK"
                    className="border ml-2 w-full py-3 px-2 rounded-2xl border-black"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                  {" "}
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    placeholder="+91"
                    className="border ml-2 w-full py-3 px-2 rounded-2xl border-black"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </>
            )}{" "}
          </div>
        </div>

        <button
          type="submit"
          className="bg-rose-500  px-10 py-2  text-white w-full rounded-2xl mx-auto my-0"
        >
          {" "}
          BOOK
        </button>
      </form>
    </>
  );
};

export default BookingWidjet;
