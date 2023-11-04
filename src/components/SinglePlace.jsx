import React, { useContext, useEffect, useState } from "react";
import { url } from "../url";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Grid, Stack, Typography, Box, Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BookingWidjet from "./BookingWidjet";
import SinglePlaceImage from "./SinglePlaceImage";
import Address from "./Address";
import AllPhotos from "./AllPhotos";
import { Usercontext } from "../UserContext";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WifiIcon from "@mui/icons-material/Wifi";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import Modals from "./Modal";
const SinglePlace = () => {
  const perks = [
    {
      value: "wifi",
      icon: (
        <WifiIcon
          sx={{
            color: "blue",
          }}
        />
      ),
      color: "blue",
    },
    {
      value: "breakfast",
      icon: (
        <DinnerDiningIcon
          sx={{
            color: "brown",
          }}
        />
      ),
      color: "brown",
    },
    {
      value: "Parking",
      icon: (
        <LocalParkingIcon
          sx={{
            color: "red",
          }}
        />
      ),
      color: "red",
    },
    {
      value: "Air Conditioning",
      icon: (
        <AcUnitIcon
          sx={{
            color: "blue",
          }}
        />
      ),
      color: "blue",
    },
    {
      value: "Gym ",
      icon: (
        <FitnessCenterIcon
          sx={{
            color: "brown",
          }}
        />
      ),
      color: "brown",
    },
    {
      value: "Scenic Views ",
      icon: (
        <WbSunnyIcon
          sx={{
            color: "orange",
          }}
        />
      ),
      color: "orange",
    },
    {
      value: "Fireplaces",
      icon: (
        <LocalFireDepartmentIcon
          sx={{
            color: "red",
          }}
        />
      ),
      color: "red",
    },
  ];
  const [opendesc, setisopendesc] = useState(false);
  const [openextra, setisopenextra] = useState(false);

  const { user } = useContext(Usercontext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [allPhotos, setallPhotos] = useState(false);

  useEffect(() => {
    if (!user) {
      alert("Login to view");
      navigate("/login");
      return;
    }
    fetch(url + "/place/" + id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setisLoading(false);
        setdata(data);
      });
  }, []);
  if (allPhotos) {
    return <AllPhotos photos={data.photos} setallPhotos={setallPhotos} />;
  }
  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <div className="  sm:p-10 w-full md:bg-gray-50 rounded-2xl ">
      <Stack>
        <Typography variant="h5" color="initial">
          {data.title}
        </Typography>
        <Address address={data.address} />
        <SinglePlaceImage photos={data.photos} setallPhotos={setallPhotos} />
        <p className="text-1xl semibold mt-3 md:text-2xl">
          {" "}
          {data.type} Hosted by {data.owner.name}
        </p>
        <p className="text-1xl semibold mt-3 md:text-2xl">
          {" "}
          Email:{data.owner.email}
        </p>
      </Stack>

      <div className="grid grid-cols-1  mt-8 gap-8 md:grid-cols-[2fr,1fr] my-3 ">
        <div>
          <h2 className="font-semibold mb-2 sm:text-xl md:text-2xl">
            Description
          </h2>
          <div className="md:block hidden">
            <Typography variant="body1" color="initial" lineHeight={1.7}>
              {data.description.slice(0, 500)}...
            </Typography>
          </div>
          <div className="sm:block md:hidden">
            <Typography variant="body1" color="initial" lineHeight={1.7}>
              {data.description.slice(0, 200)}...
            </Typography>
          </div>
          <div className="sm:hidden block">
            <Typography variant="body1" color="initial" lineHeight={1.7}>
              {data.description.slice(0, 100)}...
            </Typography>
          </div>

          <div
            className="text-xl font-semibold  cursor-pointer underline"
            onClick={() => setisopendesc(true)}
          >
            Show More <ChevronRightIcon />
          </div>
          <Modals
            data={data.description}
            open={opendesc}
            setisopen={setisopendesc}
            title="Description"
          />
          <div className="mt-3 p-3">
            <b> Check-in</b>:{data.checkIn}
            <br />
            <b> Check-out</b>:{data.checkOut}
            <br />
            <b> Max-guests</b>:{data.maxGuests}
          </div>
        </div>
        <div>
          <div className="bg-white shadow p-4 rounded-2xl ">
            <BookingWidjet data={data} />
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <p className="font-semibold text-2xl"> Perks</p>
        <div className="grid grid-cols-2 md:grid-cols-3 ">
          {perks.map((el) => (
            <div
              className={`flex gap-2 m-3  ${
                data.perks.includes(el.value) ? "none" : "line-through"
              } `}
            >
              <div>{el.icon}</div>
              <div>{el.value}</div>
            </div>
          ))}
        </div>{" "}
      </div>

      {data.extra?.length > 0 && (
        <div className="bg-white p-6">
          <h3 className="font-semibold text-2xl">Extra Info</h3>
          <div className="text-gray-600 mt-4   leading-6 ">
            <div className="md:block hidden">{data.extra.slice(0, 500)}...</div>
            <div className="sm:block hidden">{data.extra.slice(0, 300)}...</div>
            <div className="block sm:hidden">{data.extra.slice(0, 200)}...</div>
            <div
              className="text-xl font-semibold  cursor-pointer underline"
              onClick={() => setisopenextra(true)}
            >
              Show More <ChevronRightIcon />
            </div>
            <Modals
              open={openextra}
              data={data.extra}
              setisopen={setisopenextra}
              title="Extra Info"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePlace;
