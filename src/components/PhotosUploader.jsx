import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import DeleteIcon from "@mui/icons-material/Delete";
import { url } from "../url";
const PhotosUploader = ({ addedPhotos, setaddedPhotos }) => {
  return (
    <div>
      <Stack
        flexDirection="row"
        gap={3}
        flexWrap="wrap"
        alignItems="center"
        m={4}
      >
        {addedPhotos.length > 0 &&
          addedPhotos.map((el, i) => (
            <Box
              sx={{
                position: "relative",
              }}
            >
              <motion.img
                src={url+`/uploads/${el}`}
                alt="photo"
                key={el}
                style={{
                  height: " 156px",
                  width: "257px",
                  borderRadius: "25px",
                }}
                whileHover={{
                  y: -1,
                  boxShadow: "  rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                }}
              />
              <Button
                variant="text"
                sx={{
                  position: "absolute",
                  bottom: 4,
                  right: 0,
                  opacity: 50,
                }}
                onClick={() => {
                  const temp = [...addedPhotos];
                  temp.splice(i, 1);
                  setaddedPhotos(temp);
                }}
              >
                <DeleteIcon
                  sx={{
                    color: "red",
                    backgroundColor: "black",
                    padding: "1.6px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                />
              </Button>
            </Box>
          ))}
      </Stack>
    </div>
  );
};

export default PhotosUploader;
