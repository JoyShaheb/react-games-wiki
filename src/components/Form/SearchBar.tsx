import { FC, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface ISearchBarProps {
  name: string;
  placeholder: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, searchTerm: string) => void;
  searchBtnLabel?: string;
}

const SearchBar: FC<ISearchBarProps> = ({
  placeholder,
  name,
  onSubmit,
  searchBtnLabel = "Search",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <form
      onSubmit={(e) => {
        onSubmit(e, searchTerm);
      }}
      className="container mx-auto max-w-lg my-4"
    >
      <label
        htmlFor={name}
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            strokeWidth={2}
          />
        </div>
        <input
          type="search"
          id={name}
          name={name}
          className="block w-full p-4 pl-10 text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {searchBtnLabel}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
