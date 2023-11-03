import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import BX from "wow-bx24";
import validate from "validate.js";
import emailjs from "@emailjs/browser";

import Header2 from "./static/images/banner2.png";
import Header3 from "./static/images/banner3.png";

import Bg1 from "./static/images/bg1.png";
import Icon1 from "./static/images/icon1.png";
import Icon2 from "./static/images/icon2.png";
import Icon3 from "./static/images/icon3.png";
import Icon4 from "./static/images/icon4.png";
import Icon5 from "./static/images/icon5.png";
import Icon6 from "./static/images/icon6.png";
import Icon7 from "./static/images/icon7.png";
import Icon8 from "./static/images/icon8.png";
import Icon9 from "./static/images/icon9.png";
import Icon10 from "./static/images/icon10.png";
import Icon11 from "./static/images/icon11.png";
import Icon12 from "./static/images/icon12.png";
import Icon13 from "./static/images/icon13.png";
import Icon14 from "./static/images/icon14.png";
import Icon15 from "./static/images/icon15.png";
import Icon16 from "./static/images/icon16.png";
import Icon17 from "./static/images/icon17.png";
import Icon18 from "./static/images/icon18.png";
import Icon19 from "./static/images/icon19.png";
import Icon20 from "./static/images/icon20.png";

import Img1 from "./static/images/img1.png";
import Img2 from "./static/images/img2.png";
import Img3 from "./static/images/img3.png";
import Img4 from "./static/images/img4.png";
import Img5 from "./static/images/img5.png";
import Img6 from "./static/images/img6.png";
import Img7 from "./static/images/img7.png";
import Img8 from "./static/images/img8.png";
import Img9 from "./static/images/img9.png";
import Img10 from "./static/images/img10.png";
import Img11 from "./static/images/img11.png";
import Img12 from "./static/images/img12.png";
import Img13 from "./static/images/img13.png";
import Img14 from "./static/images/img14.png";
import Img15 from "./static/images/img15.png";
import Img16 from "./static/images/img16.png";
import Img17 from "./static/images/img17.png";
import Img18 from "./static/images/img18.png";
import Img19 from "./static/images/img19.png";
import Img20 from "./static/images/img20.png";
import Img21 from "./static/images/tht1.png";
import Img22 from "./static/images/tv1.png";

import Logo from "./static/images/Logo.png";

const $bx = new BX(
  "https://actioncoachcbd.bitrix24.com/rest/1186/i13eqbrjr4cs96oa/batch"
);
const timeNow = new Date();

const constraints = {
  name: {
    presence: { message: "Vui lòng nhập họ và tên." },
    length: {
      minimum: 3,
      tooShort: "Họ và tên không được ngắn hơn %{count} ký tự.",
      maximum: 50,
      tooLong: "Họ và tên không được dài hơn %{count} ký tự.",
    },
  },
  phone: {
    presence: { message: "Vui lòng nhập số điện thoại." },
    length: {
      minimum: 8,
      tooShort: "Số điện thoại không được ngắn hơn %{count} ký tự.",
      maximum: 12,
      tooLong: "Số điện thoại không được dài hơn %{count} ký tự.",
    },
  },
  email: {
    presence: { message: "Vui lòng nhập email." },
    email: {
      message: "Định dạng email không đúng.",
    },
  },
  company: {
    presence: { message: "Vui lòng nhập tên công ty" },
  },
  option: {
    presence: { message: "Vui lòng chọn hình thức học ." },
  },
  lesson: {
    presence: { message: "Vui lòng chọn chuyên đề huấn luyện." },
  },
};

function App() {
  const [load, setLoad] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [error, setError] = useState([]);
  const [successful, setSuccessful] = useState([false]);
  const [state, setState] = useState({
    title: "CRM_FORM_XDHT",
    name: "",
    phone: "",
    email: "",
    company: "",
    option: "",
    lesson: "",
    desiderate: "",
    time: "",
    rid: 1,
  });
  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("August 16,2022 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration]);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  const form = useRef();

  const sendEmail = (e) => {
    setLoad(true);
    e.preventDefault();
    const valid = validate(state, constraints);
    console.log(valid);
    if (valid) {
      setError(valid);
      setLoad(false);
      return;
    }
    emailjs
      .sendForm(
        "service_qon66wl",
        "template_0m528xu",
        form.current,
        "TSvnEW9Jk8F2qriDJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Đăng ký thành công.");
          setLoad(false);
          setSuccessful(true);
        },
        (error) => {
          console.log(error.text);
          alert("Vui lòng đăng ký lại.");
          setLoad(false);
        }
      );
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
      title: state.title + timeNow.toLocaleDateString(),
    });
    console.log(state);
  };

  return (
    <div>
      <div className="w-full bg-[#185ADB] md:bg-[#ffffff00] md:absolute z-[9999]">
        <div className="ed-container">
          <nav className="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className="w-[190px] h-[56px]">
                <img src={Logo} className="mr-3" alt="ActionCOACH CBD Firm" />
              </div>
              <div>
                <button
                  onClick={handleMenu}
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {openMenu ? (
                <div
                  className=" cl-12127 justify-between items-center w-full md:flex md:w-auto"
                  id="navbar-sticky"
                >
                  <ul className=" flex flex-col p-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-b md:bg-[#ffffff00]">
                    <li>
                      <a
                        href="#giang-vien"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIẢNG VIÊN
                      </a>
                    </li>
                    <li>
                      <a
                        href="#noi-dung"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        NỘI DUNG{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gia-tri"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIÁ TRỊ
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleModal}
                        className=" block md:hidden bg-white mt-2 rounded-lg py-2 px-10 hover:shadow-2xl text-[#1E1E1E]"
                      >
                        Đăng ký ngay
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  className=" cl-12127 hidden justify-between items-center w-full md:flex md:w-auto"
                  id="navbar-sticky"
                >
                  <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                    <li>
                      <a
                        href="#giang-vien"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIẢNG VIÊN
                      </a>
                    </li>
                    <li>
                      <a
                        href="#noi-dung"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        NỘI DUNG
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gia-tri"
                        className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        GIÁ TRỊ
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleModal}
                        className=" block md:hidden bg-white rounded-lg py-3 px-10 hover:shadow-2xl text-[#1E1E1E]"
                      >
                        Đăng ký ngay
                      </button>
                    </li>
                  </ul>
                </div>
              )}

              <div className="hidden md:block ">
                <button
                  onClick={handleModal}
                  className=" bg-white rounded-lg py-3 px-10 hover:shadow-2xl text-[#1E1E1E] cl-shake"
                >
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="hidden md:block relative px-4 md:px-0">
        <img src={Header2} className="w-full" />
        <div className=" absolute bottom-[-3rem] z-10 w-full">
          {/* <img onClick={handleModal} className="m-auto" src={Img17} /> */}
          <div className="ed-container bg-white grid grid-cols-4 p-[20px] rounded-2xl">
            <div className="col-span-3 text-center">
              <div className="text-[20px] uppercase font-[700] cl-b">
                CHÀO MỪNG BẠN ĐẾN VỚI CHƯƠNG TRÌNH{" "}
              </div>
              <div className="text-[20px] uppercase font-[700] cl-b">
                <span className="text-[30px]">HUẤN LUYỆN ONLINE</span> DÀNH CHO
                CHỦ DOANH NGHIỆP!
              </div>
            </div>
            <div className="col-span-1">
              <button
                onClick={handleModal}
                className="bg-b w-[100%] max-w-[210px] h-[60px] text-white rounded-lg text-[18px] cl-shake"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden ">
        <img onClick={handleModal} src={Header3} className="w-full" />
      </div>
      <div className="w-full block md:hidden">
        {/* <img onClick={handleModal} className="m-auto" src={Img17} /> */}
        <div className="ed-container bg-white grid grid-cols-4 p-[20px] rounded-2xl">
          <div className="col-span-4 text-center">
            <button
              onClick={handleModal}
              className="bg-b w-[100%] max-w-[210px] h-[60px] text-white rounded-lg text-[18px] cl-shake"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F3F3F3] pt-[30px] md:pt-[100px] px-4 md:px-0 ">
        <div className="ed-container">
          <div className="text-center hidden md:block">
            <h2>
              HÌNH THỨC <br className="block md:hidden" /> ĐÀO TẠO
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 pb-[30px] pt-0 md:py-[50px]">
            <div>
              <div className="hidden md:block">
                <button className="bg-b rounded-lg text-white px-4 py-2 w-full md:w-[350px]">
                  THÔNG TIN CHƯƠNG TRÌNH
                  <br className="block md:hidden" /> HUẤN LUYỆN
                </button>
              </div>
              <h2 className="mt-0 md:mt-[30px] text-[24px] md:text-[32px]">
                CHƯƠNG TRÌNH SẼ
                <br />
                PHÙ HỢP NẾU BẠN
              </h2>
            </div>
            <div className="">
              <div className="flex mt-[20px]">
                <div className="min-w-[30px] flex">
                  <img className="h-[15px] w-[14px] mt-2" src={Icon8} />
                </div>
                <div>
                  <h5 className="font-[900] uppercase ] ">
                    Ban lãnh đạo doanh nghiệp:
                  </h5>
                  <span>
                    Chủ tịch, Thành viên HĐQT, Ban cố vấn doanh nghiệp.
                  </span>
                </div>
              </div>

              <div className="flex mt-[20px]">
                <div className="w-[30px] flex">
                  <img className="h-[15px] w-[14px] mt-2" src={Icon8} />
                </div>
                <div>
                  <h5 className="font-[900] uppercase ] ">Ban giám đốc:</h5>
                  <span>Tổng giám đốc, Giám đốc chức năng.</span>
                </div>
              </div>

              <div className="flex mt-[10px]">
                <div className="min-w-[30px] flex">
                  <img className="h-[15px] w-[14px] mt-2" src={Icon8} />
                </div>
                <div>
                  <span className="font-[900] uppercase ] ">
                    Các doanh nhân:
                  </span>
                  <br />
                  <span>
                    Muốn cập nhật thêm kiến thức, quản trị, điều hành và lãnh
                    đạo doanh nghiệp.
                  </span>
                </div>
              </div>
              <hr className="w-full h-1 mt-[30px] bg-b" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0">
        <div className="ed-container">
          <div className="grid grid-cols-12 gap-4 md:gap-[60px] pt-[30px] md:pt-[50px]">
            <div className="col-span-12 md:col-span-5">
              <img className="m-auto" src={Img1} />
            </div>
            <div className="col-span-12 md:col-span-7 flex items-center">
              <div>
                <div className="text-[#000] grid-cols-1 grid md:grid-cols-2 gap-0 md:gap-8">
                  <div className="flex col-span-1 shadow-lg p-6 rounded-lg my-4 md:my-0">
                    <div className="min-w-[40px] md:min-w-[60px]">
                      <img src={Icon5} />
                    </div>
                    <div>
                      <h5 className="text-[20px] md:text-[24px] uppercase font-bold ">
                        LỊCH HỌC
                      </h5>
                      <p>
                        13h30 - 16h30, Thứ 6
                        <br className=" hidden md:block" />
                        Ngày 19/08/2022
                      </p>
                    </div>
                  </div>

                  <div className="flex col-span-1 shadow-lg p-6 rounded-lg my-4 md:my-0">
                    <div className="min-w-[40px] md:min-w-[60px]">
                      <img src={Icon6} />
                    </div>
                    <div>
                      <h5 className="text-[20px] md:text-[24px] uppercase font-bold ">
                        HÌNH THỨC
                      </h5>
                      <p>
                        Huấn luyện Trực tuyến
                        <br className=" hidden md:block" /> (ONLINE)
                      </p>
                    </div>
                  </div>

                  <div className="flex col-span-1 shadow-lg p-6 rounded-lg my-4 md:my-0">
                    <div className="min-w-[40px] md:min-w-[60px]">
                      <img src={Icon7} />
                    </div>
                    <div>
                      <h5 className="text-[20px] md:text-[24px] uppercase font-bold ">
                        HỌC PHÍ
                      </h5>
                      <p>500,000 VNĐ</p>
                    </div>
                  </div>

                  <div className="flex bg-white md:bg-[#185adb] md:text-white col-span-1 rounded-lg p-6 shadow-lg">
                    <div className="min-w-[40px] md:min-w-[60px]">
                      <img src={Icon9} className=" hidden md:block" />
                      <img src={Icon20} className=" block md:hidden" />
                    </div>
                    <div>
                      <h5 className="text-[24px] uppercase font-bold ">
                        HOTLINE
                      </h5>
                      <p>091 390 38 33</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-b w-[100px] h-1 m-auto my-[30px] block md:hidden" />
      <div className="w-full pt-0  md:pt-[50px] px-4 md:px-0">
        <div className="ed-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-4 ">
            <div className=" col-span-1 md:col-span-1 lg:col-span-4 ">
              <h2 className="text-[24px] md:text-[32px]">
                XÂY DỰNG HỆ THỐNG,
                <br />
                TẠI SAO CẦN?
              </h2>
              <p className="mt-[20px] md:mt-[30px] text-justify">
                Trong doanh nghiệp, thời gian là tài sản quý giá nhất. Doanh
                nghiệp (Business) không đồng nghĩa với BUSY-NESS (sự bận rộn).
              </p>
              <p className="mt-[20px] md:mt-[30px] text-justify">
                Khi vận hành doanh nghiệp, có hàng trăm ngàn vấn đề phát sinh và
                cần giải quyết. Sự vất vả của Chủ doanh nghiệp có lúc không được
                đền đáp khi đã cố gắng nhưng kết quả không như mong đợi. Doanh
                nghiệp vận hành như một cỗ máy, chỉ cần mất quyền kiểm soát ở
                một hệ thống thì cả "bộ máy" doa nh nghiệp sẽ bị trì trệ, hư
                hỏng.
              </p>
              <p className="mt-[20px] md:mt-[30px] text-justify">
                Nếu bạn là Chủ Doanh nghiệp và muốn xây một doanh nghiệp vận
                hành hiệu quả, rõ ràng cần tập trung vào các nguyên tắc cơ bản
                và xây dựng nền tảng vững chắc để thành công. ActionCOACH CHT
                Firm mang đến Chương trình Huấn Luyện về 4 đòn bẩy trong xây
                dựng Hệ thống hóa Doanh nghiệp giúp cho các nhà lãnh đạo giành
                lại quyền kiểm soát doanh nghiệp của mình theo từng hệ thống:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-[30px]">
                <div>
                  <div className="flex">
                    <div className="min-w-[30px] md:min-w-[40px]">
                      <img src={Icon1} />
                    </div>
                    <div>
                      <span>Con người & Đào tạo.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="min-w-[30px] md:min-w-[40px]">
                      <img src={Icon2} />
                    </div>
                    <div>
                      <span>Cung ứng & Phân phối.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="min-w-[30px] md:min-w-[40px]">
                      <img src={Icon3} />
                    </div>
                    <div>
                      <span>Kiểm tra & Đo lường.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="min-w-[30px] md:min-w-[40px]">
                      <img src={Icon4} />
                    </div>
                    <div>
                      <span>Hệ thống & Công nghệ.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-3 hidden lg:block relative">
              <img
                src={Img16}
                className=" absolute bottom-0 min-w-[100%] right-[-35px]"
              />
            </div>
            <div className="bg-b col-span-1 md:col-span-1 lg:col-span-4 px-2 md:px-8 py-4 md:py-10">
              <div className="text-center">
                <h3 className="text-white hidden md:block">
                  Đăng ký Chương trình <br />
                  Huấn Luyện của
                  <br />
                  ActionCOACH CHT Firm
                </h3>
                <h3 className="text-white block md:hidden uppercase text-[24px]">
                  Đăng ký Chương trình
                </h3>
                <p className="mt-[10px] text-white font-[400]">
                  <span className=" hidden md:block">
                    Vui lòng điền đầy đủ các thông tin dưới đây.
                  </span>
                  <br className=" hidden md:block" />
                  <span>Chúng tôi sẽ liên lạc lại trong 24h làm việc.</span>
                </p>
              </div>
              <form
                ref={form}
                className="bg-b rounded  pt-2 mx-auto w-[100%] static z-[99] text-white"
                onSubmit={sendEmail}
              >
                <div className="m-4 mt-6">
                  <input
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Họ và tên *"
                    value={state.name}
                    onChange={handleChange}
                  />
                  <p className="text-[red] mt-2">
                    {error.name ? error.name[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <input
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="email"
                    name="email"
                    placeholder="email@gmail.com *"
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                  />

                  <p className="text-[red] mt-2">
                    {error.email ? error.email[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <input
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="phone"
                    name="phone"
                    placeholder="Số điện thoại (VD: 0900xxxxxx) *"
                    type="phone"
                    value={state.phone}
                    onChange={handleChange}
                  />
                  <p className="text-[red] mt-2">
                    {error.phone ? error.phone[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <input
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="company"
                    name="company"
                    placeholder="Tên công ty *"
                    type="text"
                    value={state.company}
                    onChange={handleChange}
                  />
                  <p className="text-[red] mt-2">
                    {error.company ? error.company[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <select
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="option"
                    name="option"
                    onChange={handleChange}
                  >
                    <option className="text-[#cdcdcd]">
                      Chọn hình thức học *
                    </option>
                    <option value="Offline">Offline</option>
                    <option value="Online">Online</option>
                  </select>
                  <p className="text-[red] mt-2">
                    {error.option ? error.option[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <select
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="lesson"
                    name="lesson"
                    onChange={handleChange}
                  >
                    <option className="text-[#cdcdcd]">
                      Chọn chuyên đề huấn luyện *
                    </option>
                    <option value="Tham gia cả 3 chuyên đề huấn luyện">
                      Tham gia cả 3 chuyên đề huấn luyện
                    </option>
                    <option value="Tham gia chuyên đề 1">
                      Tham gia chuyên đề 1
                    </option>
                    <option value="Tham gia chuyên đề 2">
                      Tham gia chuyên đề 2
                    </option>
                    <option value="Tham gia chuyên đề 3">
                      Tham gia chuyên đề 3
                    </option>
                  </select>
                  <p className="text-[red] mt-2">
                    {error.lesson ? error.lesson[0] : ""}
                  </p>
                </div>
                <div className="m-4">
                  <textarea
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="desiderate"
                    name="desiderate"
                    placeholder="Bạn mong muốn gì khi tham gia khoá học?"
                    onChange={handleChange}
                  >
                    {state.desiderate}
                  </textarea>
                </div>
                <div className="m-4">
                  <textarea
                    className="bg-b focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="time"
                    name="time"
                    placeholder="Khoảng thời gian phù hợp để CHT tư vấn cho bạn"
                    onChange={handleChange}
                  >
                    {state.time}
                  </textarea>
                </div>

                <div className="m-4 text-center">
                  {load == false ? (
                    <button
                      type="submit"
                      className=" bg-white mt-2 py-4 px-10 hover:shadow-2xl cl-b font-[700] w-full rounded-lg"
                    >
                      ĐĂNG KÝ
                    </button>
                  ) : (
                    <button className=" bg-white mt-2 py-4 px-10 hover:shadow-2xl cl-b font-[700] w-full rounded-lg uppercase flex justify-center">
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-1"
                          fill="#185adb"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      ĐANG GỬI
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        id="gia-tri"
        className="w-full bg-[#FAFAFA] py-4 md:py-[50px] px-4 md:px-0"
      >
        <div className="ed-container">
          <h2 className="text-center text-[24px] md:text-[32px]">
            {" "}
            KẾT QUẢ NHẬN ĐƯỢC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-[20px] md:mt-[40px]">
            <div>
              <div>
                <img className="m-auto" src={Img8} />
              </div>
              <div className="p-[20px]">
                <p className="max-w-[285px] m-auto text-justify">
                  Trang bị kiến thức đầy đủ cho việc xây dựng một doanh nghiệp
                  bài bản: quy trình, mô hình cũng như công thức xây dựng và
                  phát triển doanh nhân.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img className="m-auto" src={Img14} />
              </div>
              <div className="p-[20px]">
                <p className="max-w-[285px] m-auto text-justify">
                  Nắm được khung "Thời gian lý tưởng" Chủ doanh nghiệp sẽ cần
                  tập trung vào Dòng tiền, Doanh thu hay Lợi nhuận.{" "}
                </p>
              </div>
            </div>

            <div>
              <div>
                <img className="m-auto" src={Img9} />
              </div>
              <div className="p-[20px]">
                <p className="max-w-[285px] m-auto text-justify">
                  Xây dựng được đội ngũ bán hàng xuất sắc, giúp Chủ doanh nghiệp
                  thoái khỏi vai trò người bán hàng.
                </p>
              </div>
            </div>

            <div>
              <div>
                <img className="m-auto" src={Img15} />
              </div>
              <div className="p-[20px]">
                <p className="max-w-[285px] m-auto text-justify">
                  Kỹ thuật đặt câu hỏi và xử lý sự từ chối của khách kàng khi
                  mua hàng. Tiêu chuẩn giao tiếp trong bán hàng qua điện thoại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-ơ[#FAFAFA] px-4 md:px-0 pb-[30px] md:pb-[50px]">
        <div className="ed-container">
          <div className="grid grid-cols-12 gap-4 md:gap-[60px]">
            <div className="col-span-12 md:col-span-6">
              <img className="m-auto " src={Img2} />
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <img className="cl-swing" src={Img13} />
                <h4 className=" uppercase font-[900] mt-[20px] ">
                  Được nhận những quyền lợi độc quyền:
                </h4>
                <div className=" mt-[20px] ">
                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon18} />
                    </div>
                    <div>
                      <p>Discount tới 15% các khoá huấn luyện kế tiếp.</p>
                    </div>
                  </div>

                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon18} />
                    </div>
                    <div>
                      <p>1 buổi khám sức khỏe doanh nghiệp.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon18} />
                    </div>
                    <div>
                      <p>60 phút tư vấn miễn phí.</p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleModal}
                      className="bg-b rounded-lg text-white p-4 mt-[20px] cl-shake"
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="giang-vien"
        className="w-full px-4 md:px-0 bg-b pb-[20px] pt-[30px] md:py-[50px] "
      >
        <div className="ed-container">
          <h2 className="text-[24px] md:text-[32px] text-white text-center">
            GIỚI THIỆU NHÀ HUẤN LUYỆN CHƯƠNG TRÌNH
          </h2>
          <div className="grid grid-cols-12 gap-4 md:gap-[60px] pt-[30px] md:pt-[50px]">
            <div className="col-span-12 md:col-span-5">
              <img className="m-auto" src={Img3} />
            </div>
            <div className="col-span-12 md:col-span-7 flex items-center">
              <div>
                <h2 className=" uppercase text-white text-[24px] md:text-[32px]">
                  BUSINESS COACH{" "}
                </h2>
                <h4 className="text-[20px] text-white uppercase font-bold ">
                  COLLINS Hoàng Anh Chiến
                </h4>
                <div className="text-white mt-[20px] md:mt-[50px]">
                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon10} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Học vị:
                      </h5>
                      <p className=" text-justify">
                        Kỹ sư xây dựng – Đại học xây dựng Hà Nội.
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-[20px]">
                    <div className="min-w-[40px] md:min-w-[60px] flex">
                      <img className="w-[30px] h-[29px]" src={Icon11} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Kinh nghiệm:
                      </h5>
                      <p className=" text-justify">
                        - Hơn 16 năm làm trong lĩnh vực xây dựng và thương mại,
                        và hơn 10 năm xây dựng và vận hành 03 doanh nghiệp xây
                        dựng thương mại.
                        <br />
                        - Là một chuyên gia về lĩnh vực Quản lý dự án hạng 1,
                        Giám sát và Thiết kế hạng 1 các công trình dân dụng và
                        công nghiệp.
                        <br />- Giám đốc cấp cao của BNI sau 24 tháng tham gia
                        vào cộng đồng BNI. Trong 12 tháng là giám đốc phát triển
                        của 3 chapter BNI.
                      </p>
                    </div>
                  </div>

                  <div className=" mb-[20px] hidden">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon13} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Giải thưởng{" "}
                      </h5>
                      <p className=" text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor.
                      </p>
                    </div>
                  </div>

                  <div className=" mb-[20px] hidden">
                    <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                      <img src={Icon14} />
                    </div>
                    <div>
                      <h5 className="text-[14px] uppercase font-bold ">
                        Dự án:
                      </h5>
                      <p className=" text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0 ">
        <div className="ed-container pt-[30px] md:py-[50px]">
          <div className="text-center">
            <h2 className="text-[24px] md:text-[32px] cl-b uppercase">
              Thời hạn đăng ký
            </h2>
            <div className="">
              <div className="m-auto my-[30px] grid grid-cols-4 gap-4 max-w-[350px]">
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.days}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.hours}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.minutes}</div>
                </div>
                <div className="w-[60px] h-[60px] bg-b rounded-md text-white text-[40px] font-bold flex items-center">
                  <div className="text-center w-full">{deadline.seconds}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" flex justify-center md:justify-end">
              <img
                className="mr-0  w-full max-w-[430px] rounded-lg"
                onClick={handleModal}
                src={Img19}
              />
            </div>
            <div className="flex md:justify-start justify-center">
              <img
                className="ml-0 w-full max-w-[430px] rounded-lg "
                onClick={handleModal}
                src={Img20}
              />
            </div>
          </div>

          <div className="text-center mt-[30px]">
            <h2 className="text-[24px] md:text-[32px] cl-b uppercase">
              Thông tin thanh toán
            </h2>
          </div>
          <div className="text-center hidden md:block">
            <p className="mb-4 mt-6">
              <span className="cl-b font-[700]">Số tài khoản </span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                09086011219999
              </span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700]">Tên thụ hưởng </span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                Công Ty Hoàng Anh Chiến
              </span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700]">Ngân Hàng</span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                MSB Khánh Hòa
              </span>
            </p>
            <p>
              <span className="cl-b font-[700]">Nội dung thanh toán</span>
              <br />
              <span className="text-[#A07B4C] text-[24px] font-[700]">
                Tên & Số điện thoại
              </span>
            </p>
          </div>

          <div className=" m-auto md:text-left text-[16px] font-[700]  block md:hidden">
            <p className="mb-4 mt-6">
              <span className="cl-b font-[700] uppercase">Số tài khoản: </span>
              <span className="text-[#A07B4C] ">09086011219999</span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700] uppercase">Tên thụ hưởng: </span>
              <span className="text-[#A07B4C]  ">Công Ty Hoàng Anh Chiến</span>
            </p>
            <p className="mb-4">
              <span className="cl-b font-[700] uppercase">Ngân Hàng: </span>
              <span className="text-[#A07B4C]  ">MSB Khánh Hòa</span>
            </p>
            <p>
              <span className="cl-b font-[700] uppercase">
                Nội dung thanh toán:{" "}
              </span>
              <span className="text-[#A07B4C]  ">Tên & Số điện thoại</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-b w-[100px] h-1 m-auto my-[30px] block md:hidden" />
      <div
        id="noi-dung"
        className="w-full px-4 md:px-0 pb-[30px] md:py-[50px] "
      >
        <div className="ed-container">
          <h2 className="text-[24px] md:text-[32px] text-center">
            NỘI DUNG CHƯƠNG TRÌNH HUẤN LUYỆN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-[20px] md:mt-[40px] p-[20px] md:p-[0px] shadow-md md:shadow-none  rounded-lg md:rounded-none">
            <div className="col-span-1 md:col-span-5">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 1
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">6STEPS</span>
                </h3>
              </div>
              <img src={Img4} />
            </div>
            <div className="col-span-1 md:col-span-7">
              <div className=" hidden md:block">
                <span className="bg-b rounded-lg text-white p-4 text-[20px] font-[600]">
                  Chuyên đề 1
                </span>
                <br className="block md:hidden" />

                <span className="text-[#0E2E47] text-[40px] font-[800] leading-[85px] md:leading-[40px] md:ml-6">
                  6STEPS
                </span>
              </div>
              <div className="mt-[10px] md:mt-[50px] text-[#0E2E47]">
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 1 </span>- Chủ động vận hành
                  doanh nghiệp giảm bớt sự hỗn loạn.
                </p>
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 2 </span>- Xây dựng thị
                  trường ngách cho doanh nghiệp không cần cạnh tranh về giá.
                </p>
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 3 </span>- Xây dựng các đòn
                  bẩy để doanh nghiệp tạo ra lợi nhuận.
                </p>
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 4 </span>- Xây dựng đội ngũ
                  để vận hành doanh nghiệp một cách chuyên nghiệp.
                </p>
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 5 </span>- Vận hành đồng bộ
                  để tạo đột phá cho doanh nghiệp.
                </p>
                <p className="mb-4 text-justify">
                  <span className="font-[600]">Bước 6 </span>- Kết quả tạo ra
                  dòng tiền thụ động cho Chủ doanh nghiệp.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-[20px] md:mt-[40px] p-[20px] md:p-[0px] shadow-md md:shadow-none  rounded-lg md:rounded-none">
            <div className="col-span-1 md:col-span-5">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 2
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">
                    SystemRICH
                  </span>
                </h3>
              </div>
              <img src={Img5} />
            </div>
            <div className="col-span-1 md:col-span-7">
              <div className=" hidden md:block">
                <span className="bg-b rounded-lg text-white p-4 text-[20px] font-[600]">
                  Chuyên đề 2
                </span>
                <br className="block md:hidden" />

                <span className="text-[#0E2E47] text-[40px] font-[800]  leading-[85px] md:leading-[40px] md:ml-6">
                  SystemRICH
                </span>
              </div>
              <div className="mt-[10px] md:mt-[50px] text-[#0E2E47]">
                <div className="flex my-[20px]">
                  <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                    <img src={Icon18} />
                  </div>
                  <div>
                    <p className=" text-justify">
                      Chìa khóa để xây dựng đòn bẩ.y
                    </p>
                  </div>
                </div>

                <div className="flex mb-[20px]">
                  <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                    <img src={Icon18} />
                  </div>
                  <div>
                    <p className=" text-justify">
                      9 bước hệ thống hóa doanh nghiệp.
                    </p>
                  </div>
                </div>

                <div className="flex mb-[20px]">
                  <div className="min-w-[40px] md:min-w-[60px] items-center flex">
                    <img src={Icon18} />
                  </div>
                  <div>
                    <p className=" text-justify">
                      Phương pháp để xây dựng doanh nghiệp theo nguyên tắc:
                      <br />
                      80% công việc được xử lý bằng hệ thống công nghệ, 20% công
                      việc được xử lý bằng con người.
                    </p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-[20px] md:mt-[40px] p-[20px] md:p-[0px] shadow-md md:shadow-none  rounded-lg md:rounded-none">
            <div className="col-span-1 md:col-span-5">
              <div className="flex md:hidden mb-4 justify-between">
                <div className="w-[140px] h-[38px] bg-b text-white flex items-center rounded-lg">
                  <p className="text-center w-full uppercase font-[700]">
                    CHUYÊN ĐỀ 3
                  </p>
                </div>
                <h3 className="flex items-center">
                  <span className="ml-4 text-[16px] font-[700]">SalesRICH</span>
                </h3>
              </div>
              <img src={Img6} />
            </div>
            <div className="col-span-1 md:col-span-7">
              <div className="hidden md:block">
                <span className="bg-b rounded-lg text-white p-4 text-[20px] font-[600]">
                  Chuyên đề 3
                </span>
                <br className="block md:hidden" />
                <span className="text-[#0E2E47] text-[40px] font-[800]  leading-[85px] md:leading-[40px] md:ml-6">
                  SalesRICH
                </span>
              </div>
              <div className="mt-[10px] md:mt-[50px] text-[#0E2E47]">
                <p className="font-[600] mb-[20px] text-justify">
                  Tuyệt chiêu bán hàng bằng câu hỏi:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[30px]">
                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Phân biệt 4 dạng người bán hàng, điểm thuận lợi và bất
                          lợi.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>
                          Khi nào thì khách hàng ra quyết định mua hàng.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>Niềm tin về tiền.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>Phân biệt 3 dạng người trong giao tiếp.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>4 bước học tập.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>Phương pháp đặt câu hỏi và lắng nghe.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>10 Tiêu chuẩn gọi điện thoại.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="min-w-[30px] md:min-w-[40px]">
                        <img src={Icon18} />
                      </div>
                      <div className="text-justify">
                        <span>Phương pháp xử lý từ chối mua hàng.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F3F3F3] px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px]">
          <div className="text-center">
            <h2 className="text-[24px] md:text-[32px] text-[#131E5B] uppercase">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="mt-[10px]">
              Có thể bạn cũng gặp một số thắc mắc dưới đây, cùng xem nhé.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-[30px] md:gap-8">
            <div className="col-span-12  md:col-span-5 flex items-center">
              <img src={Img18} />
            </div>
            <div className="col-span-12  md:col-span-7">
              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-[#131E5B] rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">1</div>
                  </div>
                </div>
                <div className="text-[#131E5B]">
                  <p className=" uppercase font-bold">
                    HÌNH THỨC học như thế nào?
                  </p>
                  <p className="text-justify">
                    Học Online qua Zoom hoặc học Offline tại Văn phòng
                    ActionCOACH CHT Firm - 61 Lý Nam Đế, Nha Trang, Khánh Hòa
                    hàng tuần do Coach COLLINS HOÀNG ANH CHIẾN đào tạo.
                  </p>
                </div>
              </div>

              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-[#131E5B] rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">2</div>
                  </div>
                </div>
                <div className="text-[#131E5B]">
                  <p className=" uppercase font-bold">
                    Tôi có thể mang theo đội nhóm của mình?
                  </p>
                  <p className="text-justify">
                    Hãy mang theo đội nhóm của mình để họ cùng được phát triển,
                    gia tăng doanh số cho bạn nhanh chóng hơn nữa. Chúng tôi sẽ
                    gửi link Zoom khi bạn thanh toán thành công.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-[30px]">
                <div className="min-w-[90px]">
                  <div className="w-[60px] h-[60px] bg-[#131E5B] rounded-lg text-white text-[48px] font-bold flex items-center">
                    <div className="text-center w-full">3</div>
                  </div>
                </div>
                <div className="text-[#131E5B]">
                  <p className=" uppercase font-bold">
                    Tôi có thể yêu cầu hoàn tiền nếu không phù hợp cho tôi
                    không?
                  </p>
                  <p className="text-justify">
                    Nếu bạn thực hiện các bài tập được giao và không cảm thấy có
                    giá trị hoặc cách học không phù hợp với cách chúng tôi dạy,
                    chúng tôi sẽ vui vẻ hoàn lại tiền cho bạn trừ mọi khoản phí
                    bên ngoài theo các điều kiện sau:
                    <ul className=" list-disc pl-[20px] md:pl-[30px]">
                      <li className="mt-4">
                        <span>
                          {" "}
                          Hoàn thành khóa học: Chúng tôi sẽ yêu cầu bạn hoàn
                          thành việc học tập của bạn (để chắc rằng bạn đã làm
                          nó) và hỏi nó đã không làm gì được cho bạn (để chúng
                          tôi có thể học hỏi và cải tiến).
                        </span>
                      </li>
                      <li className="mt-4">
                        <span>
                          {" "}
                          Thời hạn nộp đơn xin hoàn tiền: 30 ngày từ khi chương
                          trình kết thúc. Không có ngoại lệ.
                        </span>
                      </li>
                    </ul>
                    Không đăng ký vào chương trình chỉ để "XEM" . Chúng tôi dành
                    tâm huyết và thời gian cho chương trình này và hy vọng bạn
                    cũng làm vậy. Chương trình chỉ dành cho người nghiêm túc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-b px-4 md:px-0">
        <div className="ed-container py-[30px] md:py-[50px] ">
          <div className="text-center">
            <h2 className="text-[24px] md:text-[32px] uppercase text-white">
              Số Lượng Vé Giới Hạn
            </h2>
            <div>
              <button
                onClick={handleModal}
                className=" uppercase text-[#000] bg-[#FFAD31] font-bold w-[180px] h-[56px] rounded-lg my-[30px] cl-shake"
              >
                Nhận Tư Vấn
              </button>
            </div>
            <p className=" font-bold text-white">
              Đăng ký sớm ngay hôm nay để giữ một chỗ tham dự chương trình
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-123 px-4 md:px-0 ">
        <div className="ed-container">
          <div className="bg-121 font-[900] text-[14px] italic cl-b text-justify md:text-center pl-[20px]  py-[30px] md:py-[50px] md:pt-[53px]">
            Chúng tôi sẽ mang lại giá trị cho khoảng thời gian mà khách hàng đã
            đầu tư.
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-0 py-[30px] md:py-[50px]">
        <div className="ed-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-[24px] md:text-[32px]">ACTIONCOACH </h2>
              <p className="mt-[10px] md:mt-[30px] text-justify">
                ActionCOACH đã giúp đỡ các doanh nghiệp trong hơn 25 năm và tập
                trung khách hàng vào việc triển khai các hệ thống và quy trình
                hợp lý và dễ áp ​​dụng để phát triển doanh nghiệp của họ. Không
                giống như những chuyên gia tư vấn đắt tiền đưa cho bạn danh sách
                những gì bạn đang làm sai, ActionCOACH sẽ giúp bạn tạo ra những
                thay đổi thực sự trong công việc kinh doanh lâu dài và mang tính
                chuyển đổi. Chúng tôi có hơn 1.000 trên toàn cầu và ở gần 70
                quốc gia.{" "}
              </p>
            </div>
            <div>
              <img className="m-auto" src={Img12} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0 bg-[#131E5B]">
        <div className="ed-container">
          <div className="bg-121 font-[900] text-center text-[14px] italic text-white pl-[20px] md:pl-[93px] pt-[30px] pb-[30px] md:pt-[53px]">
            Cách chúng ta đầu tư thời gian là một trong những chìa khoá dẫn đến
            sự thành công. Doanh nghiệp của bạn đã xây dựng hệ thống chưa❓
            <br />
            Có gặp khó khăn gì không<span className="text-red">❓</span>Hãy đăng
            ký chia sẻ cùng chúng tôi nhé!
          </div>
          <div></div>
        </div>
      </div>

      <div className="w-full bg-[#121212] text-white py-4 md:py-[50px] px-4 md:px-0">
        <div className="ed-container px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4">
            <div className="md:col-span-1 lg:col-span-4">
              <div>
                <img src={Logo} />
              </div>
              <p className=" text-justify max-w-[390px]">
                ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế
                giới, được Brad Sugars thành lập năm 1993 tại Brisbane,
                Australia trong thời điểm khái niệm về huấn luyện doanh nghiệp
                còn khá lạ lẫm đối với các quốc gia trên thế giới.
              </p>
            </div>
            <div className="md:col-span-1 lg:col-span-3">
              <h3 className="text-[22x] md:text-[24px]">THÔNG TIN LIÊN HỆ</h3>
              <div className="mt-[30px]">
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon19} />
                  </div>{" "}
                  <span>61 Lý Nam Đế, Nha Trang, Khánh Hoà</span>
                </div>
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon15} />
                  </div>
                  <span>info@actioncoachcht.com</span>
                </div>
                <div className="flex">
                  <div className="mr-4 w-40px mb-4">
                    <img src={Icon16} />
                  </div>{" "}
                  <span>091 390 38 33</span>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block lg:col-span-3">
              <h3>FANPAGE</h3>
              {/* https://www.facebook.com/Actioncoach-cht-101635112508820 */}
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActionCoachCHTFirm%2F&amp;tabs&amp;width=280&amp;height=180&amp;small_header=false&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=false&amp;appId"
                width="280"
                height="180"
                frameborder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {openModal ? (
        <div className="fixed z-50 top-0 h-[100vh] w-full bg-[#afb1b270] flex items-center">
          {successful == true ? (
            <form
              ref={form}
              className="bg-white bg-124  shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 mx-auto w-[95%] max-w-[450px] static z-[99]"
              onSubmit={sendEmail}
            >
              <div className="text-right relative">
                <span
                  className="text-[30px] absolute font-[900] top-[-18px] right-[0px] md:right-[-25px]"
                  onClick={handleModal}
                >
                  <img className="w-[30px]" src={Icon17} />
                </span>
              </div>
              <div className="m-4 mt-6">
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Họ và tên *"
                  value={state.name}
                  onChange={handleChange}
                />
                <p className="text-[red] mt-2">
                  {error.name ? error.name[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com *"
                  type="email"
                  value={state.email}
                  onChange={handleChange}
                />

                <p className="text-[red] mt-2">
                  {error.email ? error.email[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="phone"
                  name="phone"
                  placeholder="Số điện thoại (VD: 0900xxxxxx) *"
                  type="phone"
                  value={state.phone}
                  onChange={handleChange}
                />
                <p className="text-[red] mt-2">
                  {error.phone ? error.phone[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <input
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="company"
                  name="company"
                  placeholder="Tên công ty *"
                  type="text"
                  value={state.company}
                  onChange={handleChange}
                />
                <p className="text-[red] mt-2">
                  {error.company ? error.company[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <select
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="option"
                  onChange={handleChange}
                >
                  <option className="text-[#cdcdcd]">
                    Chọn hình thức học *
                  </option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </select>
                <p className="text-[red] mt-2">
                  {error.option ? error.option[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <select
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="lesson"
                  name="lesson"
                  onChange={handleChange}
                >
                  <option className="text-[#cdcdcd]">
                    Chọn chuyên đề huấn luyện *
                  </option>
                  <option value="Tham gia cả 3 chuyên đề huấn luyện">
                    Tham gia cả 3 chuyên đề huấn luyện
                  </option>
                  <option value="Tham gia chuyên đề 1">
                    Tham gia chuyên đề 1
                  </option>
                  <option value="Tham gia chuyên đề 2">
                    Tham gia chuyên đề 2
                  </option>
                  <option value="Tham gia chuyên đề 3">
                    Tham gia chuyên đề 3
                  </option>
                </select>
                <p className="text-[red] mt-2">
                  {error.lesson ? error.lesson[0] : ""}
                </p>
              </div>
              <div className="m-4">
                <textarea
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="desiderate"
                  name="desiderate"
                  placeholder="Bạn mong muốn gì khi tham gia khoá học?"
                  onChange={handleChange}
                >
                  {state.desiderate}
                </textarea>
              </div>
              <div className="m-4">
                <textarea
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                  id="time"
                  name="time"
                  placeholder="Khoảng thời gian phù hợp để CHT tư vấn cho bạn"
                  onChange={handleChange}
                >
                  {state.time}
                </textarea>
              </div>

              <div className="m-4 text-center">
                {load == false ? (
                  <button
                    type="submit"
                    className=" bg-b text-white mt-2 py-4 px-10 hover:shadow-2xl font-[700] w-full rounded-lg"
                  >
                    ĐĂNG KÝ
                  </button>
                ) : (
                  <button className=" bg-b text-white mt-2 py-4 px-10 hover:shadow-2xl font-[700] w-full rounded-lg uppercase flex justify-center">
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    ĐANG GỬI
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="bg-white bg-124 text-center shadow-md rounded px-2 md:px-8 p-8 mb-4 mx-auto w-[95%] max-w-[1080px] static z-[99]">
              <div>
                <img className="m-auto" src={Img21} />
              </div>
              <div className="mt-4">
                <span className="text-[30px] md:text-[50px] cl-b font-[800]">
                  Thankyou for Using
                </span>
                <br />
                <span className="text-[18px] md:text-[33px] cl-b text-center md:text-justify">
                  You’ll receive your first email within the next 24 hours.{" "}
                  <br className="hidden md:block " />
                  Then you’ll get a lesson each week.
                </span>
              </div>
              <div className="flex relative mt-[50px]">
                <div className="">
                  <img src={Img22} />
                </div>
                <div className="flex w-full absolute mt-[50px]">
                  <button className=" bg-b text-white mt-2 py-4 px-10 hover:shadow-2xl font-[700]  rounded-lg uppercase flex justify-center w-[200px] ">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
