import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavbarText
} from 'reactstrap';
import Logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from "react-scroll";
const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='sticky'>
            <Navbar color="light" light expand="md">
                <Link to='/'><img style={{ borderRadius: "50%" }} alt='logo' src={Logo} width="60px" /></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse className='nav-a' isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <LinkScroll
                                spy={true}
                                smooth={true}
                                to="product"
                                offset={-70}
                                duration={1500}
                            >
                                Đồ gỗ nội thất
                            </LinkScroll>
                        </NavItem>
                        <NavItem>
                            <LinkScroll
                                to="vechungtoi"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                            >
                                Về chúng tôi
                            </LinkScroll>
                        </NavItem>
                        <NavItem>
                            <LinkScroll
                                to="feedback"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                            >
                                Phản hồi của khách hàng
                            </LinkScroll>
                        </NavItem>
                        <NavItem>
                            <LinkScroll
                                to="googlemap"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                            >
                                Google map
                            </LinkScroll>
                        </NavItem>
                        <NavItem>
                            <LinkScroll
                                to="footer"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1500}
                            >
                                Địa chỉ, thông tin chi tiết cửa hàng
                            </LinkScroll>
                        </NavItem>
                    </Nav>
                    <NavbarText>VUA ĐỒ GỖ kính chào quý khách!</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;