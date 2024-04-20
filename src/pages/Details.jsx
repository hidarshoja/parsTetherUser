import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ModalComponent from "../components/ModalComponent";

export default function Details() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const people = [
    {
      id: 1,
      data: "1402-10-12",
      price: 1000000,
      role: "10",
      state: "درانتظار",
      remaining: 1000000,
      dic: "من یک پرنده ام ",
    },
    {
      id: 2,
      data: "1402-11-13",
      price: 300000,
      role: "1",
      state: "موفق",
      remaining: 11000000,
      dic: "من یک برنامه نویس ام ",
    },
    {
      id: 3,
      data: "1403-01-05",
      price: 370000,
      role: "1",
      state: "ناموفق",
      remaining: 400000,
      dic: "من یک  بجنوردی هستم ",
    },
    // More people...
  ];

  const location = useLocation();
  const name = location.state ? location.state.name : null;

  const handleViewClick = (person) => {
    setSelectedPerson(person);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p className="py-3 text-color4 font-semibold">جزییات کیف {name}</p>
      <div className="border border-gray-500 bg-white rounded-lg shadow-xl overflow-hidden">
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
                      تاریخ
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      مبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      نوع تراکنش
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      توضیحات
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      وضعیت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      مانده
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                        <div className="text-gray-900">{person.data}</div>
                      </td>
                      <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                        <div className="text-gray-900">
                          {new Intl.NumberFormat("fa-IR").format(person.price)}
                        </div>
                      </td>

                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        <select
                          name=""
                          id=""
                          className="w-18 border border-gray-400 py-0.5 rounded-md text-[12px]"
                        >
                          <option value="1">واریز</option>
                          <option value="2">برداشت</option>
                          <option value="3">خرید</option>
                          <option value="4">فروش</option>
                        </select>
                      </td>
                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        <span
                          onClick={() => handleViewClick(person)}
                          className=" px-2 py-0.5 text-xs font-medium border border-gray-400 rounded-md cursor-pointer"
                        >
                          مشاهده
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 text-center py-5 text-sm text-gray-500">
                        <span
                          className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getColorClass(
                            person.state
                          )}`}
                        >
                          {person.state}
                        </span>
                      </td>
                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        {new Intl.NumberFormat("fa-IR").format(
                          person.remaining
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                {isModalOpen && (
                  <ModalComponent onClose={handleCloseModal}>
                    <div className="p-5">{selectedPerson.dic}</div>
                  </ModalComponent>
                )}
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap md:hidden p-3 gap-2">
          {people.map((person) => (
            <div
              key={person.id}
              className="w-full sm:w-[290px]  h-auto border flex flex-col items-center justify-between  border-gray-500 bg-color4 text-white p-2 rounded-lg shadow-xl"
            >
              <div className="w-full flex items-center justify-between bg-color5 py-2 px-1">
                <span>تاریخ</span>
                <span>{person.data}</span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span className="flex items-center gap-1">مبلغ :</span>
                <span className="flex items-center gap-1">
                  {new Intl.NumberFormat("fa-IR").format(person.price)}
                </span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span className="flex items-center gap-1">نوع تراکنش :</span>

                <select
                  name=""
                  id=""
                  className="w-18 border border-gray-400 py-0.5 rounded-md text-[12px] text-gray-700"
                >
                  <option value="1">واریز</option>
                  <option value="2">برداشت</option>
                  <option value="3">خرید</option>
                  <option value="4">فروش</option>
                </select>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span className="flex items-center gap-1">وضعیت :</span>
                <span
                  className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getColorClass(
                    person.state
                  )}`}
                >
                  {person.state}
                </span>
              </div>
              <div className="w-full flex items-center justify-between border-t py-2">
                <span className="flex items-center gap-1"> توضیحات :</span>
                <span
                  onClick={() => handleViewClick(person)}
                  className=" px-2 py-0.5 text-xs font-medium border border-gray-400 rounded-md cursor-pointer"
                >
                  مشاهده
                </span>
              </div>
              {isModalOpen && (
                  <ModalComponent onClose={handleCloseModal}>
                    <div className="p-5">{selectedPerson.dic}</div>
                  </ModalComponent>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getColorClass(state) {
  switch (state) {
    case "موفق":
      return "bg-green-50 text-green-700 ring-green-600/20";
    case "ناموفق":
      return "bg-red-50 text-red-700 ring-red-600/20";
    case "درانتظار":
      return "bg-yellow-50 text-yellow-700 ring-yellow-600/20";
    default:
      return ""; // Default color if state doesn't match
  }
}
