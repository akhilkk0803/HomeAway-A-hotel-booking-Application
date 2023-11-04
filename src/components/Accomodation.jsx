import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import PlacesForm from "./PlacesForm";
import { url } from "../url";
import AllPlaces from "./AllPlaces";
import CircularProgress from "@mui/material/CircularProgress";

import { json } from "react-router-dom";
const Accomodation = () => {
  const [places, setplaces] = useState([]);
  const [loading, setloading] = useState(true);
  const { action } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getplaces();
  }, []);
  function getplaces() {
    fetch(url + "/place/?q=userPost", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setloading(false);
        setplaces(data);
      });
  }
  function deletehandler(el) {
    const ret = prompt(
      "The data will be deleted Permantly type OK  to proceed"
    );
    if (ret === "OK") {
      fetch(url + "/place/" + el._id, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => getplaces());
    }
  }
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <div>
      {!action && (
        <>
          <AllPlaces data={places} del={true} deletehandler={deletehandler} />
          <NavLink to="/account/places/new">
            <Button
              variant="contained"
              component={motion.div}
              whileHover={{
                y: -2,
                backgroundColor: "#f7044d",
              }}
              sx={{
                backgroundColor: "#F31559",
                ":hover": {
                  boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
                },
              }}
              startIcon={<AddIcon />}
            >
              Add new Place
            </Button>
          </NavLink>
        </>
      )}
      {action === "new" && <PlacesForm />}
    </div>
  );
};

export default Accomodation;
