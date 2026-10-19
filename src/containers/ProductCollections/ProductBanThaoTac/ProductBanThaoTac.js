import React, { useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../../redux/actions'
import { PATH_NAME } from '../../../utils';
import "./ProductBanThaoTac.scss"
import PageTitle from '../../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../../redux/actions'
import SilderImageThumbnail from '../../Common/SilderImageThumbnail/SilderImageThumbnail';
import ProductDesc from '../../Common/ProductDesc/ProductDesc';
import ListProductSidebar from '../../Common/ListProductSidebar/ListProductSidebar';
import ProductShortDesc from '../../Common/ProductShortDesc/ProductShortDesc';
import ProductDetailDesc from '../../Common/ProductDetailDesc/ProductDetailDesc';

import img1 from "../../../assets/images/product_collections/product_ban_thao_tac/img1.jpg"
import img2 from "../../../assets/images/product_collections/product_ban_thao_tac/img2.jpg"
import img3 from "../../../assets/images/product_collections/product_ban_thao_tac/img3.jpg"
import img4 from "../../../assets/images/product_collections/product_ban_thao_tac/img4.jpg"
import img5 from "../../../assets/images/product_collections/product_ban_thao_tac/img5.jpg"
import img6 from "../../../assets/images/product_collections/product_ban_thao_tac/img6.jpg"
import img7 from "../../../assets/images/product_collections/product_ban_thao_tac/img7.jpg"
import img8 from "../../../assets/images/product_collections/product_ban_thao_tac/img8.jpg"
import img9 from "../../../assets/images/product_collections/product_ban_thao_tac/img9.jpg"
import img10 from "../../../assets/images/product_collections/product_ban_thao_tac/img10.jpg"
import img11 from "../../../assets/images/product_collections/product_ban_thao_tac/img11.jpg"
import img12 from "../../../assets/images/product_collections/product_ban_thao_tac/img12.jpg"
import img13 from "../../../assets/images/product_collections/product_ban_thao_tac/img13.jpg"
import img14 from "../../../assets/images/product_collections/product_ban_thao_tac/img14.jpg"
import img15 from "../../../assets/images/product_collections/product_ban_thao_tac/img15.jpg"
import img16 from "../../../assets/images/product_collections/product_ban_thao_tac/img16.jpg"
import img17 from "../../../assets/images/product_collections/product_ban_thao_tac/img17.jpg"
import img18 from "../../../assets/images/product_collections/product_ban_thao_tac/img18.jpg"
import img19 from "../../../assets/images/product_collections/product_ban_thao_tac/img19.jpg"
import img20 from "../../../assets/images/product_collections/product_ban_thao_tac/img20.jpg"
import img21 from "../../../assets/images/product_collections/product_ban_thao_tac/img21.jpg"

const ProductBanThaoTac = () => {
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
    ];

    return (
        <div className='product-ban-thao-tac'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.COLLECTIONS,
                        title: "Giá kệ"
                    },
                    {
                        path: PATH_NAME.BAN_THAO_TAC,
                        title: "Bàn thao tác"
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
                                                            title: "Bàn thao tác"
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <ProductShortDesc
                                            listDesc={[
                                                "Đảm bảo độ chính xác và hiệu quả trong sản xuất",
                                                "Sản phẩm không thể thiếu trong các dây truyền sản xuất của nhà máy",
                                                "Đa dạng về kích thước, chất liệu",
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
                                                                <strong>Bàn thao tác</strong> là sản phẩm không thể thiếu trong bất cứ một nhà xưởng, nhà máy sản xuât nào. Cơ khi TH Bàn thao tác (tên tiếng Anh là Working table/ Manipulator table) được dùng cho công nhân thao tác thuận tiện. Tác dụng chính của nó dùng để đặt những sản phẩm hoặc chi tiết nhỏ lên đó đề thao tác lắp đặt thành sản phẩm hoàn thiện hoặc kiểm tra QC sản phẩm.
                                                            </span>
                                                            <div className="product-images">
                                                                {images.map((img, index) => (
                                                                    <div className="product-image" key={index}>
                                                                        <img src={img.original} alt={`Bàn thao tác ${index + 1}`} />
                                                                    </div>
                                                                ))}
                                                            </div>
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

export default ProductBanThaoTac