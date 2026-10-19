import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductPaletXepChong.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_palet_xep_chong/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_palet_xep_chong/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_palet_xep_chong/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_palet_xep_chong/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_palet_xep_chong/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_palet_xep_chong/img6.jpg"
import img7 from "../../../assets/images/product_collections/product_palet_xep_chong/img7.jpg"
import img8 from "../../../assets/images/product_collections/product_palet_xep_chong/img8.jpg"
import img9 from "../../../assets/images/product_collections/product_palet_xep_chong/img9.jpg"
import img10 from "../../../assets/images/product_collections/product_palet_xep_chong/img10.jpg"
import img11 from "../../../assets/images/product_collections/product_palet_xep_chong/img11.jpg"
import img12 from "../../../assets/images/product_collections/product_palet_xep_chong/img12.jpg"
import img13 from "../../../assets/images/product_collections/product_palet_xep_chong/img13.jpg"
import img14 from "../../../assets/images/product_collections/product_palet_xep_chong/img14.jpg"
import img15 from "../../../assets/images/product_collections/product_palet_xep_chong/img15.jpg"
import img16 from "../../../assets/images/product_collections/product_palet_xep_chong/img16.jpg"
import img17 from "../../../assets/images/product_collections/product_palet_xep_chong/img17.jpg"
import img18 from "../../../assets/images/product_collections/product_palet_xep_chong/img18.jpg"
import img19 from "../../../assets/images/product_collections/product_palet_xep_chong/img19.jpg"
import img20 from "../../../assets/images/product_collections/product_palet_xep_chong/img20.jpg"
import img21 from "../../../assets/images/product_collections/product_palet_xep_chong/img21.jpg"
import img22 from "../../../assets/images/product_collections/product_palet_xep_chong/img22.jpg"

const ProductPaletXepChong = () => {
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
        { original: img17, thumbnail: img17 },
        { original: img18, thumbnail: img18 },
        { original: img19, thumbnail: img19 },
        { original: img20, thumbnail: img20 },
        { original: img21, thumbnail: img21 },
        { original: img22, thumbnail: img22 },
    ];

    return (
        <div className='product-palet-xep-chong'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Giá kệ"
                    },
                    {
                        path: PATH_NAME.PALET_XEP_CHONG,
                        title: "Palet xep chong"
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
                                                            title: "Palet xep chong"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Thiết kế chắc chắn, chịu tải tốt, giúp lưu trữ và sắp xếp hàng hóa gọn gàng trong kho",
                                                "Có thể xếp chồng lên nhau khi sử dụng hoặc khi không chứa hàng, giúp tối ưu diện tích lưu trữ",
                                                "Ứng dụng rộng rãi trong nhà máy, kho hàng và khu vực sản xuất, thuận tiện cho việc vận chuyển và quản lý hàng hóa",
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
                                                                Palet xếp chồng là giải pháp lưu trữ hàng hóa hiệu quả, được sử dụng phổ biến trong các nhà máy, kho hàng và khu vực sản xuất. Sản phẩm có thiết kế chắc chắn, khả năng chịu tải tốt và có thể xếp chồng lên nhau, giúp tận dụng tối đa không gian kho bãi. Palet thuận tiện cho việc sắp xếp, lưu trữ và vận chuyển hàng hóa, góp phần tối ưu diện tích và nâng cao hiệu quả quản lý kho.
                                                            </span>
                                                        </p>
                                                        <div className="product-images">
                                                            {images.map((img, index) => {
                                                                if (index < 12) {

                                                                    return (
                                                                        <div className="product-image" key={index}>
                                                                            <img src={img.original} alt={`Băng tải ${index + 1}`} />
                                                                        </div>
                                                                    )
                                                                }
                                                                return <></>
                                                            })}
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

export default ProductPaletXepChong