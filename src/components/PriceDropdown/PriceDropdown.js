import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { properties } from "../../properites";
import { setPrice } from "../../features/priceSlice";

export default function PriceDropdown() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.price.value);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {price ? ">" + price : "Set Price"}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            <Menu.Item
              className="cursor-pointer p-2"
              onClick={(e) => {
                dispatch(setPrice(null));
              }}
            >
              <div className="bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                {"> "} 0
              </div>
            </Menu.Item>
            <Menu.Item
              className="cursor-pointer p-2"
              onClick={(e) => {
                dispatch(setPrice(1000));
              }}
            >
              <div className="bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                {"> "} 1000
              </div>
            </Menu.Item>
            <Menu.Item
              className="cursor-pointer p-2"
              onClick={(e) => {
                dispatch(setPrice(5000));
              }}
            >
              <div className="bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                {"> "} 5000
              </div>
            </Menu.Item>
            <Menu.Item
              className="cursor-pointer p-2"
              onClick={(e) => {
                dispatch(setPrice(10000));
              }}
            >
              <div className="bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm">
                {"> "} 10000
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
