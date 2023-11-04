import React from "react";
import { Typography, Stack, TextField, Button, MenuItem } from "@mui/material";

const Inputs = ({ data }) => {
  const types = [
    "Private Room",
    "Shared Room",
    "Guesthouse",
    "Treehouse",
    "Villa",
    "Cottages",
    "Houseboat",
    "Other",
  ];
  return (
    <>
      <Typography variant="body1" color="initial">
        Type
      </Typography>
      <TextField
        id="type"
        label="type"
        select
        value={data.type}
        defaultValue="Private Room"
        name="type"
        onChange={(e) => {
          console.log(e.target.value);
          data.setType(e.target.value);
        }}
      >
        {types.map((el, i) => (
          <MenuItem value={`${el}`} key={`${i}`}>
            {el}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="body1" color="initial">
        Title
      </Typography>
      <TextField
        id="title"
        value={data.title}
        onChange={(e) => data.setTitle(e.target.value)}
        label="Title"
        name="title"
        helperText="Title of your place should be short and catchy"
      />{" "}
      <Typography variant="body1" color="initial">
        Address
      </Typography>
      <TextField
        id="address"
        value={data.address}
        label="Address"
        helperText="Add the address of your place"
        name="address"
        onChange={(e) => data.setAddress(e.target.value)}
      />{" "}
      <Typography variant="body1" color="initial">
        Description
      </Typography>
      <TextField
        id="desciption"
        value={data.description}
        helperText="Add a breif description of your place"
        label="Desciption"
        name="desciption"
        onChange={(e) => data.setdescription(e.target.value)}
      />
      <TextField
        id="PRICE"
        value={data.price}
        helperText="per night"
        label="Price"
        name="price"
        type="number"
        onChange={(e) => data.setprice(e.target.value)}
      />
    </>
  );
};

export default Inputs;
