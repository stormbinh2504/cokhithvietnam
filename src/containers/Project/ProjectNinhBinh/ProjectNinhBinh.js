import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/ninhbinh/img1.png"
import img2 from "../../../assets/images/project/ninhbinh/img2.png"
import img3 from "../../../assets/images/project/ninhbinh/img3.png"
import img4 from "../../../assets/images/project/ninhbinh/img4.png"
import img5 from "../../../assets/images/project/ninhbinh/img5.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectNinhBinh = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[4]
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
                                                    Ngày 17/12/2022, Công ty TNHH Cơ Khí TH Việt Nam đã hoàn thành lặp đặt dự án{" "}
                                                    <strong>kệ sắt trung tải 3 tầng</strong>&nbsp;tại KCN Khánh Thượng, Yên
                                                    Mô, Ninh Bình. Đây cũng là một dự án khá lớn, và mở đầu cho năm mới, năm
                                                    2024 của chúng tôi.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    KCN Khánh Thượng là khu công nghiệp mới phát triển tại Yên Mô, Ninh Bình,
                                                    tại đây chúng tôi đã từng thì công 1,2 dự án trước đó, nhưng vẫn là dự án
                                                    nho nhỏ, nhưng lần này khách hàng đã tin tưởng và giao chúng tôi một dự án
                                                    khá hơn.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Khách hàng là một doanh nghiệp Đài Loan (quốc tịch Mỹ) chuyên sản xuất mỹ
                                                    phẩm xuất khẩu đi các nước trên toàn thế giới. Phải nói rằng chúng tôi
                                                    chưa khi nào nghĩ một nhà máy sản xuất mỹ phẩm nó lại to, và quy mô như
                                                    vậy.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={960}
                                                        original-width={1280}
                                                        src={img1}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Tại đây, khách hàng đã đặt trên 60 bộ kệ trung tải, trong đó có kệ sắt
                                                    trung tải 3 tầng là chủ yếu với kích thước là:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Cao 1.8m chia là 3 tầng beam, mỗi tầng chịu tải 500kg, khoảng cách giữa
                                                    các tầng là 70cm.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều dài của bộ kệ trung tải 3 tầng ở đây là 2m;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều rộng là 60cm - chiều rộng phổ thông được nhiều khách hàng lựa chọn
                                                    nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Mầu sơn thì như ảnh quý khách hàng nhìn thấy là mầu xanh và mầu cam
                                                    truyền thồng.
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
                                                    Khách hàng đã đặt kệ đều là bộ kệ độc lập, mặc dù có hơi tốn kém chi phí
                                                    một chút nhưng đổi lại luôn có sự linh hoạt, khi cần thay đổi vị trí và
                                                    vận chuyển, hay thay đổi cách thức bố trí trong kho.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <strong>
                                                    <span style={{ color: "#000000" }}>Mời khách hàng xem thêm </span>
                                                    <span style={{ color: "#000000" }}>kệ trung tải 3 tầng </span>
                                                    <span style={{ color: "#000000" }}>để hiểu rõ hơn.</span>
                                                </strong>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={960}
                                                        original-width={1280}
                                                        src={img3}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Có hơn 60 bộ kệ trung tải 3 tầng nhưng có đến 7,8 vị trí lắp đặt khác nhau
                                                    nên việc thi công lắp đặt cũng mất thời gian đôi chút, nhưng chúng tôi đã
                                                    cố gắng hoàn thành sớm và khách hàng đã luôn hài lòng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>Còn hẹn "sắp tới bên anh sẽ làm </span>
                                                <strong>
                                                    <span style={{ color: "#000000" }}>Kệ công nghiệp chứa hàng hạng</span>
                                                </strong>
                                                <span style={{ color: "#000000" }}>, anh lại gọi bên em".</span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={960}
                                                        original-width={1280}
                                                        src={img4}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Cũng giống như ở mọi dự án khác ở dự án này{" "}
                                                    <strong>kệ sắt trung tải 3 tầng</strong> được sản xuất bằng:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Tôn Ct3 theo tiêu chuẩn Nhật Bản, có đầy đủ COCQ và hoá đơn chứng từ đầy
                                                    đủ theo luật Việt Nam.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Sơn tĩnh điện theo tiêu chuẩn Châu Âu, sáng, bóng, bền đẹp vô cùng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={960}
                                                        original-width={1280}
                                                        src={img5}
                                                    />
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

export default ProjectNinhBinh