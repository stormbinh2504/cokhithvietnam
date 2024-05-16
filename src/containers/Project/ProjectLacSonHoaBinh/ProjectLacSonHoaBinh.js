import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/lacson_hoabinh/img1.png"
import img2 from "../../../assets/images/project/lacson_hoabinh/img2.png"
import img3 from "../../../assets/images/project/lacson_hoabinh/img2.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectLacSonHoaBinh = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[2]
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
                                                    <strong>Kệ Sắt V Lỗ Hòa Bình</strong>
                                                    {" "}
                                                    | Dự Án Kệ V Lỗ Cửa Hàng Sữa | Tại Lạc Sơn | Hòa Bình được Công ty TNHH Cơ Khí TH Việt Nam
                                                    lắp cho một siêu thị bỉm sữa, tại thị trấn Vụ Bản thuộc huyện Lạc Sơn tỉnh
                                                    Hòa Bình.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Tại đây khách hàng lắp đặt 28 bộ <strong>Kệ sắt v lỗ Hòa Bình</strong>
                                                    &nbsp;gồm cả cao 5 tầng và cao 4 tầng, mầu trắng với quanh tường là 5 tầng
                                                    và giữa nhà là 4 tầng. Khách hàng là người quen của khách hàng cũ giới
                                                    thiệu và ngay lập tức đã chốt ngay đơn hàng và sử dụng sản phẩm{" "}
                                                    <strong>
                                                        kệ sắt V lỗ
                                                    </strong>{" "}
                                                    của <strong>Công ty TNHH Cơ Khí TH Việt Nam</strong>.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={1152}
                                                        original-width={2560}
                                                        src={img1}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Cũng giống như kệ sắt v lỗ thông thường, kệ v lỗ Hòa Bình được sản xuất từ
                                                    tôn CT3 tiêu chuẩn Nhật Bản, sơn tĩnh điện tiêu chuẩn châu âu, mối hàn, lỗ
                                                    đột vô cùng chắc chắn và gọn gàng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Sắt v lỗ là loại v lỗ 30x50 dày 1.8mm, mầu sơn trắng, đây là loại phổ
                                                    biến nhất và được nhiều người dùng nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Tấm sàn chuẩn là tấm sàn dày 0.6mm, có 1 sóng tăng cứng bên dưới đáy.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Kệ mầu trắng trưng bày sản phẩm rất đẹp và phù hợp với siêu thị, tạp hóa,
                                                    kho hàng mỹ phẩm..., đẹp sạch mà không giảm đi độ bền...
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={1152}
                                                        original-width={2560}
                                                        src={img2}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <strong>
                                                        Tại Hòa Bình, chúng tôi bán kệ sắt v lỗ khắp các huyện: Kệ Sắt V lỗ
                                                        Lương Sơn, Kệ sắt v lỗ Lạc Sơn, Kệ Sắt V lỗ Hòa Bình, Kệ sắt V lỗ Lạc
                                                        Thủy, Kệ Sắt V lỗ Yên Sơn, Kệ Sắt V Lỗ Đà Bắc,&nbsp;Kệ sắt v lỗ huyện
                                                        Cao Phong, Kệ sắt v lỗ Huyện Đà Bắc, Kệ sắt v lỗ Huyện Kim Bôi, Kệ sắt v
                                                        lỗ Huyện Kỳ Sơn, Kệ sắt v lỗ Huyện Mai Châu, Kệ sắt v lỗ Huyện Tân Lạc,
                                                        Kệ sắt v lỗ&nbsp;Huyện Yên Thủy.
                                                    </strong>
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <strong>
                                                        <img
                                                            data-thumb="original"
                                                            original-height={1152}
                                                            original-width={2560}
                                                            src={img3}
                                                        />
                                                    </strong>
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

export default ProjectLacSonHoaBinh