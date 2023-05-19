import React from "react";
import { useGetAllGamesQuery } from "../store";

const Games = () => {
  const { data } = useGetAllGamesQuery(undefined);
  console.log(data);
  return <div>Games</div>;
};

export default Games;
