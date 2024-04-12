import BoxDashboard from "../components/BoxDashboard";
import BoxDashboardOrder from "../components/BoxDashboardOrder";

export default function Dashboard() {
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
        <div className="mt-10">
          <BoxDashboard />
       </div>
      <div className="mt-10">
        <h3 className="text-color4 font-semibold text-lg py-2">سفارشات باز</h3>
          <BoxDashboardOrder />
       </div>
    </>
  )
}
