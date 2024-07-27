import { useForm } from "react-hook-form";
import { IoMdArrowDropup } from "react-icons/io";
import logo from "../../assets/lotus-esmaul-husna-metal-tablo-altin-renk-uv-_31701336494.jpg";
import check from "../../assets/check.webp";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-8 px-6 pb-12">
      <div className="max-w-screen-xl border-[8px] rounded-xl border-[#2c6036] mx-auto px-6 pt-8 pb-16">
        <h1 className="bg-[#2c6036] p-4 rounded-lg text-center text-xl md:text-4xl text-white font-bold">
        অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরন করুন
        </h1>
        {/* order page  */}
        <div className="flex flex-col md:flex-row gap-8 justify-between mt-8 ">
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Billing details</h2>
            {/* form Start  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 ">
                <label className="block text-sm mb-2">
                  আপনার নাম লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block text-sm border border-black w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার ঠিকানা লিখুন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline rounded py-3 px-4 block border border-black text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">ঠিকানার তথ্যটি প্রয়োজনীয়</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার মোবাইল নাম্বারটি লিখুন
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline  rounded py-3 px-4 block border border-black text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ফোন নম্বর লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">
                    আপনার সম্পূর্ণ ফোন নম্বর তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ডেলিভারি এলাকা নির্বাচন করুন
                  <span className="text-red-500">*</span>
                </label>
                <select className="w-full border p-3 border-black rounded mt-2">
                  <option value="ঢাকার ভিতর">ঢাকার ভিতর</option>
                  <option value="ঢাকার বাহির">ঢাকার বাহির</option>
                </select>
                {errors.phone && (
                  <p className="text-red-600">
                    আপনার সম্পূর্ণ ফোন নম্বর তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
            </form>
          </div>
          {/*Your  order  */}
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-24 rounded" src={logo} alt="" />
                <p>Allah Islamic Wall Art 3D Metal 99 Names</p>
              </div>
              <div>
                <p>1850.00</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p>Select Quantity:</p>
              <div className="flex border cursor-pointer items-center gap-4 text-xl font-bold">
                <p className="border px-3">-</p>
                <p>0</p>
                <p className="border px-3">+</p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div>
                <p className="text-end">2,590.00 $</p>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <p className="text-end">90.00 $</p>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>2,670.00 ৳</p>
            </div>
            <div className="bg-[#f4f8fa] relative p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img className="w-6" src={check} alt="" />
                  Cash on delivery
                </div>
              </div>
              <div className="absolute top-6 left-6">
                <IoMdArrowDropup className="text-6xl text-[#eaeaea]" />
              </div>
              <p className="p-4 bg-[#eaeaea] mt-4 text-sm">
                Pay with cash on delivery.
              </p>
            </div>
            <p className="mt-2 text-[#2c6036] text-[16px]">
              * ১০০% শিউর হয়ে অর্ডার করুন,অহেতুক অর্ডার করবেন না ।
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-6 font-bold text-white rounded-full bg-[#2c6036] border-white hover:bg-black">
                অর্ডার সম্পূর্ণ করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
