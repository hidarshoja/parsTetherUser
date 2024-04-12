import React from "react";

export default function Password() {
  return (
    <>
      <div className="mx-auto w-full md:w-[80%]  h-auto py-2 px-3 border mt-10 border-gray-500 rounded-lg">
        <div className="w-full text-color4 text-lg py-2">تغییر پسورد</div>
        <div className="flex flex-col  w-full gap-3">
          <div className="w-full">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              رمز عبور فعلی *
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="firstName"
                id="first-name"
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                dir="ltr"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="nationalCode"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              رمز عبور جدید *
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="nationalCode"
                id="nationalCode"
                dir="ltr"
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="Mobile"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              تکرار رمز عبور جدید *
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="Mobile"
                id="Mobile"
                dir="ltr"
                className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <span className="w-full md:w-1/2 lg:w-1/3 py-1.5 text-color4 flex items-center justify-center border-2 rounded-md border-green-600 hover:bg-green-600 hover:text-white">
              ثبت
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
