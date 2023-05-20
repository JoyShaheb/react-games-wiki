import { useEffect, useState, FC } from "react";
import ReactPaginate from "react-paginate";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface IPagination {
  pageCount: number;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: FC<IPagination> = ({
  pageCount,
  pageNumber,
  setPageNumber,
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="flex items-center justify-center">
      <ReactPaginate
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        className="inline-flex -space-x-px my-5 gap-0.5"
        activeClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        nextClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        previousClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        breakClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onPageChange={(page) => setPageNumber(page.selected + 1)}
        nextLabel={<ArrowRightIcon className="w-5 h-5" />}
        previousLabel={<ArrowLeftIcon className="w-5 h-5" />}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        marginPagesDisplayed={width < 576 ? 1 : 3}
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </div>
  );
};

export default Pagination;
