import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ListProject.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import { connect } from 'react-redux';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import InfoContact from '../../Common/InfoContact/InfoContact';
import blog0 from "../../../assets/images/project/yenphong_bacninh/blog.png"
import blog1 from "../../../assets/images/project/sieuthi_longbien/blog.png"
import blog2 from "../../../assets/images/project/lacson_hoabinh/blog.png"
import blog3 from "../../../assets/images/project/tiendu_bacninh/blog.png"
import blog4 from "../../../assets/images/project/ninhbinh/blog.png"
import blog5 from "../../../assets/images/project/vin_05_02_2020/blog.png"

const desStart = "Cơ khí TH Việt Nam hoàn thành dự án cho khách hàng tại"
const desFinal = ". Khách hàng tin tưởng lựa chọn chúng tôi bởi chất lượng vượt trội của giá kệ công nghiệp Cơ khí TH Việt Nam so với các sản phẩm khác trên thị trường. Cơ khí TH Việt Nam hoàn thiện lắp đặt và bàn giao..."
export const listProject = [ //https://www.shavietnam.vn/search?q=aaa
    {
        title: "Giá Kệ Kho Công Nghiệp - Dự Án Tại Yên Phong Bắc Ninh",
        path: PATH_NAME.PROJECT_YENPHONG_BACNINH,
        date: "10/05/2024",
        listImages: [blog0],
        location: "Tại Yên Phong, Bắc Ninh",
    },
    {
        title: "Kệ Siêu Thị Long Biên - Khách Hàng Lớn Tại Ngọc Thụy",
        path: PATH_NAME.PROJECT_SIEU_THI_LONG_BIEN,
        date: "02/01/2024",
        listImages: [blog1],
        location: "Tại Ngọc Thụy",
    },
    {
        title: "Kệ Sắt V Lỗ Hòa Bình | Dự Án Kệ V Lỗ Cửa Hàng Sữa | Tại Lạc Sơn | Hòa Bình",
        path: PATH_NAME.PROJECT_LACSON_HOABINH,
        date: "15/08/2023",
        listImages: [blog2],
        location: "Tại Lạc Sơn, Hòa Bình",
    },
    {
        title: "Giá Kệ Kho Hàng - Dự Án Tại Tiên Du Bắc Ninh",
        path: PATH_NAME.PROJECT_TIENDU_BACNINH,
        date: "05/05/2023",
        listImages: [blog3],
        location: "Tại Tiên Du, Bắc Ninh",
    },
    {
        title: "Kệ sắt trung tải 3 tầng tại Ninh Bình",
        path: PATH_NAME.PROJECT_NINHBINH,
        date: "17/12/2022",
        listImages: [blog4],
        location: "Tại Ninh Bình",
    },
    {
        title: "Siêu dự án kệ trung tải tại Tập đoàn Vin - Tại trung tâm dữ liêu Vin",
        path: PATH_NAME.PROJECT_VIN_05_02_2020,
        date: "05/02/2020",
        listImages: [blog5],
        location: "Long Biên",
    },
]


const ListProject = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onRedirectByPathname = (path) => {
        history.push(path);
    }

    return (
        <div id='list-project' className='list-project'>
            <div className="row">
                {listProject && listProject.length > 0 && listProject.map((item, index) => {
                    const { title, path, date, listImages, location } = item
                    return (
                        <div className="col-12 col-md-4 item-project-box">
                            <div className="wrap-project-box" onClick={() => onRedirectByPathname(path)}>
                                <div className="project-box img-box">
                                    <div className="project-img">
                                        <img src={listImages} />
                                    </div>
                                    <div className="project-desc">
                                        <div className="title">
                                            {title}
                                        </div>
                                        <div className="des">
                                            {`${desStart} ${location}${desFinal}`}
                                        </div>
                                        <div className="date">
                                            <span className="icon-date">
                                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                            </span>
                                            <span className="text-date">
                                                {date}
                                            </span>
                                        </div>
                                        <div className="hastag">
                                            <i class="fa fa-user" aria-hidden="true"></i> Cơ khí TH Việt Nam
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}
export default ListProject