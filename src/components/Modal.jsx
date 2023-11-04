import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
const Modals = ({ data, open, setisopen, title }) => {
  return (
    <Modal
      open={open}
      onClose={() => setisopen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: {
            md: "absolute",
            xs: "relative",
          },
          top: {
            xs: "50%",
          },
          left: {
            xs: "50%",
          },
          maxWidth: {
            md: 800,
            xs: "100vw",
          },
          height: {
            xs: "100vh",
            md: "auto",
          },
          maxHeight: {
            md: 456,
          },
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          padding: {
            md: "60px",
            xs: "30px",
          },

          overflow: "auto",
        }}
        className="rounded-2xl"
      >
        <p className="font-semibold text-2xl">{title} </p>
        <div className="leading-6 mt-3  ">{data}</div>

        <CloseIcon
          className="absolute top-3 cursor-pointer right-0 mr-3"
          onClick={() => setisopen(false)}
        />
      </Box>
    </Modal>
  );
};

export default Modals;
