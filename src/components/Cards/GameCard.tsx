import { FC } from "react";
import { IGame } from "../../types/games.interface";
import { GreenBadge, RedBadge, YellowBadge } from "../Badge";

const GameCard: FC<IGame> = ({ background_image, name, metacritic }) => {
  const showBadge = () => {
    switch (true) {
      case metacritic >= 75:
        return <GreenBadge label={metacritic.toString()} />;
      case metacritic >= 50 && metacritic < 75:
        return <YellowBadge label={metacritic.toString()} />;
      case metacritic >= 25 && metacritic < 50:
        return <RedBadge label={metacritic.toString()} />;
      case metacritic >= 0 && metacritic < 25:
        return <RedBadge label={metacritic.toString()} />;

      default:
        return null;
    }
  };

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
        alt=""
      />
      <div className="p-3">
        <h5 className="bg-gradient-to-r from-cyan-400 to-blue-500  dark:to-white text-transparent bg-clip-text mb-2 text-xl font-bold tracking-tight">
          {name}
        </h5>
        <div className="flex flex-row items-center justify-between">
          <div className="text-gray-400">platform</div>
          {showBadge()}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
