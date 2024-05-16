import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';

import img1 from "../../../assets/images/project/tiendu_bacninh/img1.png"
import img2 from "../../../assets/images/project/tiendu_bacninh/img2.png"
import img3 from "../../../assets/images/project/tiendu_bacninh/img3.png"
import img4 from "../../../assets/images/project/tiendu_bacninh/img4.png"
import { listProject } from '../ListProject/ListProject';
import InfoContact from '../../Common/InfoContact/InfoContact';


const ProjectTienDuBacNinh = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const itemProject = listProject[3]
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
                                                    <strong>Kệ kho hàng Bắc Ninh</strong> là sản phẩm mà tháng nào cũng có đơn
                                                    hàng với Công ty TNHH Cơ Khí TH Việt Nam. Tại đây, chúng tôi luôn được khách hàng đến từ khắp
                                                    các huyện, thành phố, các khu công nghiêp yêu mến, tin tưởng và sử dụng
                                                    sản phẩm và dịch vụ của chúng tôi.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Tại KCN Tiên Du, Công ty ArmStrong, một trong những đối tác của Samsung và
                                                    các hãng điện thoại nổi tiếng trên thế giới cũng là khác hàng quen thuộc
                                                    của chúng tôi, qua 4,5 lần lấy hàng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Lần này, khách hàng đặt hơn{" "}
                                                    <strong>40 bộ kệ kho hàng Bắc Ninh, Kệ để hàng Bắc Ninh</strong>&nbsp;chứa
                                                    hàng nặng với những thống số:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều cột là 3.6m, chia làm 2 tầng beam mỗi tần có khả năng chịu tải là
                                                    1.5 tấn.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều rộng là 1.1m vừa đúng bằng chiều rộng của pallet mà công ty đang
                                                    sử dụng.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Chiều dài một loại chiều dài chứa được 2 pallet dài 2.58m, một loại chỉ
                                                    chứa được 1 pallet (do diện tích đã hết) dài 1380m.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={720}
                                                        original-width={1280}
                                                        src={img1}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Khách hàng là khách quên đã từng mua hàng của chúng tôi nhiều lần nhưng
                                                    lần này là nhiều hàng hoá nhất.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Cũng giống như{" "}
                                                    <strong>
                                                        giá kệ kho hàng
                                                        , giá kệ kho xưởng&nbsp;
                                                    </strong>
                                                    ở các nơi khác thì kệ của chúng tôi luôn được sản xuất,{" "}
                                                    <strong>giá kệ kho xưởng Bắc Ninh </strong>được:
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
                                                    <img
                                                        data-thumb="original"
                                                        original-height={720}
                                                        original-width={1280}
                                                        src={img2}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Khách hàng là đối tác đến từ Trung Quốc, mặc dù đã từng cho chúng tôi xem
                                                    báo giá của một đơn vị đến từ Trung Quốc, có giá thành tương đương, nhưng
                                                    cuối cùng lại chọn mua Kệ kho hàng Bắc Ninh của chúng tôi. Nếu bạn ở{" "}
                                                    <strong>Bắc Ninh</strong>, hay trên toàn Việt Nam mà có nhu cầu về{" "}
                                                    <strong>Kệ giá kho xưởng</strong>, vui lòng liên hệ với chúng tôi để:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Tư vấn và thiết kế kỹ thuật miễn phí;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Sản xuất và giao hàng nhanh chóng;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>- Lắp đặt nhanh, đúng kỹ thuật;</span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={720}
                                                        original-width={1280}
                                                        src={img3}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>&nbsp;</p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <b>Báo giá kệ kho hàng Bắc Ninh, giá kệ sắt để hàng Bắc Ninh</b>
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Báo giá kệ kho vật tư, kệ chứa hàng phụ thuộc bởi nhiều yếu tố khác nhau
                                                    như: kích thước, tải trọng, vật liệu sản xuất, màu sắc, yêu cầu riêng từ
                                                    khách hàng. Bên cạnh đó, giá kệ kho hàng cũng sẽ có thêm chiết khấu, ưu
                                                    đãi dựa trên số lượng sản phẩm thực tế mà bạn đặt.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Vì thế, để được báo giá, tư vấn chi tiết lựa chọn loại kệ sắt kho hàng Bắc
                                                    Ninh&nbsp;phù hợp nhất với nhu cầu sử dụng của mình, mời quý khách liên hệ
                                                    trực tiếp với Công ty TNHH Cơ Khí TH Việt Nam Nam qua&nbsp;
                                                    <b>Hotline: 0982 241 155 hoặc 0903 298 555</b>.
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    <img
                                                        data-thumb="original"
                                                        original-height={720}
                                                        original-width={1280}
                                                        src={img4}
                                                    />
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Ngoài những bộ kệ kho hàng nặng như chúng tôi thi công tại KCN Tiên Du của
                                                    Công ty ArmStrong thì tại Bắc Ninh, chúng tôi cung cấp đủ các loại kệ kho
                                                    hàng, có thể kể đến là:
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Kệ kho hàng nặng, kệ để hàng nặng, kệ chứa hàng nặng Bắc Ninh;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Kệ công nghiệp Bắc Ninh,{" "}
                                                    <strong>
                                                        Kệ sắt công nghiệp
                                                    </strong>{" "}
                                                    Bắc Ninh;
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    - Kệ trung tải Bắc Ninh, giá kệ hạng trung Bắc Ninh...
                                                </span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>- Kệ sắt v lỗ Bắc Ninh...</span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>- Kệ siêu thi Bắc Ninh....</span>
                                            </p>
                                            <p style={{ textAlign: "justify" }}>
                                                <span style={{ color: "#000000" }}>
                                                    Khách hàng có nhu cầu mua những sản phẩm trên, có thể liên hệ với
                                                    Công ty TNHH Cơ Khí TH Việt Nam để được tư vấn, và mua được hàng tốt, giá rẻ nhất nhì thị
                                                    trường miền bắc.
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

export default ProjectTienDuBacNinh