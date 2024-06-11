import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductMangCap.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_mang_cap/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_mang_cap/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_mang_cap/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_mang_cap/img4.jpg"

const ProductMangCap = () => {
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
                        path: PATH_NAME.MANG_CAP,
                        title: "Máng cáp"
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
                                                <div className="col-12 col-md-5">
                                                    <ProductDesc
                                                        productDesc={{
                                                            title: "Máng cáp"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "An toàn cho hệ thống điện",
                                                "Quảng lý dây cáp dễ dàng, giữ cho các dây điện được tổ chức, sắp xếp theo quy trình, ngăn chặn rối dây",
                                                "Bảo vệ cáp, giảm thiểu rủi do, hỏng hóc cho cáp",
                                                "Tăng tuổi thọ dây cáp, chống oxi hóa và biến dạng",
                                                "Dễ dàng quản lý dây cáp, tiếp cận để thực hiện công tác bảo trì, kiểm tra thay thế dây cáp mới",
                                                "Nâng cao tính thẩm mỹ của công trình"
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
                                                                Máng cáp điện sản xuất thành phẩm để có chiều dài quy chuẩn 2.5 mét hoặc 3 mét bao gồm phần thân, nắp, nối máng cáp và bộ bulong. Để sản xuất ra máng cáp nhà sản xuất phải qua nhiều công đoạn cắt, chấn, xử lý bề mặt.
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>
                                                                Từ phôi vật liệu là tole, tấm máng cáp được chấn 2 đường tạo thành hình chữ C cứng cáp. Với cấu tạo như vậy, sản phẩm dễ dàng nâng hệ thống dây dẫn và dễ dàng cố định nắp máng bên trên.
                                                            </span>
                                                        </p>
                                                        <hr />
                                                        <p>
                                                            <span style={{ fontSize: "18px" }}>
                                                                <strong>
                                                                    Ứng dụng
                                                                </strong>
                                                            </span>
                                                        </p>
                                                        <p>
                                                            <span style={{ fontSize: "15px" }}>
                                                                Máng cáp đóng vai trò là hệ thống dẫn nối dây cáp điện lắp đặt dưới dạng treo nhằm bảo vệ dây cáp điện không bị tác động gây tổn hạn, ngăn khả năng va chạm với vật ngoài làm chập điện gây cháy, đồng thời dây cáp được hệ thống một cách gọn gàng. Việc đây tổn hại đến hệ thống dây cáp điện cảu công trình gây ra nhiều rủi ro nguy hiểm và nhiều thiệt hại cho chủ đầu tư, con người.
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

export default ProductMangCap