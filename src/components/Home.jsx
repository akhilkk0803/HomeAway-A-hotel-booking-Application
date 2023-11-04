import React, { useContext, useEffect, useState } from "react";
import AllPlaces from "./AllPlaces";
import { url } from "../url";
import { Usercontext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ParkIcon from "@mui/icons-material/Park";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import HouseIcon from "@mui/icons-material/House";
import VillaIcon from "@mui/icons-material/Villa";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import CottageIcon from "@mui/icons-material/Cottage";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Home = () => {
  const options = [
    {
      title: "All",
      icon: <BedroomParentOutlinedIcon />,
    },
    {
      title: "Private Room",
      icon: <SingleBedIcon />,
    },
    {
      title: "Shared Room",
      icon: <Diversity3Icon />,
    },
    {
      title: "GuestHouse",
      icon: <HouseIcon />,
    },
    {
      title: "Treehouse",
      icon: <ParkIcon />,
    },
    {
      title: "Villa",
      icon: <VillaIcon />,
    },
    {
      title: "Cottages",
      icon: <CottageIcon />,
    },
    {
      title: "Houseboat",
      icon: <DirectionsBoatIcon />,
    },
    {
      title: "Other",
      icon: <ApartmentIcon />,
    },
  ];
  const { user } = useContext(Usercontext);
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [active, setacitve] = useState("All");
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    fetch(url + "/place/?q=" + active, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setdata(data);
      });
  }, [active]);
  function getdata(e) {
    setacitve(e.title);
  }
  if (!user) {
    navigate("/login");
  }

  return (
    <>
      <div>
        <div className="flex w-full  p-4 justify-between mb-3 overflow-auto">
          {options.map((el) => (
            <div
              className={`mr-3 grow flex  px-4 py-2 ${
                active === el.title
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 hover:border-gray-300"
              } cursor-pointer flex-col items-center justify-center`}
              onClick={() => setacitve(el.title)}
            >
              <p className="font-semibold ">{el.title}</p>
              {el.icon}
            </div>
          ))}
        </div>
      </div>
      {loading && <CircularProgress />}
      {!loading && <AllPlaces data={data} />}
    </>
  );
};

export default Home;
