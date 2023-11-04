import React from "react";
import { Typography, Stack, TextField, Button } from "@mui/material";
const PhotoByLink = ({
  setPhotoLink,
  photoLink,
  uploadPhotobyLink,
  addedPhotos,
}) => {
  return (
    <div>
      <Typography variant="body1" color="initial">
        Photos
      </Typography>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <TextField
          id="Photos"
          label="Photo"
          multiple
          value={photoLink}
          helperText="Add photos of your property"
          placeholder="Add photo using link...jpg"
          sx={{
            width: {
              xs: "100%",
              md: "90%",
            },
          }}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "-10px",
            backgroundColor: "#F31559",
            borderRadius: "30px",
            padding: "10px 20px",
            ":hover": {
              backgroundColor: "#F31559",
            },
          }}
          onClick={uploadPhotobyLink}
        >
          Add Photo
        </Button>
      </Stack>
    </div>
  );
};

export default PhotoByLink;
