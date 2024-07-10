import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeScale.scss"
import { useEffect } from 'react';
import AOS from 'aos';
import Slider from "react-slick";

import logo from "../../../assets/images/company/logo.png"
import wrap_khoxuong from "../../../assets/images/home/home_scale/wrap_khoxuong.png"
import img1 from "../../../assets/images/home/home_scale/list_img/img1.png"
import img2 from "../../../assets/images/home/home_scale/list_img/img2.png"
import img3 from "../../../assets/images/home/home_scale/list_img/img3.png"
import img4 from "../../../assets/images/home/home_scale/list_img/img4.png"
import img5 from "../../../assets/images/home/home_scale/list_img/img5.png"
import img6 from "../../../assets/images/home/home_scale/list_img/img6.png"
import img7 from "../../../assets/images/home/home_scale/list_img/img7.png"
import img8 from "../../../assets/images/home/home_scale/list_img/img8.png"
import img9 from "../../../assets/images/home/home_scale/list_img/img9.png"
import img10 from "../../../assets/images/home/home_scale/list_img/img10.png"
import img11 from "../../../assets/images/home/home_scale/list_img/img11.png"
import img12 from "../../../assets/images/home/home_scale/list_img/img12.png"


import img_khoxuong1 from "../../../assets/images/home/home_scale/list_khoxuong/img1.png"
import img_khoxuong2 from "../../../assets/images/home/home_scale/list_khoxuong/img2.png"
import img_khoxuong3 from "../../../assets/images/home/home_scale/list_khoxuong/img3.png"
import img_khoxuong4 from "../../../assets/images/home/home_scale/list_khoxuong/img4.png"
import img_khoxuong5 from "../../../assets/images/home/home_scale/list_khoxuong/img5.png"
import img_khoxuong6 from "../../../assets/images/home/home_scale/list_khoxuong/img6.png"
import img_khoxuong7 from "../../../assets/images/home/home_scale/list_khoxuong/img7.png"
import img_khoxuong8 from "../../../assets/images/home/home_scale/list_khoxuong/img8.png"
import img_khoxuong9 from "../../../assets/images/home/home_scale/list_khoxuong/img9.png"

const LIST_IMG_KHO_XUONG = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img5,
    },
    {
        img: img6,
    },
    {
        img: img7,
    },
    {
        img: img8,
    },
    {
        img: img9,
    },
    {
        img: img10,
    },
    {
        img: img11,
    },
    {
        img: img12,
    },
]


const LIST_IMG_KHO_XUONG_CHINH = [
    {
        urlImage: img_khoxuong1,
    },
    {
        urlImage: img_khoxuong2,
    },
    {
        urlImage: img_khoxuong3,
    },
    {
        urlImage: img_khoxuong4,
    },
    {
        urlImage: img_khoxuong5,
    },
    {
        urlImage: img_khoxuong6,
    },
    {
        urlImage: img_khoxuong7,
    },
    {
        urlImage: img_khoxuong8,
    },
    {
        urlImage: img_khoxuong9,
    },
]



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
            className={`d-none`}
            onClick={onClick}
        >
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
        </button>
    );
}

function SamplePrevArrow(props) {
    const { className, style, to, onClick } = props;
    return (
        <button
            className={`d-none`}
            onClick={onClick}
        >
            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
        </button>
    );
}


const HomeScale = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="home-scale" className="home home-scale" >
            <div className="vision-porcelain" data-aos="fade-down">
                <div className="container">
                    <div className="about3 row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="col-about3 colL">
                                <div class="i-title item-center" >
                                    <div className="text-title">
                                        TẦM NHÌN
                                    </div>
                                </div>
                                <div class="img-icon item-center">
                                    <i class="fa fa-handshake-o" aria-hidden="true"></i>
                                </div>
                                <div class="content active item-center">Cơ Khí TH Việt Nam  hướng đến việc trở thành một mô hình doanh nghiệp lớn mạnh và bền vững. Điều này không chỉ đến từ quyết định đầu tư đúng đắn và sự sáng tạo trong lao động, mà còn từ việc tạo điều kiện tốt nhất cho nhân viên phát huy tối đa tài năng và trách nhiệm</div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="wrap-bg">
                                <div class="bg-color">
                                    <div className="bg-text">
                                        <span>TẦM NHÌN</span> <span>&amp;</span> <span>SỨ MỆNH</span>
                                    </div>
                                    <div className="bg-logo item-center">
                                        <img src={logo} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="col-about3 colR">
                                <div class="i-title item-center">SỨ MỆNH</div>

                                <div class="img-icon item-center">
                                    <i class="fa fa-rocket" aria-hidden="true"></i>
                                </div>

                                <div class="content active item-center" >Cơ khí TH Việt Nam cung cấp giải pháp tối ưu diện tích kho hàng và năng lực lưu trữ hàng hoá. Với mong muốn đáp ứng mọi yêu cầu của khách hàng, luôn xem khách hàng là trung tâm tâm của mọi hoạt động. Chúng tôi cam kết sẽ cung cấp đến tay Khách hàng những sản phẩm tốt nhất với giá thành cạnh tranh nhất trên thị trường.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="system-company" data-aos="fade-down">
                <div className="container">
                    <div className="boxBig">
                        <div class="row" style={{ padding: "20px 0px" }}>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sub">
                                <div class="content-sub">
                                    <h2 class="animate_4">HỆ THỐNG NHÀ MÁY</h2>
                                    <div className="introduce-company">
                                        Công ty TNHH cơ khí TH Việt Nam là doanh nghiệp chuyên tư vấn, thiết kế và sản xuất các sản phẩm cơ khí về đột dập, hàn cắt, cắt laser, gia công kim loại tấm...v… Với sản phẩm thế mạnh là các loại giá kệ để hàng, giá kệ kho hàng, nhà xưởng, kệ siêu thị…
                                    </div>
                                    <div className="block-content">
                                        <div class="i-item item1 animate_5">
                                            <div className="icon">
                                                <i class="fa fa-home" aria-hidden="true" style={{ fontSize: "48px" }}></i>
                                            </div>
                                            <div className="text">
                                                Sở hữu hệ thống nhà máy chuyên sản xuất kệ chứa hàng công nghiệp quy mô lớn, không ngừng được đầu tư chuyên sâu, cải tiến trong hơn 8 năm hoạt động.
                                            </div>
                                        </div>
                                        <div class="i-item item3 animate_7">
                                            <div className="icon">
                                                <i class="fa fa-users" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                Đội ngũ công nhân viên với hơn 150 nhân sự thuộc khối sản xuất và khối văn phòng.
                                            </div>
                                        </div>
                                        <div class="i-item item3 animate_7">
                                            <div className="icon">
                                                <i class="fa fa-industry" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                Nhà máy 1: Km số 1, Quốc lộ 3, xã Mai Lâm, huyện Đông Anh, Hà nội, với diện tích nhà xưởng 4000 mét vuông. Luôn đáp ứng tốt mọi yêu cầu của Quý Khách hàng
                                            </div>
                                        </div>
                                        <div class="i-item item3 animate_7">
                                            <div className="icon">
                                                <i class="fa fa-industry" aria-hidden="true"></i>
                                            </div>
                                            <div className="text">
                                                Nhà máy 2: Phố Hộ Vệ, xã Lạc Vệ, huyện Tiên Du, tỉnh Bắc Ninh, có diện tích hơn 2500 mét vuông.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sub">
                                <div className="content-img">
                                    <Slider
                                        //  autoplay={true} 
                                        {...settings} >
                                        {LIST_IMG_KHO_XUONG_CHINH && LIST_IMG_KHO_XUONG_CHINH.length > 0 && LIST_IMG_KHO_XUONG_CHINH.map((item, index) => {
                                            return (
                                                <img src={item.urlImage} />
                                                // <div className="khoxuong-item" key={index}>
                                                //     <div className="wrap-khoxuong-item">
                                                //         <div className="khoxuong-image item-center">
                                                //             <img src={item.urlImage} />
                                                //         </div>
                                                //     </div>
                                                // </div>
                                            )
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="list-img-khoxuong">
                {LIST_IMG_KHO_XUONG.map((item, index) => {
                    return (
                        <div className="item-img">
                            <img src={item.img} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeScale