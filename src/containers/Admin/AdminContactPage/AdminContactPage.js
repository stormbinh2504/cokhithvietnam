import React, { useState, useEffect } from 'react'
import { imageUpload } from '../../../utils/imageUpload'
import { sdkVNPTService, authService, apiBinance, apiMexc } from '../../../services';
import { compressImage } from "../../../utils/imageUpload"
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import { loginStart, loginSucess, loginFail } from '../../../redux/actions/userActions'
import { alertType } from '../../../redux/actions/alertActions'
import { CommonUtils, ToastUtil } from '../../../utils'
import _ from 'lodash';
import { connect } from 'react-redux';
import moment from 'moment'
import "./AdminContactPage.scss"
import { Space, Table, Tag, Divider, Radio } from 'antd';
import axios from 'axios';
import { firebaseMethods } from '../../../firebase/firebaseMethods';
const { Column, ColumnGroup } = Table;


const AdminContactPage = ({ userInfo }) => {
    const history = useHistory()
    const { email } = userInfo
    const dispatch = useDispatch()
    const { auth } = useSelector((state) => state);

    const [listContact, setListContact] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        await fetchListContact();
    }, []);

    const fetchListContact = async () => {
        try {
            const res = await firebaseMethods.getDatabaseInFirebase("listContact");
            let arr = Object.keys(res).map(key => ({ id: key, ...res[key] })).sort((a, b) => b.ts - a.ts);;
            console.log("bh_fetchListContact", res, arr);
            setListContact(arr)
        } catch (error) {
            ToastUtil.errorApi(error, "Gửi thông tin liên hệ không thành công");
        }
    }

    return (
        <div div className='admin-contact-page' >
            <div className="admin-contact-page-container">
                <div className="admin-contact-page-content">
                    {/* <div className="container-action style-add">
                        <button className="btn btn-add" onClick={
                            () => {
                                setPage(1)
                                fetchInfoSymbol()
                            }
                        }>Call Data </button>
                        <button className="btn btn-add" onClick={addSymbols}>Save symbol</button>
                        <button className="btn btn-add" onClick={fetchListContact}>Get symbol</button>
                        <button className="btn btn-add" onClick={clearAllSymbols}>Clear All symbol</button>
                    </div> */}
                    <div className="table-admin-contact-page">
                        <Table
                            // rowSelection={{
                            //     type: 'checkbox',
                            //     selectedRowKeys: selectedRowSymbols,
                            //     onChange: onSelectedRowKeysChange
                            // }}

                            loading={loading}
                            dataSource={listContact}
                            scroll={{ x: 1000 }}
                            pagination={false}
                            sticky={true}
                        >

                            <Column
                                title="STT" dataIndex="index" key="index" width={50} align='center'
                                render={(text, record, index) => index + 1}
                            />
                            <Column title="Tên khách hàng" dataIndex="name" key="name" width={100} align='center' />
                            <Column title="Email" dataIndex="email" key="email" width={100} align='center' />
                            <Column title="Số điện thoại" dataIndex="phone" key="phone" width={100} align='center' />
                            <Column title="Thời gian gửi" dataIndex="formattedDate" key="formattedDate" width={100} align='center' />
                            {/* 
                            <Column
                                title="KLTB 3 ngày trước"
                                dataIndex="averageVolume3DaysPre"
                                key="averageVolume3DaysPre"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume3DaysPre - b.averageVolume3DaysPre}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}

                            />
                            <Column
                                title="KLTB 3 ngày tiếp theo"
                                dataIndex="averageVolume3DaysNext"
                                key="averageVolume3DaysNext"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume3DaysNext - b.averageVolume3DaysNext}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}
                            />
                            <Column
                                title="% KLTB 3 ngày"
                                dataIndex="percentAverageVolume3Days"
                                key="percentAverageVolume3Days"
                                width={250} align='center'
                                sorter={(a, b) => a.percentAverageVolume3Days - b.percentAverageVolume3Days}
                                render={
                                    (text) => <span className={"" + CommonUtils.getClassCheckValue(text)}>{CommonUtils.formatNumber(text)}%</span>
                                }
                            />


                            <Column
                                title="KLTB 7 ngày trước"
                                dataIndex="averageVolume7DaysPre"
                                key="averageVolume7DaysPre"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume7DaysPre - b.averageVolume7DaysPre}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}

                            />
                            <Column
                                title="KLTB 7 ngày tiếp theo"
                                dataIndex="averageVolume7DaysNext"
                                key="averageVolume7DaysNext"
                                width={250} align='center'
                                sorter={(a, b) => a.averageVolume7DaysNext - b.averageVolume7DaysNext}
                                render={(text) => <span>{CommonUtils.formatNumber(text)}</span>}
                            />
                            <Column
                                title="% KLTB 7 ngày"
                                dataIndex="percentAverageVolume7Days"
                                key="percentAverageVolume7Days"
                                width={250} align='center'
                                sorter={(a, b) => a.percentAverageVolume7Days - b.percentAverageVolume7Days}
                                render={
                                    (text) => <span className={"" + CommonUtils.getClassCheckValue(text)}>{CommonUtils.formatNumber(text)}%</span>
                                }
                            /> */}
                        </Table>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps)(AdminContactPage);