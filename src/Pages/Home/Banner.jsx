import logo from "../../assets/OO715K1.png";
import img1 from "../../assets/lotus-esmaul-husna-altin-renk_2_1800x180017028308051703061736.webp";
import img2 from "../../assets/lotus-esmaul-husna-metal-tablo-altin-renk-uv-_31701336494.jpg";
import img3 from "../../assets/3D-Colorful-Metal-99-Names-of-Allah-Wall-Art-Asmaul-Husna-Gold-in-Qatar-2-600x60017028308051703061736.jpg";
import check from "../../assets/check.webp";
import check2 from "../../assets/Screenshot 2024-07-27 121120.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      {/* Banner start */}
      <div className="bg-[#2c6036] px-4 relative">
        <div className="text-center pt-4 max-w-screen-xl mx-auto p-5 pb-28">
          <img className="inline" src={logo} alt="logo-image" />
          <h2 className="lg:text-5xl md:text-4xl border-4 font-bold p-4 mt-12 border-[#F1FF00] text-[#F1FF00] border-double">
            আল্লাহ এবং আল্লাহুর ৯৯ গুনবাচক নাম সমূহ
          </h2>
          <h3 className="text-[#63E5FF] md:text-2xl font-bold mt-4">
            ক্যালিগ্রাফি তো দেয়ালে সবাই লাগায় কিন্তু সেটা যদি হয় আল্লাহর ৯৯
            নাম থ্রিডি ইসলামিক ক্যালিগ্রাফির যা আল্লাহর ৯৯ নাম ফজিলতের কথা স্মরণ
            করিয়ে দিবে !!
          </h3>
        </div>
        <div className="shapes -bottom-2 left-0"></div>
      </div>
      {/* youtube video  */}
      <div className="max-w-screen-xl mx-auto px-4">
        <iframe
          className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
          src="https://www.youtube.com/embed/qL4ByxSi5G8?si=AKYp0Ho8XH_HNJ70"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* button  */}
      <div className="mt-12 text-center">
        <button className="bg-[#BB2121] md:text-3xl font-bold px-6 py-4 shadow-xl rounded-lg text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
          অর্ডার করতে চাই
        </button>
      </div>
      {/* section  */}
      <div className="max-w-screen-xl mx-auto px-4 text-center mt-12">
        <h1 className="bg-[#2c6036] rounded-xl p-8 text-white md:text-4xl font-bold shadow-lg">
          Allah 99 Names হতে পারে সব থেকে দামি উপহার কারণ আল্লাহ বলেন কোন বান্দা
          আমাকে স্মরণ করলে আমিও তাকে স্মরণ করি।
        </h1>
      </div>
      {/* Carosel or Swiper */}
      <div className="mt-12 max-w-screen-xl mx-auto px-4 ">
        <div className="border-[9px] border-[#2c6036] p-12">
          <h1 className="text-center  rounded-xl p-3 bg-[#2c6036] text-white md:text-3xl font-bold">
            কালার গ্যারান্টি আজীবন!!!
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper mt-12"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
          </Swiper>
          {/* button  */}
          <div className="mt-12 text-center">
            <button className="bg-[#BB2121] md:text-3xl font-bold px-6 py-4 shadow-xl rounded-lg text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
              অর্ডার করতে চাই
            </button>
          </div>
        </div>
      </div>
      {/* ক্যালিগ্রাফী এর তৈরিকরণ  sections */}
      <div className="px-6">
        <div className="max-w-screen-xl mx-auto px-4 mt-12 border-[9px] border-[#2c6036] p-12 font-bold text-xl">
          {/*ক্যালিগ্রাফী এর তৈরিকরণ   */}
          <div className="shadow-2xl p-5 rounded-2xl">
            <h2 className="">ক্যালিগ্রাফী এর তৈরিকরণ ।</h2>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p> আল্লাহু এবং আল্লাহর গুনবাচক ৯৯ নাম</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p> ঝুলানো সহজ (ওয়াল আর্টের পিছনে টুথ হ্যাঙ্গার)</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p>
                {" "}
                সুন্দর 3D Effect পেতে ক্যালিগ্রাফি এর পাঁপড়ি গুলা বাঁকা করতে
                হবে।
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p> Size (20/20 inch)</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p>
                {" "}
                মেটেরিয়ালসঃ (Ms) লোহার পাতের উপর গ্যালভানাইজিং
                প্রক্রিয়ায়স্টেইনলেস স্টিল এর প্রলেপ দেওয়া
              </p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p> হয়েছে যার ফলে মরিচা পরবে না কখনই</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p> কালার গ্যারান্টি আজীবন।</p>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <img className="w-6" src={check} alt="" />
              <p>পুরুত্ত - ০.৮ মি.মি.</p>
            </div>
          </div>
          {/* Price Section */}
          <div className="mt-5 shadow-2xl rounded-2xl bg-white ">
            <img className="lg:max-w-screen-md mx-auto" src={check2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
