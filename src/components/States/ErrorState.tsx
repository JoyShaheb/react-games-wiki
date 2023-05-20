import { FC } from "react";
import { iErrorState } from "../../types/types";
import Error404 from "../../assets/Error404.svg";

const ErrorState: FC<iErrorState> = ({ error, isLoading }) => {
  return (
    <>
      {!isLoading && error && (
        <div className="flex justify-center my-20">
          <img src={Error404} alt="Error Image" />
        </div>
      )}
    </>
  );
};

export default ErrorState;
