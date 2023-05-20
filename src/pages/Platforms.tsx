import { useGetAllPlatformsQuery } from "../store";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import PlatformCard from "../components/Cards/PlatformCard/PlatformCard";
import { IPlatformData } from "../types/platform.interface";
import States from "../components/States/States";
const Platforms = () => {
  const { data, isFetching, isLoading, error } =
    useGetAllPlatformsQuery(undefined);

  console.log(data);
  ProgressBar(isLoading || isFetching);
  return (
    <div>
      <States
        dataLength={data?.results?.length as number}
        error={error}
        isLoading={isLoading}
        skeletonCount={15}
        isFetching={isFetching}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data?.results?.map((item: IPlatformData) => (
          <PlatformCard key={item?.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
