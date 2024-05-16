import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProjectVin05022020.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/vin_05_02_2020/img1.png"
import img2 from "../../../assets/images/project/vin_05_02_2020/img2.png"
import img3 from "../../../assets/images/project/vin_05_02_2020/img3.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectVin05022020 = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[5]
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
                                                <span style={{ color: "#000000" }}>Nếu xét dưới góc độ </span>
                                                <strong>
                                                    <span style={{ color: "#000000" }}>kệ trung tải</span>
                                                </strong>
                                                <span style={{ color: "#000000" }}>
                                                    , cho 1 đơn hàng thì đơn hàng tháng 2.2024 của chúng tôi tại{" "}
                                                    <strong>Tập đoàn VinGuop </strong>là đơn hàng lớn nhất tính từ khi chúng
                                                    tôi khởi nghiệp (2017).
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    VinGruop lớn như thế nào thì ai cũng biết, và trở thành nhà cũng cấp cho
                                                    VinGruop cũng là điều mà nhiều người mong muốn. Không phải ngẫu nhiên và
                                                    cũng cần rất nhiều điều kiện: chất lượng sản phẩm, tiến độ, khả năng về
                                                    tài chính...
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Vượt qua nhiều nhà cung cấp khác, chúng tôi đã là đơn vị cấp rất nhiều kệ
                                                    hạng nặng, kệ trung tải, kệ siêu thị, <strong>kệ sắt v lỗ</strong> cho tập
                                                    đoàn VinGruop từ những năm 2018 đến hiện tại.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Lần này khách hàng đã đặt loại kệ trung tải 3 tầng, cho tâm trung dữ liệu
                                                    của VinHome, chỉ là chứa đựng tài liệu thôi, nhưng thực sự nó vô cùng
                                                    hoàng tráng, rộng và nhiều vô kể. Đây cũng chỉ là giai đoạn 1, khi còn rất
                                                    nhiều kệ trung tải tương tự như vậy đang chờ cho giai đoạn sau.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={576}
                                                        original-width={1280}
                                                        src={img1}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <strong>Tại đây, khách hàng đã đặt bộ kệ:</strong>
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều cao: 1.6m chia làm 3 tầng beam;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều dài 1.6m là kích thước tiêu chuẩn để chứa được nhiều loại tài liệu
                                                    của khách hàng nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều rộng là 60cm là loại chiều rộng được nhiều khách hàng lựa chọn
                                                    nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Tất cả đều sơn tĩnh điện mầu phổ thông là xanh và cam.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Khả năng chịu tải lên đến 300kg/tầng.
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
                                                    (Ảnh minh hoạ tại VinGruop, bạn chỉ cần nhìn vào số lượng cột (chân kệ)
                                                    bạn sẽ hình dung được nó nhiều đến đâu mặc dù đây mới là buổi hạ hàng đầu
                                                    tiên).
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Thi công tại VinGruop cũng đòi hỏi nhiều điều: chở hàng chuyển hàng ngày
                                                    nghỉ, thi công mà không có tiếng ồn thì được làm trong tuần (nếu có tiếng
                                                    ồn phải làm cuối tuần). Và việc vận chuyển đi lại cũng khá vất vả và luôn
                                                    phải cẩn thận. Việc đi lại, ra vào toà nhà cũng cần làm các thủ tục cần
                                                    thiết.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Thi công trong các toàn nhà cũng cần phải tính đến việc vận chuyển hàng
                                                    hoá vào tháng máy, vì thường ở đây tầng hầm chỉ xe tải cao dưới 1.9m mới
                                                    có thể đi vào được. Nên cần phải chuyển tải để có xe riêng chở vào. Đây
                                                    cũng là việc phát sinh thêm công và chi phí rất lớn.
                                                </span>
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
                                                    Và cuối cùng thì mọi thứ đã hoàn thành bàn giao, đúng theo tiến độ, lắp
                                                    nhanh gọn, chuẩn kỹ thuật và chắc chắn vô cùng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Bạn hay nhìn vào bức ảnh đó là xe kéo dây buộc các vật tư chuyển lên. Và
                                                    chỉ nhìn dây buộc thôi bạn có thể thấy độ hoành tráng của dự án như thế
                                                    nào rồi.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Chúng tôi luông biết ơn những khách hàng của mình đã luôn yêu thương tin
                                                    tưởng, sử dụng và đang không ngừng giới thiệu những khách hàng mới cho
                                                    chúng tôi, từ những năm 2017 đến nay.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>Khách hàng có nhu cầu mua </span>
                                                <strong>
                                                    <span style={{ color: "#000000" }}>
                                                        <font style={{ verticalAlign: "inherit" }}>
                                                            <font style={{ verticalAlign: "inherit" }}>kệ trung tải</font>
                                                        </font>
                                                    </span>
                                                </strong>
                                                <span style={{ color: "#000000" }}> vui lòng liên hệ với&nbsp;</span>
                                                <span style={{ color: "#000000" }}>
                                                    <strong>Công ty TNHH Cơ Khí TH Việt Nam</strong>
                                                </span>
                                                <span style={{ color: "#000000" }}>
                                                    ,&nbsp;để được tư vấn miễn phí, mua với giá rẻ và lắp, giao hàng nhanh
                                                    chóng, chính xác.
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

export default ProjectVin05022020