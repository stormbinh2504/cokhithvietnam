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

const ProductXeDay = () => {
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
        },
        {
            original: img5,
            thumbnail: img5,
        },
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
                                                                Xe đẩy hàng là sản phẩm quan trọng gắn liền với hệ thống kho hàng. Giải quyết vấn đề di chuyển hàng hóa linh động mà không cần sử dụng tới xe nâng. Chất liệu sử dụng đa dạng như thép, inox phù hợp với mọi nhu cầu sử dụng
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

export default ProductXeDay