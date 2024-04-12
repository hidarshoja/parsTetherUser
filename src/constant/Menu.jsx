export const navigation = [
    { name: "داشبورد", href: "/", current: false , src : "/img/menu3.svg" },
    { name: "کیف من", href: "/myBag", current: false , src : "/img/menu4.svg" },
    { name: "بازار", href: "/market", current: false , src : "/img/menu6.svg" },
    {
      name: "حسابداری",
      current: false, src :"/img/menu5.svg",
      children: [
        { name: "واریز", href: "deposit" },
        { name: "برداشت", href: "harvest" },
      ],
    },
    { name: "پرفایل", href: "/profile", current: false , src : "/img/menu8.svg" },
    { name: "رمز عبور", href: "/password", current: false , src : "/img/menu9.svg" },
  ];