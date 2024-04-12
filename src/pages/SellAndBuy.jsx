import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const people = [
  {
    id: 1,
    name: "تترون",
    avatar: "/img/ADA.png",
  },
  {
    id: 2,
    name: "شیبا",
    avatar: "/img/AVAX.png",
  },
  {
    id: 3,
    name: "بیت شیبا",
    avatar: "/img/BCH.png",
  },
  {
    id: 4,
    name: "تتر",
    avatar: "/img/BNB.png",
  },
  {
    id: 5,
    name: "بیت کویین",
    avatar: "/img/BTC.png",
  },
  {
    id: 6,
    name: "اتتروم",
    avatar: "/img/ETH.png",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SellAndBuy() {
  const [isBuySelected, setIsBuySelected] = useState(true);
  const [selected, setSelected] = useState(people[0]);
  const [isBuy, setIsBuy] = useState("خرید");

  const handleBuyClick = () => {
    setIsBuySelected(true);
    setIsBuy("خرید")
  };

  const handleSellClick = () => {
    setIsBuySelected(false);
    setIsBuy("فروش")
  };

  return (
    <>
      <div className="w-full bg-[#dde9eb] rounded-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/img/new.svg" alt="new" />
          <h3 className="text-color4 font-semibold text-xl">ثبت سفارش جدید </h3>
        </div>
        <div>
          <img src="/img/green.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-1 mt-10">
        <div className="w-full lg:w-4/6">
          <div className="w-full flex items-center justify-between">
            <div>نوع معامله :</div>
            <div className="bg-[#dde9eb] rounded-sm p-2 flex gap-3 border-1 border-[#d5e1e3]">
              <span
                className={`border cursor-pointer border-gray-400 py-0.5 px-3 lg:px-10 rounded-md ${
                  isBuySelected ? "bg-green-500" : ""
                }`}
                onClick={handleBuyClick}
              >
                خرید
              </span>
              <span
                className={`border cursor-pointer border-gray-400 py-0.5 px-3 lg:px-10 rounded-md ${
                  !isBuySelected ? "bg-green-500" : ""
                }`}
                onClick={handleSellClick}
              >
                فروش
              </span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between  mt-8">
            {isBuySelected ? (
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/3">نوع ارز :</div>
                    <div className="w-2/3">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <div className="relative">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                  <img
                                    src={selected.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span className="mr-3 block truncate">
                                    {selected.name}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="h-5 w-5 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/3"> مقدار به عدد :</div>
                    <div className="w-2/3">
                      <div className="relative  rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            
                          </label>
                          <span className="h-full flex items-center justify-center bg-gray-500 rounded-l-md border-0 bg-transparent py-0 pl-5  text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            BTC
                          </span>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="1987"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/3"> مقدار به تومان :</div>
                    <div className="w-2/3">
                      <div className="relative  rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            
                          </label>
                          <span className="h-full flex items-center justify-center bg-gray-500 rounded-l-md border-0 bg-transparent py-0 pl-5  text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            تومان
                          </span>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="1987"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div className="flex flex-col w-full">
                <div className="w-full">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/3">نوع ارز :</div>
                    <div className="w-2/3">
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <div className="relative">
                              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                  <img
                                    src={selected.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span className="mr-3 block truncate">
                                    {selected.name}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="h-5 w-5 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-5">
                  <div className="w-full flex items-center justify-between">
                    <div className="w-1/3"> مقدار به عدد :</div>
                    <div className="w-2/3">
                      <div className="relative  rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            
                          </label>
                          <span className="h-full flex items-center justify-center bg-gray-500 rounded-l-md border-0 bg-transparent py-0 pl-5  text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            BTC
                          </span>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="1987"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full lg:w-2/6 border border-green-700 rounded-lg flex-col p-2">
            <div className="w-full h-16 bg-green-700 rounded-t-lg flex items-center justify-center gap-2">
                 <img src="/img/Buy.svg" alt="" />
                 <span className="text-xl font-semibold text-white">{isBuy} ارز</span>
            </div>
            <div className="w-full h-16 bg-green-300 flex flex-col items-center justify-center gap-1">
                <div className="text-sm text-color4">ارز درخواستی</div>
                <div className="flex items-center gap-3">
                    <img src={selected.avatar} alt="1"  className="w-6"/> 
                     <span className="text-color4 font-semibold">{selected.name}</span>
                </div>
            </div>
            <div className="w-full h-16 bg-green-100 flex flex-col items-center justify-center gap-1">
            <div className="text-sm text-color4">قیمت واحد</div>
            <span className="text-color4 font-semibold">
            {new Intl.NumberFormat('fa-IR').format(110000000)}
            تومان
            </span>
            </div>
        </div>
      </div>
    </>
  );
}
