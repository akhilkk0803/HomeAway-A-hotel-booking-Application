import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CloseIcon from "@mui/icons-material/Close";
import { url } from "../url";
const AllPhotos = ({ photos, setallPhotos }) => {
  return (
    <Stack alignItems="center" justifyContent="flex-start" gap={2} p={3}>
      <Button
        variant="text"
        startIcon={<CloseIcon />}
        sx={{
          zIndex: 1,
          position: "fixed",
          left: 50,
          backgroundColor: "grey",
          padding: "8px 12px",
          color: "white",
          ":hover": {
            backgroundColor: "grey",
          },
        }}
        onClick={() => setallPhotos(false)}
      >
        CLOSE
      </Button>
      <div className=" flex flex-col gap-2 items-center justify-center content-center  w-full">
        {photos.map((item) => (
          <a href={url + "/uploads/" + item} target="_blank">
            <img
              className="aspect-square object-cover w-4/5  "
              srcSet={`${url + "/uploads/" + item} `}
              src={`${url + "/uploads/" + item} `}
              alt={item}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </Stack>
  );
};

export default AllPhotos;
