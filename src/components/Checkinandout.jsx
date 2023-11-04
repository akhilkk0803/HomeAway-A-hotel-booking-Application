import React from "react";
import { Typography, Stack ,TextField,} from "@mui/material";
const Checkinandout = ({
  checkIn,
  setCheckin,
  checkOut,
  setCheckout,
  guests,
  setGuest,
}) => {
  return (
    <div>
      <Typography variant="body1" color="initial" mt={1} mb={1}>
        Check in and check out time
      </Typography>
      <Stack
        gap={2}
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <TextField
          id="checkin"
          label="checkin"
          type="text"
          placeholder="16:00"
          fullWidth
          value={checkIn}
          onChange={(e) => setCheckin(e.target.value)}
        />
        <TextField
          id="checkout"
          label="checkout"
          type="text"
          placeholder="9:00"
          value={checkOut}
          fullWidth
          onChange={(e) => setCheckout(e.target.value)}
        />{" "}
        <TextField
          id="maxGuests"
          fullWidth
          label="maxGuests"
          value={guests}
          type="number"
          onChange={(e) => setGuest(e.target.value)}
        />
      </Stack>
    </div>
  );
};

export default Checkinandout;
