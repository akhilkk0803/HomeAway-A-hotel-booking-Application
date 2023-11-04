import React, { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Perks from "./Perks";
import Checkinandout from "./Checkinandout";
import PhotoByLink from "./PhotoByLink";
import Inputs from "./Inputs";
import { url } from "../url";
import Upload from "./Upload";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import PhotosUploader from "./PhotosUploader";

const PlacesForm = () => {
  const { id } = useParams();

  const [type, setType] = useState("Private Room");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setdescription] = useState("");
  const [checkIn, setCheckin] = useState("");
  const [checkOut, setCheckout] = useState("");
  const [guests, setGuest] = useState(1);
  const [extra, setextra] = useState("");
  const [perks, setPerks] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [price, setprice] = useState(0);
  const [addedPhotos, setaddedPhotos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (id === "new") return;
    fetch(url + "/place/" + id, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTitle(data.title);
        setType(data.type);
        setAddress(data.address);
        setGuest(data.maxGuests);
        setaddedPhotos(data.photos);
        setCheckin(data.checkIn);
        setCheckout(data.checkOut);
        setextra(data.extra);
        setdescription(data.description);
        setPerks(data.perks);
        setprice(data.price);
      });
  }, []);
  async function uploadPhotobyLink() {
    const res = await fetch(url + "/place/upload-by-link", {
      method: "POST",

      body: JSON.stringify({
        img: photoLink,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const op = await res.json();
    setPhotoLink("");
    setaddedPhotos((prev) => [op, ...prev]);
    console.log(op);
  }

  async function uploadPhoto(e) {
    const files = e.target.files;
    console.log(typeof files);
    const formdata = new FormData();
    [...files].forEach((file, i) => formdata.append("photos", file));
    console.log(formdata);
    const res = await fetch(url + "/place/upload", {
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formdata,
    });
    const op = await res.json();
    setaddedPhotos((prev) => [...op, ...prev]);
    console.log(op);
  }
  const handleperks = (e) => {
    const perk = e.target.name;
    const checked = e.target.checked;
    if (checked) {
      setPerks((prev) => [...prev, perk]);
    } else {
      const index = perks.findIndex((el) => el === perk);
      const newarr = [...perks];
      newarr.splice(index, 1);
      console.log(newarr);
      setPerks(newarr);
    }
  };
  async function addnewplace(e) {
    e.preventDefault();
    console.log("first");
    const data = {
      title,
      address,
      type,
      description,
      perks,
      checkIn,
      checkOut,
      guests,
      extra,
      price,
      addedPhotos,
      id: id ? id : null,
    };
    try {
      console.log(id);
      const method = id != "new" ? "PUT" : "POST";
      console.log(method);
      const res = await fetch(url + "/place/new", {
        method: method,
        body: JSON.stringify(data),
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      if (res.status === 401) {
        alert("Fill all details");
        return;
      }
      navigate("/account/places");
    } catch (e) {
      console.log("error uploading property");
    }
  }
  return (
    <form onSubmit={addnewplace}>
      <Stack gap={2} justifyContent="center">
        <Inputs
          data={{
            title,
            address,
            description,
            setType,
            setTitle,
            setAddress,
            setdescription,
            price,
            setprice,
            type,
          }}
        />
        <PhotoByLink
          setPhotoLink={setPhotoLink}
          uploadPhotobyLink={uploadPhotobyLink}
          addedPhotos={addedPhotos}
          photoLink={photoLink}
        />

        <Upload uploadPhoto={uploadPhoto} />
        <PhotosUploader
          addedPhotos={addedPhotos}
          setaddedPhotos={setaddedPhotos}
        />
        <Perks handleperks={handleperks} perks={perks} />
        <Typography variant="body1" color="initial">
          Extra info
        </Typography>
        <TextareaAutosize
          minRows={3}
          placeholder="Extra information"
          value={extra}
          onChange={(e) => setextra(e.target.value)}
          style={{
            borderRadius: "10px",
            padding: "10px",
          }}
        />
        <Checkinandout
          checkIn={checkIn}
          setCheckin={setCheckin}
          checkOut={checkOut}
          setCheckout={setCheckout}
          guests={guests}
          setGuest={setGuest}
        />
      </Stack>
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#F31559",
          ":hover": {
            backgroundColor: "#F31559",

            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
          },
          margin: "10px",
          width: "90%",
          borderRadius: "30px",
        }}
      >
        Save
      </Button>
    </form>
  );
};

export default PlacesForm;
