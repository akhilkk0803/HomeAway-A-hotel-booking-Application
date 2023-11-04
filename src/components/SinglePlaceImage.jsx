import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { url } from "../url";
const SinglePlaceImage = ({ photos, setallPhotos }) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Grid container mt={4} columnGap={2} p={1}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            transition: "0.7s",
            ":hover": {
              opacity: 0.9,
            },
          }}
        >
          <img
            onClick={() => setallPhotos(true)}
            src={url + "/uploads/" + photos[0]}
            className="aspect-square mb-2 w-full object-cover rounded-2xl overflow-hidden cursor-pointer"
          />
        </Grid>
        <Grid container xs={0} md={4} spacing={3}>
          <Grid
            item
            xs={0}
            md={12}
            sx={{
              transition: "0.7s",

              ":hover": {
                opacity: 0.9,
              },
            }}
          >
            <img
              onClick={() => setallPhotos(true)}
              src={url + "/uploads/" + photos[1]}
              className="aspect-square rounded-2xl object-cover cursor-pointer"
            />
          </Grid>
          <Grid
            item
            xs={0}
            md={12}
            sx={{
              transition: "0.7s",

              ":hover": {
                opacity: 0.9,
              },
            }}
          >
            <img
              onClick={() => setallPhotos(true)}
              src={url + "/uploads/" + photos[2]}
              className="aspect-square rounded-2xl object-cover cursor-pointer"
            />
          </Grid>
        </Grid>{" "}
      </Grid>
      <Button
        variant="text"
        sx={{
          position: "absolute",
          right: 10,
          bottom: 40,
          color: "black",
          backgroundColor: "white",
          padding: "6px",
          borderRadius: "10px",
          ":hover": {
            backgroundColor: "#fafafa",
          },
        }}
        onClick={() => setallPhotos(true)}
      >
        {" "}
        show more photos
      </Button>
    </Box>
  );
};

export default SinglePlaceImage;
