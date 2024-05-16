import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/sieuthi_longbien/img1.png"
import img2 from "../../../assets/images/project/sieuthi_longbien/img2.png"
import img3 from "../../../assets/images/project/sieuthi_longbien/img3.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectSieuThiLongBien = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[1]
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
                                            <p>
                                                <strong>Kệ Siêu Thị Long Biên</strong> - Khách Hàng Lớn Tại Ngọc Thụy, được
                                                Công ty TNHH Cơ Khí TH Việt Nam cung cấp đầy đủ các loại: Kệ siêu thị đơn, kệ siêu thị đôi, kệ
                                                siêu thị đầu dãy, và các thiết bị siêu thị thông minh.
                                            </p>
                                            <p>
                                                Hà Nội đúng là thị trường bán lẻ lý tưởng, 1 tòa chung cư có thể có 1 siêu
                                                thị, 1 ngõ lớn có thể có 1 siêu thị, 1 con phố có thể có đến hàng
                                                vài&nbsp;chục cái siêu thị và chưa kể là có hàng trăm cái tạp hóa đi kèm
                                                trong các ngõ nhỏ.
                                            </p>
                                            <p>
                                                Bởi vậy mà các dịch vụ phục vụ cho việc mở siêu thị như:{" "}
                                                <strong>
                                                    Kệ giá siêu thị, phần mền bán hàng, kệ kho hàng, thiết bị siêu thị thông
                                                    minh
                                                </strong>
                                                ... cũng hàng trăm nhà cung cấp.
                                            </p>
                                            <p>
                                                Thật may mắn Công ty TNHH Cơ Khí TH Việt Nam đã thi công và lắp đặt kệ siêu thị cho 1 cặp
                                                khách hàng là vợ chồng tại khu chung cư của Tổng Cục Hậu Cần, Ngọc Thụy,
                                                Long Biên, Hà Nội.
                                            </p>
                                            <p>
                                                Một số hình ảnh lắp đặt <strong>Kệ siêu thị Long Biên&nbsp;</strong>và thiết
                                                bị siêu thị tại Long Biên, Hà Nội.
                                            </p>
                                            <p>
                                                <img
                                                    data-thumb="original"
                                                    original-height={720}
                                                    original-width={960}
                                                    src={img1}
                                                />
                                            </p>
                                            <p>
                                                <strong>Kệ siêu thị đơn</strong>, cao 1.8m ốp tường, rất đẹp, chắc chắn và
                                                ngọn ngàng, giúp khách hàng mua hàng có những trải nghiệm đầy đủ, thuận tiện
                                                trưng bày và lựa chọn.
                                            </p>
                                            <p>
                                                <img
                                                    data-thumb="original"
                                                    original-height={720}
                                                    original-width={960}
                                                    src={img2}
                                                />
                                            </p>
                                            <p>
                                                <img
                                                    data-thumb="original"
                                                    original-height={720}
                                                    original-width={960}
                                                    src={img3}
                                                />
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

export default ProjectSieuThiLongBien