import {  useNavigate } from "react-router-dom";

export default function BoxMyBag({ id, name, icon, price }) {

  const navigate = useNavigate();

  const handleNavigateToDeposit = () => {
    navigate('/deposit');
  };
  const handleNavigateToHarvest = () => {
    navigate('/harvest');
  }
  return (
    
      <div className="w-full flex flex-col shadow-xl  justify-between p-4 md:w-[350px] h-[220px] rounded-lg bg-green-950">
        <div className="flex items-center justify-between">
          <p className="text-color1">{name}</p>
          <span className="text-white text-2xl">{icon}</span>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <span className="text-color1">مبلغ :</span>
            <span className="text-green-600">{price}</span>
            <span className="text-color1">ریال</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div 
           onClick={() => handleNavigateToHarvest()} 
          className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-red-300 rounded-lg cursor-pointer">
            <button>
              <span>
                <img src="/img/money.png" width="35px" alt="money" />
              </span>
              <span 
              className="text-red-800 text-sm mt-2">برداشت</span>
            </button>
          </div>
          <div
          onClick={() => handleNavigateToDeposit()}
          className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-green-300 rounded-lg cursor-pointer">
            <span>
              <img src="/img/reports.png" width="35px" alt="money" />
            </span>
            <span
            className="text-green-800 text-sm mt-2">واریز</span>
          </div>
          <div className="flex flex-col items-center justify-between w-1/3 h-auto p-2 bg-blue-300 rounded-lg cursor-pointer">
            <button>
              <span>
                <img src="/img/convert.png" width="35px" alt="money" />
              </span>
              <span className="text-blue-800 text-sm mt-2">تبدیل</span>
            </button>
          </div>
        </div>
      </div>
    
  );
}
