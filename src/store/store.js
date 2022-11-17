import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import dateReducer from "../features/dateSlice";
import locationReducer from "../features/locationSlice";
import priceReducer from "../features/priceSlice";
import propertyReducer from "../features/propertySlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    price: priceReducer,
    property: propertyReducer,
    date: dateReducer,
    data: dataReducer,
    search: searchReducer,
  },
});
