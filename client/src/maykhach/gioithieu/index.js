import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Container } from "reactstrap"
import Button from '@material-ui/core/Button';
import { Link as LinkScroll } from "react-scroll";

const Example = (props) => {
    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1>VUA ĐỒ GỖ</h1>
                    <p className="lead">VUA ĐỒ GỖ chuyên sản xuất và cung cấp các sản phẩm nội thất cho gia đình như là phòng ngủ, phòng bếp
                    phòng thờ,phòng khách...Gỗ được làm tự nhiên, có nguồn gốc rõ ràng...
                    </p>
                    <hr className="my-2" />
                    <p>Để biết thêm thông tin chi tiết các sản phẩm nội thất đồ gỗ, quý khách vui lòng xem các sản phẩm dưới đây.</p>
                    <p className="lead">
                        <Button variant="contained" color="primary"><LinkScroll
                            spy={true}
                            smooth={true}
                            to="product"
                            offset={-70}
                            duration={1500}
                        >
                            Mua ngay
                            </LinkScroll></Button>
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;