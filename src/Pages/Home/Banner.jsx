import logo from "../../assets/OO715K1.png";
import img1 from "../../assets/lotus-esmaul-husna-altin-renk_2_1800x180017028308051703061736.webp";
import img2 from "../../assets/lotus-esmaul-husna-metal-tablo-altin-renk-uv-_31701336494.jpg";
import img3 from "../../assets/3D-Colorful-Metal-99-Names-of-Allah-Wall-Art-Asmaul-Husna-Gold-in-Qatar-2-600x60017028308051703061736.jpg";
import check from "../../assets/check.webp";
import check2 from "../../assets/Screenshot 2024-07-27 121120.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { ItemContext } from "../../App";
import { base_url } from "../../utilities/dataPanel";

const Banner = () => {
  // const {name} = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === "4567");
    console.log(itmFind);
    setLanding([itmFind]);
    setLoader(false);
  }, [itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };

  return (
    <>
      {loader ? (
        "loding"
      ) : (
        <div>
          {/* Banner start */}
          <div className="bg-[#2c6036] px-4 relative">
            <div className="text-center pt-4 max-w-screen-xl mx-auto p-5 pb-28">
              <img className="inline" src={logo} alt="logo-image" />
              <h2 className="lg:text-5xl md:text-4xl border-4 font-bold p-4 mt-12 border-[#F1FF00] text-[#F1FF00] border-double">
                {formatStyle("custom_head_1")}
              </h2>
              <h3 className="text-[#63E5FF] md:text-2xl font-bold mt-4">
                {formatStyle("custom_head_2")}
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
          {/* common button */}
          <div className="mt-12 text-center">
            <button className="bg-[#BB2121] md:text-3xl font-bold px-6 py-4 shadow-xl rounded-lg text-white border-2 border-white hover:bg-[#2c6036] hover:scale-95 transition duration-200">
              অর্ডার করতে চাই
            </button>
          </div>
          {/* text section  */}
          <div className="max-w-screen-xl mx-auto px-4 text-center mt-12">
            <h1 className="bg-[#2c6036] rounded-xl p-8 text-white md:text-4xl font-bold shadow-lg">
              {formatStyle("custom_text_3")}
            </h1>
          </div>
          {/* Carosel or Swiper */}
          <div className="mt-12 max-w-screen-xl mx-auto px-4 ">
            <div className="border-[9px] border-[#2c6036] p-12">
              <h1 className="text-center  rounded-xl p-3 bg-[#2c6036] text-white md:text-3xl font-bold">
                {formatStyle("custom_text_4")}
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
                  <img
                    src={`${base_url + landing[0]?.custom_upload_text_image_1}`}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${base_url + landing[0]?.custom_upload_text_image_2}`}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${base_url + landing[0]?.custom_upload_text_image_3}`}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${base_url + landing[0]?.custom_upload_text_image_1}`}
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={`${base_url + landing[0]?.custom_upload_text_image_2}`}
                    alt=""
                  />
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
                <h2 className="">{formatStyle("custom_text_5")}</h2>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_6")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_7")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_8")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_9")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_10")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_11")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_12")}</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img className="w-6" src={check} alt="" />
                  <p>{formatStyle("custom_text_13")}</p>
                </div>
              </div>
              {/* Price Section */}
              <div className="mt-5 shadow-2xl rounded-2xl bg-white ">
                <img
                  className="lg:max-w-screen-md mx-auto"
                  src={`${base_url + landing[0]?.custom_upload_text_image_4}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
