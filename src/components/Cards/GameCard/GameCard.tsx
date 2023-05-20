import { FC } from "react";
import { IGame } from "../../../types/games.interface";
import ShowRating from "./Pieces/ShowRating";

const GameCard: FC<IGame> = ({ background_image, name, metacritic }) => {
  const gradientTextStyles =
    "bg-gradient-to-r from-cyan-400 to-blue-500  dark:to-white text-transparent bg-clip-text";

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <img
        style={{
          height: "250px",
          width: "100%",
          objectFit: "cover",
        }}
        className="rounded-t-lg"
        src={background_image}
        alt={name}
      />
      <div className="p-3 flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-400">platform</div>
          <ShowRating metacritic={metacritic} />
        </div>
        <h5
          className={`${gradientTextStyles} mb-2 text-xl font-bold tracking-tight`}
        >
          {name}
        </h5>
      </div>
    </div>
  );
};

export default GameCard;
