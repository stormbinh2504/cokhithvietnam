import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductBangTai.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_bang_tai/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_bang_tai/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_bang_tai/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_bang_tai/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_bang_tai/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_bang_tai/img6.jpg"
import img7 from "../../../assets/images/product_collections/product_bang_tai/img7.jpg"
import img8 from "../../../assets/images/product_collections/product_bang_tai/img8.jpg"
import img9 from "../../../assets/images/product_collections/product_bang_tai/img9.jpg"
import img10 from "../../../assets/images/product_collections/product_bang_tai/img10.jpg"
import img11 from "../../../assets/images/product_collections/product_bang_tai/img11.jpg"
import img12 from "../../../assets/images/product_collections/product_bang_tai/img12.jpg"
import img13 from "../../../assets/images/product_collections/product_bang_tai/img13.jpg"
import img14 from "../../../assets/images/product_collections/product_bang_tai/img14.jpg"
import img15 from "../../../assets/images/product_collections/product_bang_tai/img15.jpg"
import img16 from "../../../assets/images/product_collections/product_bang_tai/img16.jpg"

const ProductBangTai = () => {
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
        { original: img12, thumbnail: img12 },
        { original: img13, thumbnail: img13 },
        { original: img14, thumbnail: img14 },
        { original: img15, thumbnail: img15 },
        { original: img16, thumbnail: img16 },
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
                        path: PATH_NAME.BANG_TAI,
                        title: "Băng tải/băng truyền"
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
                                                            title: "Băng tải - băng chuyền"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Vận chuyển hàng hóa tự động, liên tục, giúp tiết kiệm nhân công và thời gian sản xuất",
                                                "Ứng dụng rộng rãi trong nhà máy, xưởng sản xuất, kho hàng và dây chuyền công nghiệp",
                                                "Thiết kế linh hoạt, chắc chắn, đáp ứng nhu cầu vận chuyển hàng hóa với khối lượng và kích thước khác nhau",
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
                                                                Trong nhà máy công nghiệp, Hệ thống băng tải băng chuyền đóng vai trò cốt lõi trong quá trình vận hành và hoạt động sản xuất. Đây là dòng sản phẩm gắn liền với hệ thống sản xuất và hệ thống kho hàng, cửa hàng… Hệ thông bang tải, bang chuyền được thiết kế với nhiều nhu cầu hoạt động sản xuất, hỗ trợ nhân công và đáp ứng nhu cầu vận chuyển sản xuất lớn, xuyên suốt và liên tục
                                                            </span>
                                                        </p>
                                                        <div className="product-images">
                                                            {images.map((img, index) => (
                                                                <div className="product-image" key={index}>
                                                                    <img src={img.original} alt={`Băng tải ${index + 1}`} />
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

export default ProductBangTai