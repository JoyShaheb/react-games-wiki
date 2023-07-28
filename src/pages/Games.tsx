import { useGetAllGamesQuery } from "../store";
import GameCard from "../components/Cards/GameCard/GameCard";
import { IGame } from "../types/games.interface";
import States from "../components/States/States";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import { useEffect, useState } from "react";

const Games = () => {
  const [fetchSettings, setFetchSettings] = useState({
    page: 1,
    page_size: 20,
    search: "",
  });
  const { data, error, isLoading, isFetching } = useGetAllGamesQuery(
    fetchSettings,
    {
      // pollingInterval: 1000,
    },
  );

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setFetchSettings({
          ...fetchSettings,
          page: fetchSettings.page + 1,
        });
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSettings.page, isFetching]);

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
      <div className="text-center mb-3 text-xl capitalize">
        infinite scroll feature added, scroll down to fetch more games
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results?.map((item: IGame) => (
          <GameCard key={item?.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Games;
