import Modal from "../Modal/Modal";
import { InboxIcon, ServerIcon } from "@heroicons/react/24/outline";
import { properties } from "../../properites";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../features/dataSlice";
export default function Card() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.value);
  const price = useSelector((state) => state.price.value);
  const propertyP = useSelector((state) => state.property.value);
  const date = useSelector((state) => state.date.value);
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state.data.value);
  const search = useSelector((state) => state.search.value);
  console.log(data);
  return (
    <div className="">
      <Modal open={open} setOpen={setOpen} data={data} />
      <div className="max-w-2xl mx-auto py-10 sm:py-10 lg:max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {properties
            .filter((property) => {
              if (location !== null) {
                return property.location === location;
              } else {
                return property;
              }
            })
            .filter((property) => {
              console.log(property.rentPrice, price);
              if (price !== null) {
                return property.rentPrice >= price;
              } else {
                return property;
              }
            })
            .filter((property) => {
              if (propertyP !== null) {
                return property.type === propertyP;
              } else {
                return property;
              }
            })

            .filter((property) => {
              if (date.length > 0) {
                const startDate = new Date(property.availability[0].startDate);
                const endDate = new Date(property.availability[0].endDate);
                const date1 = new Date(date);
                return date1 >= startDate && date1 <= endDate;
              } else {
                return property;
              }
            })

            //show results matching with search input
            .filter((property) => {
              if (search !== "") {
                return (
                  property.location
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  property.name.toLowerCase().includes(search.toLowerCase())
                );
              } else {
                return property;
              }
            })

            .map((property) => (
              <div
                key={property.id}
                className="group relative bg-white cursor-pointer rounded-lg flex flex-col overflow-hidden"
                onClick={() => {
                  setOpen(true);
                  dispatch(setData(property));
                }}
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-72">
                  <img
                    src={property.imageSrc}
                    alt={property.imageAlt}
                    className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                  />
                </div>
                <div className="flex-1 p-4 space-y-2 flex flex-col border-b border-gray-400">
                  <div className="flex-1 flex flex-col justify-end">
                    <p className="font-medium text-indigo-500 flex items-center font-bold">
                      <span className="text-xl ">
                        ${property.rentPrice}&nbsp;
                      </span>
                      <span className="text-lg">/ month</span>
                    </p>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <div className="text-2xl font-bold">{property.name}</div>
                  </h3>
                  <p className=" text-gray-500 truncate hover:text-clip">
                    {property.description}
                  </p>
                </div>
                <div className="flex-1 p-4 flex flex-row justify-between text-indigo-500 font-semibold">
                  <div className="flex gap-1">
                    <InboxIcon className="h6 w-6" />
                    Beds {property.beds}
                  </div>
                  <div className="flex gap-1">
                    <ServerIcon className="h6 w-6" />
                    Baths {property.baths}
                  </div>
                  <div className="flex gap-1">
                    <InboxIcon className="h6 w-6" />
                    {property.sqft}{" "}
                    <span className="flex items-baseline">
                      m<sup>2</sup>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
