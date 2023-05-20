import { FC } from "react";
import { nanoid } from "nanoid";
import { iErrorState } from "../../types/types";
import CardSkeleton from "../Skeleton/CardSkeleton";

interface iLoadingState extends iErrorState {
  skeletonCount?: number;
}
const LoadingState: FC<iLoadingState> = ({
  error,
  isLoading,
  skeletonCount,
  isFetching,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {(isLoading || isFetching) &&
        !error &&
        Array(skeletonCount)
          .fill(0)
          .map(() => <CardSkeleton key={nanoid()} />)}
    </div>
  );
};

export default LoadingState;
