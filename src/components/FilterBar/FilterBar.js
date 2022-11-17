import React from "react";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import LocationDropdown from "../LocationDropdown/LocationDropdown";
import PropertyTypeDropdown from "../PropertyTypeDropdown/PropertyTypeDropdown";
import DateInput from "../DateInput/DateInput";

function FilterBar() {
  return (
    <div className="bg-white p-4 rounded-lg text-gray-800 mt-10">
      <div className="flex justify-between gap-2 flex-wrap">
        <div className="flex flex-col  space-y-2">
          <div>Location</div>
          <LocationDropdown />
        </div>
        <div className="flex flex-col space-y-2">
          <div>From</div>
          <div>
            <DateInput />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div>Price</div>
          <PriceDropdown />
        </div>
        <div className="flex flex-col  space-y-2">
          <div>Property Type</div>
          <PropertyTypeDropdown />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
