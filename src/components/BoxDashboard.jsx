import { Link } from "react-router-dom";

const people = [
  {
    id: 1,
    name: "بیت کویین",
    price: 1000000,
    role: "10",
    image: "/img/BTC.png",
  },
  {
    id: 2,
    name: "دوج",
    price: 300000,
    role: "1",
    image: "/img/DOGE.png",
  },
  {
    id: 3,
    name: "باینس",
    price: 370000,
    role: "1",
    image: "/img/BNB.png",
  },
  {
    id: 4,
    name: "اتریوم",
    price: 1000000,
    role: "10",
    image: "/img/ETH.png",
  },
  {
    id: 5,
    name: "ترون",
    price: 300000,
    role: "1",
    image: "/img/TRX.png",
  },
  {
    id: 6,
    name: "هزارشیبا",
    price: 370000,
    role: "1",
    image: "/img/XRP.png",
  },

  // More people...
];

export default function BoxDashboard() {
  return (
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
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    حسابداری
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap flex items-center justify-center py-2 text-center   text-sm text-gray-500">
                      <div className="flex w-12 flex-col justify-center items-center">
                        <div className="flex items-center justify-center h-11 w-11 flex-shrink-0">
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
                    <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                      <div className="text-gray-900">
                        {new Intl.NumberFormat("fa-IR").format(person.price)}
                      </div>
                    </td>

                    <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                      <Link to="/SellAndBuy">
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-green-500 px-2 py-1 text-xs font-medium text-green-100 ring-1 ring-inset ring-green-600/20">
                          خرید
                        </span>
                      </Link>
                      <Link to="/SellAndBuy">
                        <span className="inline-flex mr-1 cursor-pointer items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-green-100 ring-1 ring-inset ring-green-600/20">
                          فروش
                        </span>
                      </Link>
                    </td>
                    <td className="whitespace-nowrap  px-3  text-center py-5 text-sm text-gray-500">
                      <Link to="/deposit">
                        <span className="inline-flex items-center cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-xs font-medium text-green-100 ring-1 ring-inset ring-green-600/20">
                          واریز
                        </span>
                      </Link>
                      <Link to="/deposit">
                        <span className="inline-flex mr-1 cursor-pointer items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-green-100 ring-1 ring-inset ring-green-600/20">
                          برداشت
                        </span>
                      </Link>
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
                <span> قیمت :</span>
                {new Intl.NumberFormat("fa-IR").format(person.price)}
              </span>
              <span className="flex items-center gap-1">
                <span>مقدار :</span>
                <span>{person.role}</span>
              </span>
            </div>
            <div className="w-full flex items-center justify-between border-t py-2">
              <Link to="/SellAndBuy">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  خرید
                </span>
              </Link>
              <Link to="/SellAndBuy">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  فروش
                </span>
              </Link>
            </div>
            <div className="w-full flex items-center justify-between border-t py-2">
              <Link to="/deposit">
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                واریز
              </span>

              </Link>
              <Link to="/deposit">

              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                برداشت
              </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
