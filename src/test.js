import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Header2 from './static/images/Header2.png';
import Header3 from './static/images/Header3.jpg';

import Bg from './static/images/bg-12.png';
import Icon1 from './static/images/icon1.png';
import Icon2 from './static/images/icon2.png';
import Icon3 from './static/images/icon3.png';
import Icon4 from './static/images/icon4.png';
import Icon5 from './static/images/icon5.png';
import Icon6 from './static/images/icon6.png';
import Icon7 from './static/images/icon7.png';
import Icon8 from './static/images/icon8.png';
import Icon9 from './static/images/icon9.png';
import Icon10 from './static/images/icon10.png';
import Icon11 from './static/images/icon11.png';
import Icon12 from './static/images/icon12.png';
import Icon13 from './static/images/icon13.png';
import Icon14 from './static/images/icon14.png';
import Icon15 from './static/images/icon15.png';
import Icon16 from './static/images/icon16.png';
import Icon17 from './static/images/icon17.png';

import Img1 from './static/images/img1.png';
import Img2 from './static/images/img2.png';
import Img3 from './static/images/img3.png';
import Img4 from './static/images/img4.png';
import Img5 from './static/images/img5.png';
import Img6 from './static/images/img6.png';
import Img7 from './static/images/img7.png';
import Img8 from './static/images/img8.png';
import Img9 from './static/images/img9.png';
import Img10 from './static/images/img10.png';
import Img11 from './static/images/img11.png';
import Img12 from './static/images/img12.png';
import Img13 from './static/images/img13.png';
import Img14 from './static/images/img14.png';
import Img15 from './static/images/img15.png';

import Logo from './static/images/Logo.png';

function Test() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  return (
    <div>
      <div className='w-full bg-b md:bg-[#ffffff00] md:absolute z-[9999]'>
        <div className='ed-container'>
          <nav className="px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <div className='w-[190px] h-[56px]'>
                <img src={Logo} className="mr-3 w-[190px]" alt="ActionCOACH CBD Firm" />
              </div>
              <div>
                  <button onClick={handleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span  className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            {openMenu ? (
              <div className=" cl-12127 justify-between items-center w-full md:flex md:w-auto" id="navbar-sticky">
              <ul className=" flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-b md:bg-[#ffffff00]">
                <li>
                  <a href="#noi-dung" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NỘI DUNG</a>
                </li>
                <li>
                  <a href="#gia-tri" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">GIÁ TRỊ </a>
                </li>
                <li>
                  <a href="#dien-gia" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">DIỄN GIẢ </a>
                </li>
                <li>
                <img className='block md:hidden'  onClick={handleModal} src={Button} />
                  {/* <button onClick={handleModal} className=' block md:hidden uppercase bg-white mt-2 rounded-full py-2 px-10 hover:shadow-2xl text-[#D22741] font-[700]'>Đăng ký ngay</button> */}
                </li>
              </ul>
            </div>
            ) : (
              <div className=" cl-12127 hidden justify-between items-center w-full md:flex md:w-auto" id="navbar-sticky">
                <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                  <li>
                    <a href="#noi-dung" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">NỘI DUNG</a>
                  </li>
                  <li>
                    <a href="#gia-tri" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">GIÁ TRỊ </a>
                  </li>
                  <li>
                    <a href="#dien-gia" className="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">DIỄN GIẢ </a>
                  </li>
                  <li>
                    <img className='block md:hidden'  onClick={handleModal} src={Button} />
                  </li>
                </ul>
              </div>
            )}

              <div className='hidden md:block '>
              <img onClick={handleModal} src={Button} />
                {/* <button  onClick={handleModal} className='uppercase bg-white rounded-full py-3 px-10 hover:shadow-2xl text-[#D22741] font-[700]'>Đăng ký ngay</button> */}
              </div>
            </div> 
            
          </nav>
        </div>
      </div>


      <div>
        <img src={Header} className='w-full hidden md:block'/>
        <img src={Header1} className='w-full block md:hidden'/>

      </div>
      <div className='w-full py-[30px] md:py-[50px] px-4 md:px-0'>
        <div className='ed-container grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div>
          <img src={Img2} className='w-full '/>
          </div>
          <div>
            <div>
              <h4 className='font-[900] cl-b uppercase'>Giới thiệu</h4>
              <h3>chương trình Huấn Luyện</h3>
              <h2 className='cl-b'>XÂY DỰNG ĐỘI NHÓM</h2>
              <p>“Tài sản lớn nhất của các doanh nghiệp chính là con người”. Nhân sự chính là nguồn lực quyết định sự thành công hay thất bại của doanh nghiệp. Để doanh nghiệp phát triển, Chủ doanh nghiệp sẽ không thể tập trung quản lý được nhiều thứ, vì thế Chủ doanh nghiệp phải tập trung một thứ duy nhất là đội ngũ, đội ngũ sẽ giúp công ty phát triển ổn định.</p>
              <p className='mt-[20px]'>Lãnh đạo một đội ngũ gồm các cá thể với tính cách đa dạng không phải là công việc đơn giản đối với bất kỳ người Chủ doanh nghiệp nào, đặc biệt hơn khi đội ngũ được ví như trái tim của doanh nghiệp.</p>
              <p className='mt-[20px]'>Xây dựng được một đội ngũ nhân sự vững mạnh, nhiệt huyết, bản lĩnh chính là chìa khóa để giúp một doanh nghiệp sớm đạt được thành công và phát triển mạnh mẽ.</p>
              <div className='mt-[20px] block md:flex'>
                <div className='min-w-[200px]'>
                  <img onClick={handleModal} src={Button} />
                </div>
                <div className='flex items-center underline mt-[20px] md:mt-0'>
                  <a className='italic '>để tham dự Khóa Huấn luyện</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-[30px] md:py-[50px] px-4 md:px-0'>
        <div className='ed-container'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div>
              <h6 className='cl-b font-[900]'>01.</h6>
              <div>
                <h2>ĐIỀU GÌ TẠO NÊN </h2>
                <h1 className='text-[42px] md:text-[64px] cl-b font-semibold leading-[64px]'>MỘT ĐỘI NHÓM </h1>
                <h2 className='pl-0 md:pl-[50px]'>CÓ HIỆU SUẤT CAO?</h2>
              </div>
              <div>
                <p className='my-[20px]'>Trong quá trình huấn luyện cho các Chủ doanh nghiệp Việt Nam: từ các doanh nghiệp Start - up, doanh nghiệp mới khởi nghiệp 1 năm, 2 năm, 3 năm hoặc những doanh nghiệp tập đoàn lớn, ActionCOACH CHT Firm đã tổng hợp được các bài toán nhân sự hay gặp phải thường khiến các Chủ doanh nghiệp đau đầu:</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                  <div>
                    <div className='flex'>
                      <div className='min-w-[60px] md:min-w-[80px]'>
                        <img src={Icon8} />
                      </div>
                      <div>
                        <span>Đã bao giờ bạn gặp tình trạng đội nhóm của mình thiếu gắn kết chỉ vì họ cạnh tranh khách hàng của nhau?</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='flex'>
                      <div className='min-w-[60px] md:min-w-[80px]'>
                        <img src={Icon8} />
                      </div>
                      <div>
                        <span>Nhân viên của công ty chưa chủ động hoạt động hết khả năng của họ? Chưa chủ động ý kiến, đề xuất các giải pháp để giải quyết công việc được giao?</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='flex'>
                      <div className='min-w-[60px] md:min-w-[80px]'>
                        <img src={Icon8} />
                      </div>
                      <div>
                        <span>Công ty gặp thách thức khi triển khai một mục tiêu/chiến lược đồng bộ giữa các thành viên, giữa các bộ phận?</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className='flex'>
                      <div className='min-w-[60px] md:min-w-[80px]'>
                        <img src={Icon8} />
                      </div>
                      <div>
                        <span>Không biết cách làm thế nào để thu hút nhân tài và đào tạo phát triển nhân tài?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-end'>
              <img src={Img1} />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-[30px] md:py-[50px] px-4 md:px-0'>
        <div className='ed-container'>
          <div>
            <div className='text-center'>
              <h6 className='cl-b font-[900]'>02.</h6>
              <h2>BẠN NHẬN ĐƯỢC GÌ TỪ <span className='cl-b'>KHÓA HỌC</span></h2>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <div className='grid grid-cols-2 col-span-2 md:col-span-1  gap-6'>
                <div className='col-span-2 md:col-span-1 flex items-center'>
                  <div className=''>
                    <div className='w-full bg-b p-[15px] md:p-[30px] text-white'>
                      <img src={Icon9} className='m-auto mb-4'/>
                      <p className='pb-0 md:pb-[30px] text-justify'>Mở rộng góc nhìn cho các nhà lãnh đạo quản lý doanh nghiệp, tìm ra "luật chơi chung", gắn kết đội nhóm tuyệt vời.</p>
                    </div>
                    <div className='w-full p-[15px] md:p-[30px] border-4 border-[#131E5B] mt-6'>
                      <img src={Icon5} className='m-auto mb-4'/>
                      <p className='pb-0 md:pb-[30px] text-justify'>Xác định được các yếu tố cốt lõi để phát triển nguồn nhân lực trong doanh nghiệp, bí quyết tuyển dụng đúng người, tạo động lực và giữ chân nhân tài.</p>
                    </div>
                  </div>
                </div>
                <div className='col-span-2 md:col-span-1 flex items-center' >
                  <div className="self-center w-full bg-b p-[15px] md:p-[30px] text-white">
                    <img src={Icon7} className='m-auto mb-4'/>
                    <p className='text-justify'>Xây dựng năng lực lãnh đạo cho tổ chức để nhân sự phát huy khả năng của mình, chăm sóc khách hàng tốt hơn và như vậy doanh nghiệp vận hành hiệu quả hơn và mang lại lợi ích cho chủ doanh nghiệp.</p>
                  </div>
                </div>
              </div>
              <div className='col-span-2 md:col-span-1 '>
                <img onClick={handleModal} src={Img3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#F3F3F3] pt-[30px] md:pt-[50px] px-4 md:px-0'>
        <div className='ed-container'>
          <div className='text-center'>
            <h6 className='cl-b font-[900]'>03.</h6>
            <h2>HÌNH THỨC ĐÀO TẠO</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-[30px] md:py-[50px]'>
            <div>
              <div className='w-full md:w-[420px] float-right'>
                <div className='rounded-lg bg-b flex text-[#ffffff] p-4 border-solid-5 border-2'>
                  <div className='w-[45px]'>
                    <img src={Icon12} className=''/>
                  </div>
                  <div className='w-[85px] pt-3 md:ml-[30px] md:mr-[30px] ml-[15px] mr-[15px]'>Hình thức</div>
                  <div className='flex justify-between'>
                    <div className='pt-2 w-[40px] font-[900] text-[24px]'>01</div>
                    <div className='pt-3'>buổi học OFFLINE</div>
                  </div>
                </div>

                <div className='rounded-lg bg-b flex text-[#ffffff] p-4 border-solid-5 border-2'>
                  <div className='w-[45px] min-w-[45px]'>
                    <img src={Icon11} className=''/>
                  </div>
                  <div className='w-[85px] min-w-[85px] pt-3 md:ml-[30px] md:mr-[30px] ml-[15px] mr-[15px]'>Ngày</div>
                  <div className='flex justify-between w-full'>
                    <div className='pt-2 w-[40px] font-[900] text-[24px]'>05/08</div>
                    <div className='pt-3'></div>
                  </div>
                </div>

                <div className='rounded-lg bg-b flex text-[#ffffff] p-4 border-solid-5 border-2'>
                  <div className='w-[45px] min-w-[45px]'>
                    <img src={Icon10} className=''/>
                  </div>
                  <div className='w-[85px] min-w-[85px] pt-3 md:ml-[30px] md:mr-[30px] ml-[15px] mr-[15px]'>Thời lượng:</div>
                  <div className='md:flex justify-between w-full'>
                    <div className='pt-2 font-[900] text-[24px]'>3h30-16h30 (3h)</div>
                    <div className='pt-3'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex '>
                <img src={Icon6} className=''/>
                <p className='flex items-end ml-[20px] px-4 md:px-0'>
                <span>Đối tượng tham gia:</span>

                </p>
              </div>
              <div className='flex mt-[20px]'>
                <div className='w-[30px] flex'>
                  <img className='h-[15px] w-[14px] mt-2' src={Icon13}/>
                </div>
                <div>
                  <h5 className='font-[900] uppercase ] '>Ban lãnh đạo doanh nghiệp: </h5>
                  <span>Chủ tịch, Thành viên HĐQT, Ban cố vấn doanh nghiệp</span>
                </div>
                
              </div>

              <div className='flex mt-[20px]'>
                <div className='w-[30px] flex'>
                  <img className='h-[15px] w-[14px] mt-2' src={Icon13}/>
                </div>
                <div>
                  <h5 className='font-[900] uppercase ] '>Ban giám đốc:  </h5>
                  <span>Tổng giám đốc, giám đốc chức năng.Doanh nhân</span>
                </div>
                
              </div>

              <div className='flex mt-[10px]'>
                <div className='w-[30px] flex'>
                  <img className='h-[15px] w-[14px] mt-2' src={Icon13}/>
                </div>
                <div>
                  <span className='font-[900] uppercase ] '>Các doanh nhân </span>
                  <span>Chủ tịch, Thành viên HĐQT, Ban cố vấn doanh nghiệp</span>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-b px-4 md:px-0'>
        <div className='ed-container py-[30px] md:py-[50px]'>
          <div className='text-white text-center'>
            <h6 className='font-[800]'>04.</h6>
            <h2>NỘI DUNG TRONG CHƯƠNG TRÌNH</h2>
            <div>
              <p className='font-[800] mt-4 md:mt-[30px]'>Khóa học gồm 3 chủ đề lớn: </p>
              <p><span className='cl-g uppercase'>5 Ways, Service Rich và Team Rich</span> hướng tới giải pháp giúp Doanh nghiệp Xây dựng đội nhóm. </p>
              <p>Những chia sẻ từ khóa huấn luyện giúp chủ doanh nghiệp xây dựng đội ngũ nhân viên thực sự hiệu quả để đưa doanh nghiệp đi tới thành công.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-[20px] md:mt-[40px] lg:grid-cols-3 md:grid-cols-4">
            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div>
                <img src={Img5} className=''/>
              </div>
              <div>
                <div className='w-[93px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]'>
                  <p className='text-center w-full'>Phần 1</p>
                </div>
              </div>
              <h3 className='mt-[20px]'>5WAYS</h3>
              <p className='mt-[10px] pb-[0px] md:pb-[40px]'>- 5 Yếu tố để gia tăng lợi nhuận của doanh nghiệp, phát triển công ty đồng bộ. </p>
            </div>
             
            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div>
                <img src={Img6} className=''/>
              </div>
              <div>
                <div className='w-[93px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]'>
                  <p className='text-center w-full'>Phần 2</p>
                </div>
              </div>
              <h3 className='mt-[20px]'>SERVICE RICH</h3>
              <p className='mt-[10px] pb-[0px] md:pb-[40px]'>
                - Giải pháp biến Dịch vụ Khách hàng trở thành nhân tố hàng đầu giúp bạn tạo nên khác biệt hoá Thương hiệu so với đối thủ cạnh tranh
                <br />
                - Xây dựng Văn hoá “Lấy Khách hàng làm trung tâm” trong toàn doanh nghiệp giúp Gia tăng Lợi nhuận nhờ Chiến lược Dịch vụ Cá nhân hoá.
              </p>
            </div>

            <div className="col-span-3 bg-white max-w-[390px] m-auto p-[15px] md:p-[30px] lg:col-span-1 md:col-span-2 h-full rounded-lg  ">
              <div>
                <img src={Img7} className=''/>
              </div>
              <div>
                <div className='w-[93px] h-[38px] bg-b text-white flex items-center rounded-lg mt-[30px]'>
                  <p className='text-center w-full'>Phần 3</p>
                </div>
              </div>
              <h3 className='mt-[20px]'>TEAM RICH</h3>
              <p className='mt-[10px] pb-[0px] md:pb-[40px]'>
              6 Chìa khóa vàng tạo nên một đội ngũ thành công:
              <br />
              - Quy tắc “Chọn đúng người”, Tuyển dụng ứng viên hạng A
              <br />
              - Phát triển tài năng trong doanh nghiệp: từ kiến tạo môi trường, chính sách đến thực thi
              <br />
              - Các yếu tố tạo ra sự gắn kết trong đội ngũ
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-123 px-4 md:px-0'>
        <div className='ed-container'>
        <div className='bg-121 font-[900] text-[14px] italic cl-b text-center pl-[20px] md:pl-[93px] pt-[30px] pb-[30px] md:pt-[53px]'>
        Nếu bạn xây dựng được một đội ngũ nhân viên thực sự tự vận động, <br className=' hidden md:block'/>
            tự làm việc thì đương nhiên bạn là một nhà lãnh đạo thật sự xuất sắc. 
          </div>
         
        </div>
      </div>
      <div className='w-full px-4 md:px-0'>
        <div className='ed-container'>
        <div className="grid grid-cols-12 gap-4 md:gap-[60px] pt-[30px] md:pt-[50px]">
            <div className="col-span-12 md:col-span-5">
              <img className='m-auto' src={Img8}/>
            </div>
            <div className="col-span-12 md:col-span-7 flex items-center">
              <div>
                <h2 className=' uppercase'>coach nick name</h2>
                <h4 className='text-[20px] cl-b uppercase font-bold '>Vietnam name</h4>
                <div className='cl-b mt-[20px] md:mt-[50px]'>
                  <div className='flex mb-[20px]'>
                    <div className='min-w-[40px] md:min-w-[60px] items-center flex'>
                      <img src={Icon4} />
                    </div>
                    <div>
                      <h5 className='text-[14px] uppercase font-bold '>Học vị:</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  
                  <div className='flex mb-[20px]'>
                    <div className='min-w-[40px] md:min-w-[60px] items-center flex'>
                      <img src={Icon3} />
                    </div>
                    <div>
                      <h5 className='text-[14px] uppercase font-bold '>Kinh nghiệm:</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>

                  <div className='flex mb-[20px]'>
                    <div className='min-w-[40px] md:min-w-[60px] items-center flex'>
                      <img src={Icon2} />
                    </div>
                    <div>
                      <h5 className='text-[14px] uppercase font-bold '>Giải thưởng </h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                  </div>

                  <div className='flex mb-[20px]'>
                    <div className='min-w-[40px] md:min-w-[60px] items-center flex'>
                      <img src={Icon1} />
                    </div>
                    <div>
                      <h5 className='text-[14px] uppercase font-bold '>Dự án:</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-4 md:px-0'>
        <div className='ed-container py-[30px] md:py-[50px]'>
          <img className='m-auto' src={Img9}/>
        </div>
      </div>
      <div className='w-full bg-122 px-4 md:px-0'>
        <div className='ed-container'>
        <div className="grid grid-cols-12 gap-4 py-[30px] md:py-[50px]">
            <div className="col-span-12  md:col-span-6 md:col-start-6 pb-[0rem] md:pb-[7rem]">
              <div className='max-w-[600px]'>
                <h4 className='text-[14px] cl-b uppercase font-bold '>Giới thiệu CHT Firm </h4>
                <h2>ACTIONCOACH CHT FIRM</h2>
                <h3>FIRM NHƯỢNG QUYỀN SỐ 1 ĐÔNG NAM Á</h3>
                <p className='mt-[20px]'>Với tầm nhìn “Tạo ra một thế giới thịnh vượng thông qua hoạt động tái đào tạo doanh nghiệp.” </p>
                <p className='mt-[20px] md:mt-[30px]'>Đối với Chúng tôi - Những nhà đào tạo chuyên nghiệp, việc giúp đỡ các Chủ Doanh Nghiệp phát triển mạnh Nhất luôn là ưu tiên hàng đầu. ActionCOACH CHT Firm sẽ là nơi mang đến cho các bạn sự trải nghiệm tuyệt vời nhất. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-b px-4 md:px-0'>
        <div className='ed-container'>
          <div className='bg-121 font-[900] text-[14px] italic text-white pl-[20px] md:pl-[93px] pt-[30px] pb-[30px] md:pt-[53px]'>
            Thành công của nhân viên chính là thành công của nhà lãnh đạo.
            <br /> 
            Khi doanh nghiệp xây dựng được một đội ngũ nhân sự xuất sắc thì đó chính là sức mạnh để giúp doanh nghiệp nhanh chóng <br className=' hidden md:block' /> đi đến thành công.
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className='w-full bg-[#121212] text-white py-4 md:py-[50px] '>
        <div className='ed-container px-4 md:px-0'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4" >
            <div className='md:col-span-1 lg:col-span-4'>
              <div>
                <img src={Logo} />
              </div>
              <p className=' text-justify max-w-[390px]'>
              ActionCOACH là thương hiệu huấn luyện doanh nghiệp hàng đầu thế giới, được Brad Sugars thành lập năm 1993 tại Brisbane, Australia trong thời điểm khái niệm về huấn luyện doanh nghiệp còn khá lạ lẫm đối với các quốc gia trên thế giới.
              </p>
            </div>
            <div className='md:col-span-1 lg:col-span-3'>
              <h3>
              THÔNG TIN LIÊN HỆ
              </h3>
              <div>
                <div className='flex'><div className='mr-4 w-40px mb-4'><img src={Icon14} /></div> <span>61 Lý Nam Đế, Nha Trang, Khánh Hoà</span></div>
                <div className='flex'><div className='mr-4 w-40px mb-4'><img src={Icon15} /></div><span>info@actioncoachcht.com</span></div>
                <div className='flex'><div className='mr-4 w-40px mb-4'><img src={Icon16} /></div> <span>( +297 ) 123 456 789</span></div>
              </div>
            </div>
            <div className=' hidden lg:block lg:col-span-3'>
            {/* https://www.facebook.com/Actioncoach-cht-101635112508820 */}
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FActioncoach-cht-101635112508820%2F&amp;tabs&amp;width=280&amp;height=180&amp;small_header=false&amp;adapt_container_width=false&amp;hide_cover=false&amp;show_facepile=false&amp;appId" width="280" height="180" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"></iframe>
            </div>

          </div>

        </div>
      </div>
      {
        openModal ? <div className='fixed z-50 top-0 h-[100vh] w-full bg-[#afb1b270] flex items-center' >
        <form className="bg-white shadow-md rounded px-2 md:px-8 pt-6 pb-8 mb-4 mx-auto w-[95%] max-w-[450px] static z-[99]">
          <div className='text-right relative'>
            <span className='text-[30px] absolute font-[900] top-[-18px] right-[0px] md:right-[-25px]' onClick={handleModal}><img className='w-[30px]' src={Icon17} /></span>
          </div>
          <div className="m-4 mt-6">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              id="full_name"
            //   onChange={setFull_name("full_name")}
              placeholder="Họ và tên"
            />
          </div>
          <div className="m-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="email"
              placeholder="email@gmail.com"
              type="email"
            />
          </div>
          <div className="m-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="phone"
              placeholder="Số điện thoại (VD: 0900xxxxxx)"
              type="phone"
            />
          </div>
          <div className="m-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="chuc-vu"
              placeholder="Chức vụ"
              type="text"
            />
          </div>
          <div className="m-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="ten-dn"
              placeholder="Tên doanh nghiệp"
              type="text"
            />
          </div>
          <div className="m-4">
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="number"
              type="number"
              placeholder="Số lượng vé"
            />
          </div>
          
          <div className="m-4 text-center">
            <button onClick={handleModal} className=' uppercase bg-r mt-2 rounded-full py-2 px-10 hover:shadow-2xl text-white font-[700] w-full'>Đăng ký ngay</button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          {/* {full_name} */}
        </p>
      </div> : ""
      }
    </div>
  );
}

export default Test;
