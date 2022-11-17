import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Card from "../Card/Card";
import FilterBar from "../FilterBar/FilterBar";
import Search from "../Search/Search";

function Main() {
  return (
    <div className="py-12 text-white">
      <Search />
      <FilterBar />
      <Card />
    </div>
  );
}

export default Main;
