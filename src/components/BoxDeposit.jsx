import { useState } from "react";
import { Navigate , useNavigate } from "react-router-dom";
export default function BoxDeposit() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showHarvestDiv, setShowHarvestDiv] = useState(false);
  const [selectedPersonName, setSelectedPersonName] = useState("");
  const [selectedPersonPrice, setSelectedPersonPrice] = useState("");
  const navigate = useNavigate();
  const people = [
    {
      id: 1,
      name: "ریالی",
      price: 1000000,
      role: "+10",
      image: "/img/BTC.png",
    },
    {
      id: 2,
      name: "BTC",
      price: 300000,
      role: "-1",
      image: "/img/DOGE.png",
    },
    {
      id: 3,
      name: "باینس",
      price: 370000,
      role: "-100",
      image: "/img/BNB.png",
    },
    {
      id : 4 ,   
      name: 'اتریوم',
      price: 1000000,
      role: '10',
      image:'/img/ETH.png',
    },
    {
        id : 5 ,   
        name: 'ترون',
        price: 300000,
        role: '1',
        image:'/img/TRX.png',
      },
      {
        id : 6 ,   
        name: 'هزارشیبا',
        price: 370000,
        role: '1',
        image:'/img/XRP.png',
      }
  ];

  const handleTransactionClick = (personName, personInventory) => {
    setShowSecondDiv(true);
    setSelectedPersonName(personName);
    setSelectedPersonPrice(personInventory);
  };

  const handleHarvestClick = (personName, personInventory) => {
    setShowHarvestDiv(true);
    setSelectedPersonName(personName);
    setSelectedPersonPrice(personInventory);
  };

  const handleNavigateToDetails = (name) => {
    navigate('/deposit/details', { state: { name: name } });
  };

  return (
    <>
      <div className="border  border-gray-500 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="hidden mt-8 md:flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      مجموع مانده
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      TRT
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      واحد
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      #
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap flex items-center justify-center py-2 text-center   text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            <img
                              className="h-11 w-11 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="mr-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                        <div className="text-gray-900">
                          {new Intl.NumberFormat("fa-IR").format(person.price)}
                        </div>
                      </td>

                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        <span
                          onClick={() => handleNavigateToDetails(person.name)}
                          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium cursor-pointer text-green-700 ring-1 ring-inset ring-green-600/20"
                        >
                          جزییات
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 text-center py-5 text-sm text-gray-500">
                        <span
                          onClick={() =>
                            handleTransactionClick(person.name, person.price)
                          }
                          className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset cursor-pointer ring-green-600/20"
                        >
                          واریز
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 text-center py-5 text-sm text-gray-500">
                        <span
                          onClick={() =>
                            handleHarvestClick(person.name, person.price)
                          }
                          className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 cursor-pointer"
                        >
                          برداشت
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap md:hidden p-3 gap-2">
          {people.map((person) => (
            <div
              key={person.id}
              className="w-[290px]  h-auto border flex flex-col items-center justify-between  border-gray-500 bg-color4 text-white p-2 rounded-lg shadow-xl"
            >
              <div className="w-full flex items-center justify-between bg-color5 py-2 px-1">
                <span>
                  <img src={person.image} className="w-8" alt="" />
                </span>
                <span>{person.name}</span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span className="flex items-center gap-1">
                  <span> TRT :</span>
                  {new Intl.NumberFormat("fa-IR").format(person.price)}
                </span>
                <span className="flex items-center gap-1">
                  <span>واحد :</span>
                  <span>{person.role}</span>
                </span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span
                 onClick={() =>
                  handleTransactionClick(person.name, person.price)
                }
                className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  واریز
                </span>
                <span
                 onClick={() =>
                  handleHarvestClick(person.name, person.price)
                }
                className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  برداشت
                </span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span 
                onClick={() => handleNavigateToDetails(person.name)}
                className="w-full inline-flex items-center justify-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  جزییات
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* واریز */}
      <div
        className={`border border-gray-500 bg-white rounded-lg shadow-xl  mt-10 p-2 ${
          showSecondDiv ? "" : "hidden"
        }`}
      >
        <div className="w-full flex items-center justify-between text-lg py-3 text-color4 font-semibold">
          <span>واریز {selectedPersonName}</span>
          <span className="text-sm">
            {new Intl.NumberFormat("fa-IR").format(selectedPersonPrice)}ت{" "}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-1/4" dir="ltr">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
              dir="rtl"
            >
              شماره شبا
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <span className="h-full flex items-center justify-center bg-gray-500 rounded-l-md border-0 bg-transparent py-0 pl-5  text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  IR
                </span>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="198765434556098.1"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-medium leading-6 text-color4">
              نام بانک
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="نام بانک"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 pr-2 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-medium leading-6 text-color4">
              شناسه واریز
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="شناسه واریز"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 pr-2 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 flex gap-2 items-end justify-center h-[65px]">
            <span
              onClick={() => setShowSecondDiv(false)}
              className="cursor-pointer w-1/2 text-white py-1.5 bg-red-700 rounded-lg flex items-center justify-center"
            >
              رد
            </span>
            <span className="cursor-pointer w-1/2 text-white py-1.5 bg-green-700 rounded-lg flex items-center justify-center">
              تایید
            </span>
          </div>
        </div>
      </div>
      {/* برداشت */}
      <div
        className={`border border-gray-500 bg-white rounded-lg shadow-xl  mt-10 p-2 ${
          showHarvestDiv ? "" : "hidden"
        }`}
      >
        <div className="w-full flex items-center justify-between text-lg py-3 text-color4 font-semibold">
          <span>برداشت {selectedPersonName}</span>
          <span className="text-sm">
            {new Intl.NumberFormat("fa-IR").format(selectedPersonPrice)}ت{" "}
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="w-full md:w-1/4" dir="ltr">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
              dir="rtl"
            >
              شماره شبا
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <span className="h-full flex items-center justify-center bg-gray-500 rounded-l-md border-0 bg-transparent py-0 pl-5  text-gray-100 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                  IR
                </span>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="198765434556098.1"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-medium leading-6 text-color4">
              نام بانک
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="نام بانک"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 pr-2 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-sm font-medium leading-6 text-color4">
              شناسه واریز
            </label>
            <div className="mt-2">
              <input
                type="text"
                placeholder="شناسه واریز"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 pr-2 disabled:ring-gray-200 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 flex gap-2 items-end justify-center h-[65px]">
            <span
              onClick={() => setShowHarvestDiv(false)}
              className="cursor-pointer w-1/2 text-white py-1.5 bg-red-700 rounded-lg flex items-center justify-center"
            >
              رد
            </span>
            <span className="cursor-pointer w-1/2 text-white py-1.5 bg-green-700 rounded-lg flex items-center justify-center">
              تایید
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
