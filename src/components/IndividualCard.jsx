import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { NavLink, useNavigate } from "react-router-dom";
import { url } from "../url";
import Price from "../util/Price";
const IndividualCard = ({ el, del, deletehandler }) => {
  const [index, setindex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setInterval(() => {
      setindex((prev) => (prev + 1) % el.photos.length);
    }, 3000);
  }, []);

  return (
    <>
      <Card
        sx={{
          width:{
            md: "371px",
            xs:'100%'
          },
          margin: "10px",
          borderRadius: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        className="m-10"
      >
        <CardMedia
          sx={{ height: 250 }}
          image={url + "/uploads/" + el.photos[index]}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {el.title}
          </Typography>
          <Stack
            flexDirection="row"
            gap={1}
            justifyContent="space-between"
            alignItems="center"
            sx={{
              width: "90%",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {el.type}
            </Typography>
          </Stack>
          <Stack flexDirection="row" alignItems="center">
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginRight: "3px",
              }}
            >
              {" "}
              <p className="font-semibold">
                <Price price={el.price} />
              </p>
            </Typography>
            <Typography variant="subtitle1"> night</Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <NavLink to={"/place/" + el._id}>
            <Button variant="text" color="error" size="small">
              View
            </Button>
          </NavLink>
          {del === true && (
            <>
              <NavLink to={el._id}>
                <Button variant="text" color="error" size="small">
                  Update
                </Button>
              </NavLink>
              <Button
                variant="text"
                color="error"
                size="small"
                onClick={() => deletehandler(el)}
              >
                Delete
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default IndividualCard;
