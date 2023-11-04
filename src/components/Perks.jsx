import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
const Perks = ({ handleperks, perks }) => {
  const perk = [
    {
      value: "wifi",
      icon: (
        <WifiIcon
          sx={{
            color: "blue",
          }}
        />
      ),
      color: "blue",
    },
    {
      value: "breakfast",
      icon: (
        <DinnerDiningIcon
          sx={{
            color: "brown",
          }}
        />
      ),
      color: "brown",
    },
    {
      value: "Parking",
      icon: (
        <LocalParkingIcon
          sx={{
            color: "red",
          }}
        />
      ),
      color: "red",
    },
    {
      value: "Air Conditioning",
      icon: (
        <AcUnitIcon
          sx={{
            color: "blue",
          }}
        />
      ),
      color: "blue",
    },
    {
      value: "Gym ",
      icon: (
        <FitnessCenterIcon
          sx={{
            color: "brown",
          }}
        />
      ),
      color: "brown",
    },
    {
      value: "Scenic Views ",
      icon: (
        <WbSunnyIcon
          sx={{
            color: "orange",
          }}
        />
      ),
      color: "orange",
    },
    {
      value: "Fireplaces",
      icon: (
        <LocalFireDepartmentIcon
          sx={{
            color: "red",
          }}
        />
      ),
      color: "red",
    },
  ];
  return (
    <div>
      <Typography variant="subtitle1" color="initial" mb={0}>
        Perks
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "grey",
        }}
      >
        Select avaiable perks
      </Typography>{" "}
      <FormGroup>
        <Grid
          container
          columns={{ md: 3, xs: 2 }}
          columnSpacing={3}
          rowSpacing={2}
        >
          {perk.map((el, i) => (
            <Grid item xs={1} key={i}>
              <Stack
                flexDirection="row"
                alignItems="center"
                style={{
                  border: "1px solid grey",
                  borderRadius: "20px",
                }}
                px={3}
                py={1}
              >
                <FormControlLabel
                  onClick={handleperks}
                  control={
                    <Checkbox
                      checked={perks.includes(el.value)}
                      name={el.value}
                      sx={{
                        color: el.color,
                        "&.Mui-checked": {
                          color: el.color,
                        },
                      }}
                    />
                  }
                  label={el.value}
                />
                {el.icon}
              </Stack>{" "}
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </div>
  );
};

export default Perks;
