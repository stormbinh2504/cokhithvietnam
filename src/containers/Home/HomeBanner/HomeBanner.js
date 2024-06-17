import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeBanner.scss"
import { useEffect } from 'react';
import home_banner_img_1 from "../../../assets/images/home_banner/home_banner_img_1.png"
import home_banner_img_2 from "../../../assets/images/home_banner/home_banner_img_2.png"
import home_banner_img_3 from "../../../assets/images/home_banner/home_banner_img_3.png"
import home_banner_img_4 from "../../../assets/images/home_banner/home_banner_img_4.png"
import home_banner_img_5 from "../../../assets/images/home_banner/home_banner_img_5.png"
import home_banner_img_6 from "../../../assets/images/home_banner/home_banner_img_6.png"
import home_banner_img_7 from "../../../assets/images/home_banner/home_banner_img_7.png"
import home_banner_img_8 from "../../../assets/images/home_banner/home_banner_img_8.png"
import home_banner_img_9 from "../../../assets/images/home_banner/home_banner_img_9.png"
import home_banner_img_10 from "../../../assets/images/home_banner/home_banner_img_10.png"
import home_banner_img_11 from "../../../assets/images/home_banner/home_banner_img_11.png"
import home_banner_img_12 from "../../../assets/images/home_banner/home_banner_img_12.png"
import home_banner_img_13 from "../../../assets/images/home_banner/home_banner_img_13.png"
import home_banner_img_14 from "../../../assets/images/home_banner/home_banner_img_14.png"
import home_banner_img_15 from "../../../assets/images/home_banner/home_banner_img_15.png"
import home_banner_img_16 from "../../../assets/images/home_banner/home_banner_img_16.png"
import home_banner_img_17 from "../../../assets/images/home_banner/home_banner_img_17.png"
import home_banner_img_18 from "../../../assets/images/home_banner/home_banner_img_18.png"
import home_banner_img_19 from "../../../assets/images/home_banner/home_banner_img_19.png"
import AOS from 'aos';
import { PATH_NAME } from '../../../utils';


const listFeatureBox = [
    {
        id: "1",
        title: "KỆ DRIVE IN",
        link: "/products/ke-drive-in",
        image: home_banner_img_1,
        subtitle: ["Giải pháp đầu tư chi phí thấp", "Sức chứa hàng hóa lớn", "Phù hợp với mọi ngành hàng"]
    },
    {
        id: "2",
        title: "KỆ SELECTIVE",
        link: "/products/ke-selective",
        image: home_banner_img_2,
        subtitle: ["Phù hợp với tất cả các loại Pallet hàng", "Ứng dụng độ cao tới 11m", "Phù hợp hầu hết các loại xe nâng hàng"]
    },
    {//*
        id: "3",
        title: "KỆ DOUBLE DEEP",
        link: PATH_NAME.KE_DOUBLE_DEEP,
        image: home_banner_img_3,
        subtitle: ["Phù hợp với tất cả các loại Pallet hàng", "Ứng dụng độ cao tới 11m", "Phù hợp hầu hết các loại xe nâng hàng"]
    },
    {//*
        id: "4",
        title: "KỆ NARROW AISLE",
        link: PATH_NAME.KE_NARROW_AISLE,
        image: home_banner_img_4,
        subtitle: ["Phù hợp với tất cả các loại Pallet hàng", "Ứng dụng độ cao tới 11m", "Phù hợp hầu hết các loại xe nâng hàng"]
    },
    {//*
        id: "5",
        title: "KỆ PALLET DI ĐỘNG",
        link: PATH_NAME.KE_PALLET_DI_DONG,
        image: home_banner_img_5,
        subtitle: ["Phù hợp với các kho lạnh và cực lạnh", "Tiết kiệm thời gian hoạt động trong kho hàng lạnh", "Tối ưu diện tích lưu trữ hàng hoá"]
    },
    {//*
        id: "6",
        title: "KỆ CON LĂN",
        link: PATH_NAME.KE_CON_LAN_PALLET_FLOW_RACK,
        image: home_banner_img_6,
        subtitle: ["Tăng diện tích lưu trữ hàng hoá thêm 50%", "Chiều cao tối đa lên tới 16m", "Khả năng truy xuất pallet tốt"]
    },
    {//*
        id: "7",
        title: "KỆ PUSH BACK",
        link: PATH_NAME.KE_PUSH_BACK,
        image: home_banner_img_7,
        subtitle: ["Phù hợp với kho hàng có tải trọng hàng hoá lớn", "Chiều cao tối đa lên tới 11m", "Tăng diện tích lưu trữ hàng hoá thêm 60-70%"]
    },
    {
        id: "8",
        title: "Kệ tay đỡ",
        link: PATH_NAME.KE_TAY_DO,
        image: home_banner_img_8,
        subtitle: ["Phù hợp với kho hàng có nhiều chủng loại hàng hoá", "Sử dụng xe nâng chuyên dụng hoặc lấy hàng bằng tay", "Thiết kế tháo lắp dễ hàng, nhanh chóng"]
    },
    {//*
        id: "9",
        title: "Kệ để khuôn",
        link: PATH_NAME.KE_DE_KHUON_MOULD_RACK,
        image: home_banner_img_9,
        subtitle: ["Tối ưu hoá không gian nhà xưởng", "Tải trọng mỗi tầng lên đến 3 tấn/tầng", "Nâng cao năng suất bảo trì, bảo dưỡng khuôn mẫu"]
    },
    {
        id: "10",
        title: "KỆ TRUNG TẢI",
        link: PATH_NAME.KE_TRUNG_TAI,
        image: home_banner_img_10,
        subtitle: ["Hệ thống kho chứa hàng cực kỳ linh hoạt", "Thích hợp với kho chứa hàng cao tầng", "Định dạng phong phú về hệ thống tầng chứa hàng"]
    },
    {//*
        id: "11",
        title: "KỆ CON LĂN TRUNG TẢI",
        link: PATH_NAME.KE_CON_LAN_TRUNG_TAI,
        image: home_banner_img_11,
        subtitle: ["Phù hợp với hàng hoá tải trọng nhẹ", "Không cần sử dụng xe nâng", "Tải trọng 50-80kg/3 sàn roller nhựa"]
    },
    // {//*
    //     id: "12",
    //     title: "KỆ V HOA",
    //     link: PATH_NAME.KE_V_HOA,
    //     image: home_banner_img_12,
    //     subtitle: ["Hệ thống kho chứa hàng cực kỳ linh hoạt", "Thích hợp với kho chứa hàng cao tầng", "Định dạng phong phú về hệ thống tầng chứa hàng"]
    // },
    {//*
        id: "13",
        title: "KỆ V LỖ",
        link: PATH_NAME.KE_V_LO,
        image: home_banner_img_13,
        subtitle: ["Hệ thống kho chứa hàng cực kỳ linh hoạt", "Thích hợp với kho chứa hàng cao tầng", "Định dạng phong phú về hệ thống tầng chứa hàng"]
    },
    {
        id: "14",
        title: "KỆ SÀN MEZZANINE",
        link: PATH_NAME.KE_SAN_MEZZANINE,
        image: home_banner_img_14,
        subtitle: ["Giúp tận dụng tối đa không gian nhà kho", "Ứng dụng vừa làm văn phòng làm việc, vừa làm kho chứa hàng", "Tải trọng vượt trội, kết cấu cực kỳ vững chãi"]
    },
    {
        id: "15",
        title: "KỆ XẾP CHỒNG",
        link: PATH_NAME.KE_XEP_CHONG,
        image: home_banner_img_15,
        subtitle: ["Tăng tính linh hoạt trong lưu trữ hàng hoá", "Dễ dàng thay đổi và di chuyển", "Thiết kế tối đa 5 tầng kệ xếp chồng lên nhau"]
    },
    {//*
        id: "16",
        title: "KỆ ĐỂ HÀNG BÁN TỰ ĐỘNG",
        link: PATH_NAME.KE_DE_HANG_BAN_TU_DONG,
        image: home_banner_img_16,
        subtitle: ["Mật độ lưu chứa pallet cao", " Phù hợp với các loại xe nâng nhỏ", "Tối ưu diện tích sử dụng"]
    },
    {//*
        id: "17",
        title: "KỆ SIÊU THỊ",
        link: PATH_NAME.KE_SIEU_THI,
        image: home_banner_img_17,
        subtitle: ["Phù hợp với trưng bày cửa hàng, siêu thị", "Mẫu mã đẹp, bắt mắt", "Kích thước đa dạng"]
    },
    {//*
        id: "18",
        title: "Máng cáp",
        link: PATH_NAME.MANG_CAP,
        image: home_banner_img_18,
        subtitle: ["Bảo vệ dây cáp điện", "Tăng tính thẩm mỹ cho công trình sử dụng", "Đa dạng về kích thước"]
    },
    {//*
        id: "19",
        title: "Gia công laser",
        link: PATH_NAME.GIA_CONG_LAZE,
        image: home_banner_img_19,
        subtitle: ["Cắt chi tiết với độ chính xác cao", "Tối ưu thời gian sản xuất", "Sản phẩm hoàn thiện có tính thẩm mỹ"]
    },
]

const FeatureBox = ({ data }) => {
    const { image, title, subtitle, link } = data
    return (
        <div className="col-12 col-md-4 item-feature-box">
            <div className="wrap-feature-box">
                <div className="feature-box media-box">
                    <div className="fbox-media">
                        <a href={link}>
                            <img src={image} />
                        </a>
                    </div>
                    <div className="fbox-desc">
                        <h3 className="title text-center">
                            {title}
                        </h3>
                        <h3>
                            {subtitle && subtitle.length > 0 && subtitle.map((item, index) => {
                                return (<span className="subtitle">- {item}</span>)
                            })}
                        </h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HomeBanner = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    return (
        <div id="home-banner" className="home home-banner" data-aos="fade-down">
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="section-title">
                        <span className="title">
                            GIÁ KỆ ĐỂ HÀNG CƠ KHÍ TH VIỆT NAM
                        </span>
                        <span className="extra-box">
                            <div className="img-extra">

                            </div>
                        </span>
                    </h2>
                </div>
                <div className="row gutters-5">
                    {listFeatureBox && listFeatureBox.length > 0 && listFeatureBox.map((item, index) => {
                        return (
                            <FeatureBox
                                data={item}
                            />
                        )
                    })}
                </div>
                <div className="col-xs-12">
                    <div className="view-all text-center">
                        <a className="btn" href="/collections">TẤT CẢ SẢN PHẨM</a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default HomeBanner