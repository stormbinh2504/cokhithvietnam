import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import "./HomeProject.scss"
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
import AOS from 'aos';
import { PATH_NAME } from '../../../utils';
import { listProject } from '../../Project/ListProject/ListProject';

const FeatureBox = ({ data }) => {
    console.log("binh_data", data)
    const { listImages, title, path, location } = data
    return (
        <div className="col-12 col-md-4 item-feature-box">
            <div className="wrap-feature-box">
                <div className="feature-box media-box">
                    <div className="fbox-media">
                        <a href={path}>
                            <img src={listImages[0]} />
                        </a>
                    </div>
                    <div className="fbox-desc">
                        <h3 className="title text-left">
                            {title}
                        </h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HomeProject = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'linear',
            delay: 50,
        });
    }, []);

    return (
        <div id="home-project" className="home home-project" data-aos="fade-down">
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="section-title">
                        <span className="title">
                            DỰ ÁN TIÊU BIỂU
                        </span>
                        <span className="extra-box">
                            <div className="img-extra">

                            </div>
                        </span>
                    </h2>
                </div>
                <div className="row gutters-5">
                    {listProject && listProject.length > 0 && listProject.map((item, index) => {
                        return (
                            <FeatureBox
                                data={item}
                            />
                        )
                    })}
                </div>
                <div className="col-xs-12">
                    <div className="view-all text-center">
                        <a className="btn" href="/project">TẤT CẢ DỰ ÁN</a>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default HomeProject