import { FC } from "react";
import { iErrorState } from "../../types/types";
import Error404 from "../../assets/Error404.svg";

interface iNoDataState extends iErrorState {
  dataLength?: number;
}

const NoDataState: FC<iNoDataState> = ({
  error,
  isLoading,
  dataLength,
  isFetching,
}) => {
  return (
    <>
      {!isLoading && !isFetching && !error && dataLength === 0 && (
        <div className="flex justify-center my-20">
          <img src={Error404} alt="No Data found" />
        </div>
      )}
    </>
  );
};

export default NoDataState;
