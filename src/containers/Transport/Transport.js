import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Transport.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
const Transport = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    return (
        <div id='transport' className='transport'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.TRANSPORT,
                        title: "Chính sách vận chuyển và giao nhận"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">CHÍNH SÁCH VẬN CHUYỂN VÀ GIAO NHẬN</div>
                            <div className="block-session">
                                <div className="title-session">Thông tin vận chuyển:</div>
                                <div class="body-session">
                                    <div>
                                        Giao hàng tận nơi theo yêu cầu của khách hàng tại tất cả các tỉnh thành trên cả nước
                                    </div>
                                    <div>
                                        Cơ khí TH Việt Nam sẽ bàn giao trong vòng 05 - 07 ngày kể từ ngày nhận được xác nhận đơn đặt hàng của khách hàng.
                                    </div>
                                    <div>
                                        Trước khi vận chuyển, bộ phận giao nhận sẽ liên lạc với Quý khách hàng trước 01 ngày để thông báo và xác nhận thời gian, địa điểm cụ thể cho Quý khách hàng.
                                    </div>
                                    <div>
                                        Thời gian giao hàng và lắp đặt: từ 8h30 đến 17h30 tất cả các ngày trong tuần.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <ListProductSidebar />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
export default Transport