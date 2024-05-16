import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Project.scss"
import PageTitle from '../Common/PageTitle/PageTitle';
import { setMenuActive } from '../../redux/actions'
import { connect } from 'react-redux';
import about from "../../assets/images/about/about.png"
import ListProductSidebar from '../Common/ListProductSidebar/ListProductSidebar';
import InfoContact from '../Common/InfoContact/InfoContact';
import ListProject from './ListProject/ListProject';
const Project = ({ google }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div id='project' className='project'>
            <PageTitle
                listPageTitle={[
                    {
                        path: PATH_NAME.PROJECT,
                        title: "Dự án hoàn thành"
                    }
                ]}
            />
            <section className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <div className="title-page item-center">DỰ ÁN HOÀN THÀNH</div>
                            <div className="block-session">
                                <div className="title-session">Bảo hành:</div>
                                <div class="body-session">
                                    <div>Mọi sản phẩm của Cơ khí TH Việt Nam đều có một chế độ bảo hành theo tiêu chuẩn và phù hợp với từng loại sản phẩm.
                                    </div>
                                    <div>
                                        Chúng tôi cam kết thực hiện nghĩa vụ bảo hành trong vòng tối đa 48h sau khi nhận được thông báo của khách hàng.
                                    </div>
                                </div>
                            </div>

                            <ListProject />
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
export default Project