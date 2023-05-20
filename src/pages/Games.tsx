import { useGetAllGamesQuery } from "../store";
import GameCard from "../components/Cards/GameCard/GameCard";
import { IGame } from "../types/games.interface";
import States from "../components/States/States";
import { ProgressBar } from "../components/NProgress/ProgressBar";

const Games = () => {
  const gamesPerPage = 20;
  const { data, error, isLoading, isFetching } = useGetAllGamesQuery(
    {
      page: 1,
      page_size: gamesPerPage,
    },
    {
      // pollingInterval: 1000,
    }
  );
  console.log(data);

  ProgressBar(isLoading || isFetching);
  return (
    <>
      <States
        dataLength={data?.results?.length as number}
        error={error}
        isLoading={isLoading}
        skeletonCount={20}
        isFetching={isFetching}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results?.map((item: IGame) => (
          <GameCard key={item?.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Games;
