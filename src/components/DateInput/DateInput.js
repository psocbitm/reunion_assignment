import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDate } from "../../features/dateSlice";
function DateInput() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date.value);
  return (
    <input
      type="date"
      value={date}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      onChange={(e) => dispatch(setDate(e.target.value))}
    />
  );
}

export default DateInput;
