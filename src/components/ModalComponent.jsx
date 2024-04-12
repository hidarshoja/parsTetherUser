import React from "react";

export default function ModalComponent({ onClose, children }) {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-gray-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 h-64 sm:align-middle w-[80%] md:max-w-xl sm:w-full relative border-4 border-gray-600">
          <div className="bg-gray-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="text-right text-white sm:flex-grow">
                {children}
              </div>
            </div>
          </div>
          <div className="bg-gray-500 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse absolute bottom-1 left-1">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
