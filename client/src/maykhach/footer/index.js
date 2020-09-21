import React from 'react'
import './index.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useSelector } from 'react-redux'

export default function Footer() {
    const category = useSelector(state => state.category)

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Về chúng tôi</h6>
                        <p className="text-justify">Vuadogo.com <i> LUÔN MONG MUỐN  </i> mang đến những sản phẩm tốt nhất cho khách hàng, VUA ĐỒ GỖ
                        chuyên sản xuất và cung cấp các sản phẩm nội thất cho gia đình như là phòng ngủ,
                        phòng bếp phòng thờ,phòng khách...Gỗ được làm tự nhiên, có nguồn gốc rõ ràng....</p>
                        <div>Địa chỉ: Đường tỉnh 76, xã Hợp Tiến, huyện Mỹ Đức, thành phố Hà Nội.</div>
                        <div>Số điện thoại: 0982839405</div>
                        <div>Facebook: <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/CuahangVuadogo">https://www.facebook.com/CuahangVuadogo</a></div>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Danh mục</h6>
                        <ul className="footer-links">
                            {category.map(c => <li key={c._id}>{c.name}</li>)}
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Tài khoản ngân hàng</h6>
                        <ul className="footer-links">
                            <li>Chủ tài khoản: Đỗ Việt Dương</li>
                            <li>Techcombank: 3243243287548543</li>
                            <li>Lienviet: 3243243287548543</li>
                            <li>Agribank: 3243243287548543</li>
                            <li>Vietcombank: 3243243287548543</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright © 2020 All Rights Reserved by
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/messages/t/100010462548931">{' '}JSC</a>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a rel="noopener noreferrer" target="_blank" className="https://react-icons.github.io/search" href="https://www.facebook.com/CuahangVuadogo"><FacebookIcon /></a></li>
                            <li><a rel="noopener noreferrer" target="_blank" className="https://react-icons.github.io/search" href="twitter.com"><TwitterIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
