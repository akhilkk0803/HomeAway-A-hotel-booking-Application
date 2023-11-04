import React from "react";
import { url } from "../url";
const Address = ({ address }) => {
  return (
    <a
      href={"https://google.com/maps/place/" + address}
      style={{
        color: "black",
        textDecoration: "underline",
        fontSize: "17px",
        fontWeight: "bold",
        marginTop: "6px",
      }}
      target="_blank"
    >
      {address}
    </a>
  );
};

export default Address;
