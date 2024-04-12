import BoxDashboard from "../components/BoxDashboard";
import BoxDashboardOrder from "../components/BoxDashboardOrder";
import BoxMyBag from "../components/BoxMyBag";
import { TfiWallet } from "react-icons/tfi";
import { HiOutlineWallet } from "react-icons/hi2";
import { TbCurrencyIranianRial } from "react-icons/tb";
import { CiMoneyCheck1 } from "react-icons/ci";
import { RiVipFill } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";


const walletBag = [
  {
    id: 1,
    name: "کیف پول ریالی",
    icon: <TbCurrencyIranianRial />,
    price: 10000,
  },
  { id: 2, name: "کیف پول درگاه اینترنتی", icon: <TfiWallet />, price: 10000 },
  { id: 3, name: "کیف  ریالی حساب", icon: <HiOutlineWallet />, price: 10000 },
  { id: 4, name: "کیف  ریالی چک", icon: <CiMoneyCheck1 />, price: 10000 },
  { id: 5, name: "کیف  ریالی VIP", icon: <RiVipFill />, price: 10000 },
  { id: 6, name: "کیف پول کارت", icon: <FaRegCreditCard />, price: 10000 },
];

export default function MyBag() {
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
            {new Intl.NumberFormat("fa-IR").format(1000000000)}
          </span>
          <span className="text-color3">تومان</span>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {walletBag.map((item) => (
            <BoxMyBag
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <BoxDashboard />
      </div>
      <div className="mt-10">
        <h3 className="text-color4 font-semibold text-lg py-2">سفارشات باز</h3>
        <BoxDashboardOrder />
      </div>
    </>
  );
}
