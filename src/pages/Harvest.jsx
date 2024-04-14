

export default function Harvest() {
  return (
    <>
     <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-between p-4 border border-gray-500 bg-white rounded-lg shadow-xl">
           <div className="flex items-center gap-3">
             <span className="text-color3 font-bold">سطح شما :</span>
             <span className="text-[#FDCB44]">کاربر عادی</span>
           </div>
           <div className="flex items-center gap-3">
             <span className="text-color3 font-bold"> میزان حد اعتباری شما :</span>
             <span className="text-[#FDCB44]">
             {new Intl.NumberFormat('fa-IR').format(1000000000)}
             </span>
             <span className="text-color3">تومان</span>
           </div>
       </div>
       <div
       className={`border border-gray-500 bg-white rounded-lg shadow-xl  mt-10 p-2`}
      >
        <div className="w-full flex items-center justify-between text-lg py-3 text-color4 font-semibold">
          <span>برداشت </span>
          <span className="text-sm">
          {new Intl.NumberFormat("fa-IR").format(1000000)}
           ت </span>
        </div>
        <div className="flex flex-col  gap-3 items-center border md:w-2/4 p-1 md:p-3 border-gray-400 rounded-lg md:mx-auto">
          <div className="w-full" dir="ltr">
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
          <div className="w-full">
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
          <div className="w-full">
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
          <div className="w-full flex gap-2 items-end justify-center h-[65px]">
            <span
            className="cursor-pointer w-1/2 text-white py-1.5 bg-red-700 rounded-lg flex items-center justify-center">
              رد
            </span>
            <span className="cursor-pointer w-1/2 text-white py-1.5 bg-green-700 rounded-lg flex items-center justify-center">
              تایید
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
