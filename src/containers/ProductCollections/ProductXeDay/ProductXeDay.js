import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductXeDay.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_xe_day/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_xe_day/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_xe_day/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_xe_day/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_xe_day/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_xe_day/img6.jpg"
import img7 from "../../../assets/images/product_collections/product_xe_day/img7.jpg"
import img8 from "../../../assets/images/product_collections/product_xe_day/img8.jpg"
import img9 from "../../../assets/images/product_collections/product_xe_day/img9.jpg"
import img10 from "../../../assets/images/product_collections/product_xe_day/img10.jpg"
import img11 from "../../../assets/images/product_collections/product_xe_day/img11.jpg"

const ProductXeDay = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const images = [
        { original: img1, thumbnail: img1 },
        { original: img2, thumbnail: img2 },
        { original: img3, thumbnail: img3 },
        { original: img4, thumbnail: img4 },
        { original: img5, thumbnail: img5 },
        { original: img6, thumbnail: img6 },
        { original: img7, thumbnail: img7 },
        { original: img8, thumbnail: img8 },
        { original: img9, thumbnail: img9 },
        { original: img10, thumbnail: img10 },
        { original: img11, thumbnail: img11 },
    ];

    return (
        <div className='product-xe-day'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Giá kệ"
                    },
                    {
                        path: PATH_NAME.BAN_THAO_TAC,
                        title: "Xe đẩy"
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
                                                            title: "Xe đẩy"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Vận chuyển hàng hóa linh động, tiết kiệm sức lao động và thời gian",
                                                "Dòng sản phẩm gắn liền với hệ thống kho hàng",
                                                "Thiết kế tay nắm và bánh xe chắc chắn tạo độ bền cao",
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
                                                                Trong các kho hàng công nghiệp việc sử dụng xe đẩy hàng (hay còn gọi là xe kéo hàng) cực kỳ cần thiết bởi chúng mang đến sự thuận tiện nhất cho người dùng. Đây là dòng sản phẩm gắn liền với hệ thống kho hàng, cửa hàng… Xe đẩy hàng có thiết kế nhỏ gọn kết hợp với chức năng vận chuyển sẽ là phương tiện cực kỳ thích hợp dành cho những kho hàng công nghiêp, có lượng hàng lớn cần di chuyển.
                                                            </span>
                                                        </p>
                                                        <div className="product-images">
                                                            {images.map((img, index) => (
                                                                <div className="product-image" key={index}>
                                                                    <img src={img.original} alt={`Bàn thao tác ${index + 1}`} />
                                                                </div>
                                                            ))}
                                                        </div>
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

export default ProductXeDay