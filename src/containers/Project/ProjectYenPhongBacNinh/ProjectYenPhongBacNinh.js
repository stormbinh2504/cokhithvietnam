import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/yenphong_bacninh/img1.png"
import img2 from "../../../assets/images/project/yenphong_bacninh/img2.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectYenPhongBacNinh = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[0]
    return (
        <div className='project-page'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.PROJECT,
                        title: "Dự án"
                    },
                    {
                        title: itemProject.title
                    },
                ]}
            />
            <section className="content">
                <div className="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="project-page-content">
                                    <div className="title">{itemProject.title}</div>
                                    <div className="date-content">
                                        <div className="date">
                                            <span className="icon-date" style={{ marginRight: "3px" }}>
                                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                            </span>
                                            <span className="text-date">
                                                {itemProject.date}
                                            </span>
                                        </div>
                                        <div className="hastag">
                                            <i class="fa fa-user" aria-hidden="true"></i> Cơ khí TH Việt Nam
                                        </div>

                                    </div>
                                    <div className="content-page">
                                        <div className="rte">
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <strong>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>
                                                                Giá Kệ Kho Công Nghiệp - Dự Án Tại Yên Phong Bắc Ninh
                                                            </font>
                                                        </font>
                                                    </strong>
                                                </span>
                                                <span style={{ color: "#000000" }}>
                                                    {" "}
                                                    là một trong những dự án trung bình khá của chúng tôi. Khách hàng đến từ
                                                    Hàn Quốc, và là một trong những doanh nghiệp chuyên sản xuất tấm dán màn
                                                    hình (tấm phủ lên cho điện thoại mới) cho Samsung.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Tại đây, khách hàng đặt gần 100 bộ kệ khác nhau, với chiều cao 4.2m, 2
                                                    tầng beam; chiều rộng 1.2m, chiều dài 2.8m, khả năng chịu tải lên đến
                                                    3500kg/tầng, thanh beam có kích thước rất lớn 50x200mm, mỗi tầng có 6
                                                    thanh suport và 1 tấm gỗ ép.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={589}
                                                        original-width={1280}
                                                        src={img1}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Khách hàng là khách quên đã từng mua hàng của chúng tôi nhiều lần nhưng
                                                    lần này là nhiều hàng hoá nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Cũng giống như{" "}
                                                    <strong>giá kệ kho công nghiệp</strong>
                                                    {" "}
                                                    ở các nơi khác thì kệ của chúng tôi luôn được sản xuất:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Công nghệ đột dập, hàn, ghép bắt ốc vô cùng khoẻ, bền và tiện lợi;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Tôn CT3 theo tiêu chuẩn Nhật Bản;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Sơn tĩnh điện theo tiêu chuẩn Châu âu;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Sản xuất nhanh chỉ từ 5 đến 8 ngày;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Lắp đặt chính xác, đúng kỹ thuật, nhanh chóng;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chế độ bảo hành lên đến 60 tháng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={960}
                                                        original-width={1280}
                                                        src={img2}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Yên Phong luôn là thị trường vô cùng lớn, khi mà chúng tôi đã lắp đặt thi
                                                    công rất nhiều khách hàng ở đây. Ngoài thi thì tỉnh Bắc Ninh khắp các KCN:
                                                    Quế Võ 1,2,3, KCN Tiên Du, KCN Từ Sơn... luôn là thị trường trọng điểm của
                                                    chúng tôi.
                                                </span>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <InfoContact />
                            </div>
                            <div className="col-12 col-md-3">
                                <ListProductSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ProjectYenPhongBacNinh