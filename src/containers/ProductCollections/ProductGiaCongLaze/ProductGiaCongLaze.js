import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductGiaCongLaze.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_gia_cong_laze/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_gia_cong_laze/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_gia_cong_laze/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_gia_cong_laze/img4.jpg"

const ProductGiaCongLaze = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const images = [
        {
            original: img1,
            thumbnail: img1,
        },
        {
            original: img2,
            thumbnail: img2,
        },
        {
            original: img3,
            thumbnail: img3,
        },
        {
            original: img4,
            thumbnail: img4,
        }
    ];

    return (
        <div className='product-ke-driver-in'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Giá kệ"
                    },
                    {
                        path: PATH_NAME.GIA_CONG_LAZE,
                        title: "Gia công laze"
                    }
                ]}
            />
            <section className="content">
                <div className="content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="postcontent">
                                    <div className="product-page">
                                        <div className="single-product">
                                            <div className="row">
                                                <div className="col-12 col-md-7">
                                                    <SilderImageThumbnail
                                                        images={images}
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <ProductDesc
                                                        productDesc={{
                                                            title: "Gia công laze"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Tính linh hoạt cao: Trong quá trình thực hiện không phải thay đổi dụng cụ cắt cho dù cắt rất nhiều hệ lỗ , các hình dạng khách phức tạp khác nhau.",
                                                "Tính chính xác cao: Độ chính xác +/- 0,15 mm đảm bảo chất lượng cao đáp ứng mọi yêu cầu của khách hàng.",
                                                "Độ lặp lại: Đảm bảo gia công hàng loạt các chi tiết trên tấm kim loại với cùng một thông số.",
                                                "Tốc độ: Máy cắt laser được biết đến là loại máy có tốc độ làm việc nhanh, đặc biệt là khi cắt các tấm kim loại mỏng.",
                                                "Tiết kiệm: Máy cắt laser CNC được cải tiến ngày càng tiết kiệm , bàn phôi của máy ứng dụng nhiều công nghệ hiện đại giúp giảm nhu cầu xếp dỡ đồng nghĩa với việc ít cần lao động thủ công hơn. Chi phí sản xuất thấp hơn cũng dẫn đến tổng chi phí cho dịch vụ cắt laser sẽ thấp hơn → sản phẩm đến khách hàng giá tốt nhất .",
                                                "Tiết kiệm thời gian: Cắt laser được tự động hóa do máy được lập trình đọc bản vẽ, giúp tiết kiệm rất nhiều thời gian cho doanh nghiệp và đẩy nhanh tiến độ sản xuất.",
                                                "Vùng ảnh hưởng nhiệt nhỏ: Vì cắt laser có vết cắt nhỏ nên nhiệt không bị phân tán nhiều như các phương pháp cắt khác hạn chế biến dạng sản phẩm.",
                                            ]}
                                        />
                                        <ProductDetailDesc>
                                            <div class="tab-content" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                <div class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom" id="tabs-1" aria-labelledby="ui-id-1" role="tabpanel" aria-expanded="true" aria-hidden="false">
                                                    <div class="tab-content clearfix" id="tabs-1">
                                                        <p>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "18px" }}>
                                                                <strong>
                                                                    Mô tả chung
                                                                </strong>
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>
                                                                Chùm tia laser được phát ra từ nguồn phát có mức năng lượng cao, mức nhiệt độ cao. Nhờ hệ thống các thấu kính hội tụ giúp tia laser tập trung lại chiếu vào bề mặt phôi kim loại gia công.
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>
                                                                Chùm tia laser hội tụ sẽ đốt cháy và làm nóng phôi kim loại tại vị trí cần cắt, sau đó sử dụng dòng khí áp lực cao thổi kim loại nóng chảy ra khỏi phôi tạo nên vết cắt có bề mặt nhẵn đẹp theo yêu cầu.
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>
                                                                Thông thường máy cắt laser sẽ được lập trình sẵn và khi vận hành, vết cắt sẽ theo bản vẽ mà máy được lập trình sẵn. Từ đó tạo nên những hoạ tiết, hình khối trên bề mặt kim loại một cách chính xác, tỉ mỉ, chuyên nghiệp trên các vật liệu kim loại như thép, inox, nhôm, đồng, …
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </ProductDetailDesc>
                                    </div>
                                </div>
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

export default ProductGiaCongLaze