import React from "react";
import { useGetAllGamesQuery } from "../store";
import GameCard from "../components/Cards/GameCard";
import { IGame } from "../types/games.interface";

const Games = () => {
  const { data } = useGetAllGamesQuery(undefined);
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {data?.results?.map((item: IGame) => (
        <GameCard key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default Games;
