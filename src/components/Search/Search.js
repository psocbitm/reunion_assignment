import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../features/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.value);
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
          Search For Properties
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-72 pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
            placeholder="Search by Name or Location"
            type="search"
            value={search}
            onChange={(e) => {
              dispatch(setSearch(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
