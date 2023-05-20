import { FC } from "react";
import { IPlatformData } from "../../../types/platform.interface";
import { DarkBadge } from "../../Badge";

const PlatformCard: FC<IPlatformData> = ({
  image_background,
  name,
  games_count,
}) => {
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
        src={image_background}
        alt=""
      />
      <div className="p-3">
        <h5
          className={`${gradientTextStyles} mb-1 text-xl font-bold tracking-tight`}
        >
          {name}
        </h5>
        <div className="flex items-center justify-between">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Total games
          </p>
          <DarkBadge label={games_count?.toString()} />
        </div>
      </div>
    </div>
  );
};

export default PlatformCard;
