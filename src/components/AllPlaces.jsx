import React from "react";
import { Stack } from "@mui/material";
import IndividualCard from "./IndividualCard";
const AllPlaces = ({ data, del, deletehandler }) => {
  if (data.length === 0) {
    return <p className="font-3xl">No data avaiable</p>;
  }
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      {data.map((el) => (
        <IndividualCard
          el={el}
          key={el._id}
          del={del}
          deletehandler={deletehandler}
        />
      ))}
    </div>
  );
};

export default AllPlaces;
