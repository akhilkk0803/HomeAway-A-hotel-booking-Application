import React from "react";
import { Stack, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const Upload = ({ uploadPhoto }) => {
  return (
    <>
      <label
        style={{
          padding: "59px 97px",
          border: "1px solid black",
          margin: "0 auto",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        <Stack
          flexDirection="row"
          gap={1}
          justifyContent="center"
          alignItems="center"
        >
          <input
            type="file"
            style={{
              display: "none",
            }}
            onChange={uploadPhoto}
            multiple
          />
          <CloudUploadOutlinedIcon
            sx={{
              fontSize: "50px",
              color: "blue",
            }}
          />
          <Typography variant="body1" color="initial">
            UPLOAD
          </Typography>
        </Stack>
      </label>
    </>
  );
};

export default Upload;
