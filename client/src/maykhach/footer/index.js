import React from 'react'
import './index.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useSelector} from 'react-redux'

export default function Footer() {
    const category = useSelector(state=>state.category)

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Về chúng tôi</h6>
                        <p className="text-justify">Vuadogo.com <i>CODE WANTS TO  </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Danh mục</h6>
                        <ul className="footer-links">
                            {
                                category.map(c=><li key={c._id}>{c.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className="col-xs-6 col-md-3">
                        <h6>Truy cập nhanh</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright © 2017 All Rights Reserved by
                            <a href="https://react-icons.github.io/search">{' '}JSC</a>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="https://react-icons.github.io/search" href="facebook.com"><FacebookIcon /></a></li>
                            <li><a className="https://react-icons.github.io/search" href="twitter.com"><TwitterIcon /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
