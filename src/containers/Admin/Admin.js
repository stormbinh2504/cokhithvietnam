import React, { useState, useEffect } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/actions'
import { PATH_NAME } from '../../utils';
import "./Admin.scss"

const Admin = () => {
    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div id='contact' className='contact'>
            abc
        </div >
    )
}
export default Admin