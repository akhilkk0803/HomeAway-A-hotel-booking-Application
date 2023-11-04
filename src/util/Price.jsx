import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Price = ({ price }) => {
  return (
    <div className="flex items-center">
      <CurrencyRupeeIcon
        sx={{
          fontSize: "17px",
          marginRight: "1px",
        }}
      />{" "}
      <p className="font-semibold text-xl md:text-2xl">
        {new Intl.NumberFormat("en-IN").format(price)}
      </p>
    </div>
  );
};

export default Price;
