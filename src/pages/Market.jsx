import { useState, useEffect } from "react";
const people = [
  {
    id: 1,
    name: "بیت کویین",
    price: [100, 110, 900, 200, 300, 100],
    role: "10",
    image: "/img/BTC.png",
    inventory: 1500000,
  },
  {
    id: 2,
    name: "دوج",
    price: [100, 900, 910, 200, 400, 300],
    role: "1",
    image: "/img/DOGE.png",
    inventory: 0,
  },
  {
    id: 3,
    name: "باینس",
    price: [100, 110, 900, 200, 300, 120],
    role: "1",
    image: "/img/BNB.png",
    inventory: 4500000,
  },
  // More people...
];

export default function Market() {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedPersonName, setSelectedPersonName] = useState("");
  const [selectedPersonPrice, setSelectedPersonPrice] = useState("");
  const [selectedPersonImg, setSelectedPersonImg] = useState("");
  const [updatedPeople, setUpdatedPeople] = useState(people);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedPeople((prevPeople) => {
        const updatedPrices = prevPeople.map((person, index) => {
          if (index === currentIndex) {
            const randomChange = Math.floor(Math.random() * 201) - 100; // Generate random change (-100 to 100)
            const newPrice =
              person.price[person.price.length - 1] + randomChange;
            return {
              ...person,
              price: [...person.price.slice(1), newPrice], // Update the last price in the array
            };
          }
          return person;
        });

        setCurrentIndex((prevIndex) => (prevIndex + 1) % prevPeople.length);
        return updatedPrices;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleTransactionClick = (personName, personInventory, personImg) => {
    setShowSecondDiv(true);
    setSelectedPersonName(personName);
    setSelectedPersonPrice(personInventory);
    setSelectedPersonImg(personImg);
  };

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-between p-4 border border-gray-500 bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="text-color3 font-bold">بازارها :</span>
          <span className="text-[#FDCB44]">لیست ارزها </span>
        </div>
        <div className="flex items-center gap-3"></div>
      </div>
      <div className="border border-gray-500 bg-white rounded-lg shadow-xl mt-10 overflow-hidden">
        <div className="mt-8 md:flow-root">
          <div className="md:-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      نام ارز
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      قیمت
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      مقدار
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                    >
                      عملیات
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {updatedPeople.map((person) => (
                    <tr key={person.id}>
                      <td className="whitespace-nowrap flex items-center justify-center py-2 text-center   text-sm text-gray-500">
                        <div className="flex flex-col items-center justify-center w-10">
                          <div className="h-8 w-8 flex-shrink-0">
                            <img
                              className="h-8 w-8 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="whitespace-nowrap text-center text-sm text-gray-500">
                        <span
                          className={`${
                            person.price[person.price.length - 1] >
                            person.price[person.price.length - 2]
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {new Intl.NumberFormat("fa-IR").format(
                            person.price[person.price.length - 1]
                          )}{" "}
                          <span>
                            {person.price[person.price.length - 1] >
                            person.price[person.price.length - 2]
                              ? "+"
                              : "-"}
                          </span>
                        </span>
                      </td>

                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                        <span
                          onClick={() =>
                            handleTransactionClick(
                              person.name,
                              person.inventory,
                              person.image
                            )
                          }
                          className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium ${
                            person.price[person.price.length - 1] >
                            person.price[person.price.length - 2]
                              ? "bg-green-50 text-green-500"
                              : "bg-red-50 text-red-500"
                          }`}
                        >
                          معامله
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around flex-col md:flex-row mt-10">
        <div
          className={`w-[290px] lg:w-[350px] h-[245px] rounded-lg border border-gray-500 shadow-lg bg-white p-2 ${
            showSecondDiv ? "" : "hidden"
          }`}
        >
          <div className="w-full py-2 text-color4 text-lg font-semibold flex items-center justify-between border-b border-gray-600">
            <div className="w-1/3 flex items-center justify-center">خرید</div>
            <div className="w-1/3 flex items-center justify-center">
              <img src={selectedPersonImg} className="w-6" alt="" />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              {selectedPersonName}
            </div>
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="name"
              className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-color4"
            >
              مقدار
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="مقدار را وارد کنید"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="name"
              className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-color4"
            >
              قیمت واحد(تومان)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="قیمت را وارد کنید"
            />
          </div>
          <div className="w-full py-2 text-color4 text-sm  flex items-center justify-between border-b  border-gray-600">
            <div>موجودی(تومان)</div>
            <div>
              {new Intl.NumberFormat("fa-IR").format(selectedPersonPrice)}
            </div>
          </div>
          <div className="w-full  h-10 mt-1">
            <span className="w-full h-10 bg-green-600 rounded-md flex items-center justify-center text-white hover:border-2 cursor-pointer hover:border-green-600 hover:bg-white hover:text-green-600">
              خرید
            </span>
          </div>
        </div>
        <div
          className={`w-[290px] lg:w-[350px] h-[245px] rounded-lg border border-gray-500 shadow-lg bg-white p-2 ${
            showSecondDiv ? "" : "hidden"
          }`}
        >
          <div className="w-full py-2 text-color4 text-lg font-semibold flex items-center justify-between border-b border-gray-600">
            <div className="w-1/3 flex items-center justify-center">فروش</div>
            <div className="w-1/3 flex items-center justify-center">
              <img src={selectedPersonImg} className="w-6" alt="" />
            </div>
            <div className="w-1/3 flex items-center justify-center">
              {selectedPersonName}
            </div>
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="name"
              className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-color4"
            >
              مقدار
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="مقدار را وارد کنید"
            />
          </div>
          <div className="relative mt-4">
            <label
              htmlFor="name"
              className="absolute -top-2 right-2 inline-block bg-white px-1 text-xs font-medium text-color4"
            >
              قیمت واحد(تومان)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full pr-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="قیمت را وارد کنید"
            />
          </div>
          <div className="w-full py-2 text-color4 text-sm  flex items-center justify-between border-b  border-gray-600">
            <div>موجودی(تومان)</div>
            <div>
              {new Intl.NumberFormat("fa-IR").format(selectedPersonPrice)}
            </div>
          </div>
          <div className="w-full  h-10 mt-1">
            <span className="w-full h-10 bg-red-600 rounded-md flex items-center justify-center text-white hover:border-2 cursor-pointer hover:border-red-600 hover:bg-white hover:text-red-600">
              فروش
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
