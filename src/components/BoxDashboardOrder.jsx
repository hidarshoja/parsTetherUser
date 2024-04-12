

const people = [
  {
    id: 1,
    name: "بیت کویین",
    time: "1402-10-12",
    role: "10",
    Volume: "10",
  },
  {
    id: 2,
    name: "دوج",
    time: "1402-10-10",
    role: "11",
    Volume: "12",
  },
  {
    id: 3,
    name: "باینس",
    time: "1402-11-12",
    role: "1",
    Volume: "15",
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
                    زمان
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
                    حجم (به درصد)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    وضعیت
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.id}>
                   <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                      <div className="text-gray-900">{person.name}</div>
                    </td>
                    <td className="whitespace-nowrap  text-center   text-sm text-gray-500">
                      <div className="text-gray-900">{person.time}</div>
                    </td>

                    <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                      {person.role}
                    </td>
                    <td className="whitespace-nowrap  text-center  text-sm text-gray-500">
                      {person.Volume}
                    </td>
                    <td className="whitespace-nowrap px-3 text-center py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                         انجام شده
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
                {person.name}
              </span>
              <span>
                  {person.time}
              </span>
            </div>
            <div className="w-full flex items-center justify-between border-t py-2">
              <span className="flex items-center gap-1">
               حجم پرشده به درصد :
              </span>
              <span className="flex items-center gap-1">
                {person.Volume}
              </span>
            </div>
            <div className="w-full flex items-center justify-between border-t py-2">
            <span className="flex items-center gap-1">
                  مقدار :
              </span>
              <span className="flex items-center gap-1">
                  {person.role}
              </span>
            </div>
            <div className="w-full flex items-center justify-between border-t py-2">
            <span className="flex items-center gap-1">
                  وضعیت :
              </span>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                انجام شده
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
