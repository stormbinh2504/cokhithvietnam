import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { PATH_NAME, setPathName } from '../../../utils';
import { setMenuActive } from '../../../redux/actions'

import "./ToolPhoneZaloChat.scss"

const ToolPhoneZaloChat = ({ children }) => {

    const history = useHistory()
    const dispatch = useDispatch()


    return (
        <div className='tool-phone-zalo-chat'>
            <div className="hotline-phone-ring-wrap hotline-phone-ring-wrap-1">
                <div class='phonering-alo-phone'>
                    <div class="phonering-alo-ph-circle-fill"></div>
                    <a rel="nofollow" target="_blank" href="tel:0966090984" class="alo-ph-img-circle img-phonering"></a>
                </div>
                <div class="hotline-bar">
                    <a href="tel:0966090984">
                        <span class="text-hotline">0966 090 984</span>
                    </a>
                </div>
            </div>
            <div className="hotline-phone-ring-wrap hotline-phone-ring-wrap-2">
                <div class='phonering-alo-phone'>
                    <div class="phonering-alo-ph-circle-fill"></div>
                    <a rel="nofollow" target="_blank" href="tel:0362885789" class="alo-ph-img-circle img-phonering"></a>
                </div>
                <div class="hotline-bar">
                    <a href="tel:0362885789">
                        <span class="text-hotline">0362 885 789</span>
                    </a>
                </div>
            </div>
            <div className="hotline-phone-ring-wrap hotline-phone-ring-wrap-3">
                <div class='phonering-alo-phone'>
                    <div class="phonering-alo-ph-circle-fill"></div>
                    <a rel="nofollow" target="_blank" href="tel:0961537985" class="alo-ph-img-circle img-phonering"></a>
                </div>
                <div class="hotline-bar">
                    <a href="tel:0961537985">
                        <span class="text-hotline">0961 537 985</span>
                    </a>
                </div>
            </div>
            <div class="zaloring-alo-phone">
                <div class="phonering-alo-ph-circle-fill"></div>
                <a rel="nofollow" target="_blank" href="https://zalo.me/0966090984" class="alo-ph-img-circle img-zaloring"></a>
            </div>
            <div class="mess-facebook">
                <a rel="nofollow" target="_blank" href="https://zalo.me/0966090984" class="fb-btn"></a>
            </div>
            <div class="youtube-recomend">
                <a rel="nofollow" target="_blank" href="https://www.youtube.com/channel/UCujSpAxemyTW8bqDYuth2sg" class="youtube-btn"></a>
            </div>
        </div >
    )
}

export default ToolPhoneZaloChat