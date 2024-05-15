import React, { useState } from 'react'
import "./InfoContact.scss"

const InfoContact = ({ isOpen, toogle }) => {
    const [formContact, setFormContact] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        const url = '/home/customer';
        let formData = new FormData();
        for (var k in formContact) {
            formData.append(k, formContact[k]);
        }

        fetch(url, {
            method: 'post',
            body: formData,
        })
            .then((res) => res.json()).then((data) => {
                console.log(data);
                alert(data.message);
                if (data.code === 'success') {
                    window.location.href = '/';
                }
            });
    }
    return (
        <div className="info-contact">
            <div className="wrap-info-contact">
                <div className="wrap-content-right">
                    <div className="title">
                        Liên hệ với chúng tôi
                    </div>
                    <div className="input-info">
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-user-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                value={formContact.name}
                                onChange={(e) => setFormContact({ ...formContact, name: e.target.value })}
                                className="form-input" id="name"
                                name="name"
                                placeholder="Nhập tên"
                                required=""
                                data-error="Please enter your name"
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="text"
                                value={formContact.phone}
                                onChange={(e) => setFormContact({ ...formContact, phone: e.target.value })}
                                className="form-input"
                                id="phone"
                                name="phone"
                                placeholder="Số điện thoại"
                                required
                                data-error="Please enter your name"
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <input
                                type="email"
                                value={formContact.email}
                                onChange={(e) => setFormContact({ ...formContact, email: e.target.value })}
                                className="form-input"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                data-error="Please enter your name"
                            />
                        </div>
                        <div className="group-input">
                            <div className="icon-input item-center">
                                <div className="icon-input-content">
                                    <i class="fa fa-comment-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <textarea
                                value={formContact.message}
                                onChange={(e) => setFormContact({ ...formContact, message: e.target.value })}
                                className="form-input"
                                id="message"
                                placeholder="Nội dung yêu cầu"
                                rows="4"
                                data-error="Write your message" required>
                            </textarea>
                        </div>
                        <div className="btn-container">
                            <button className="btn btn-send" id="submit" type="submit" onClick={handleSubmit}>
                                Gửi liên hệ
                            </button>
                            <button className="btn btn-clear" onClick={handleSubmit}>
                                Xóa nội dung
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoContact