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
                    <p className="lead">vuadogo.org – CỬA HÀNG ĐỒ GỖ UY TÍN CHẤT LƯỢNG NHẤT MIỀN BẮC
                    SĐT: <span style={{ color: 'red' }}>0333.02.5556 hoặc 0334985555</span>
                        <br />
                    Website: vuadogo.org
                    <br />
                    Facebook:<a href="https://www.facebook.com/CuahangVuadogo">Facebook</a>
                        <br />
                    Vua Đồ Gỗ hân hạnh là nhà sản xuất, nhà cung cấp trực tiếp các sản phẩm nội thất đồ gỗ với đa dạng mẫu mã đáp ứng mọi nhu cầu sử dụng từ nội thất phòng ngủ, phòng khách, phòng bếp đến trường học, văn phòng,… đảm bảo uy tín và luôn luôn đặt chất lượng lên hàng đầu.
                        <div className='flex'>
                        </div>
                        <br />
                        <b>Các sản phẩm bán ra sơ lược</b>
                        <br />
                    + Nội thất phòng khách: chuyên cung cấp bàn ghế hoàng gia tân cổ điển, gỗ salon sang trọng, bàn trà gỗ, kệ tivi gỗ từ cao cấp đến bình dân, đồng hồ gỗ, tủ giày dép gỗ,…
                    <br />
                    + Nội thất phòng ngủ: cung cấp các sản phẩm giường ngủ gỗ tự nhiên, tủ quần áo gỗ hiện đại giá rẻ, táp đầu giường, bàn trang điểm (bàn phấn) gỗ, kệ túi,...
                    <br />
                    + Nội thất nhà bếp, phòng ăn: cung cấp các bộ bàn ăn gỗ, bàn gỗ, ghế gỗ, tủ rượu, kệ rượu,...
                    <br />
                    + Nội thất thờ cúng: cung cấp các sản phẩm bàn thờ gỗ, tủ thờ gỗ, sập thờ gỗ, án gian gỗ,...
                    <br />
                    + Nội thất khác:  cung cấp các sản phẩm tượng gỗ, tranh gỗ, bàn học sinh, bàn làm việc, bàn giám đốc, hộp trang điểm, đũa, hộp giấy gỗ, đốc lịch gỗ,...
                    Ngoài ra, VUA ĐỒ GỖ còn nhận làm cửa gỗ, cầu thang gỗ, cửa đại hội, bậc thang gỗ,...
                    <br />
                    <br />
                        <b>XƯỞNG CAM KẾT:</b>
                        <br />
                    - Nói KHÔNG với hàng kém chất lượng.
                    <br />
                    - Bảo hành, bảo trì chọn đời sản phẩm.
                    <br />
                    - Giá gốc tại Xưởng không qua trung gian. Giá luôn rẻ nhất. Rẻ hơn từ 3-10 triệu so với bình thường.
                    <br />
                    - Hàng có sẵn trong kho. Đa dạng mẫu mã.
                    <br />
                    - Khách có thể chọn Mộc, xưởng hoàn thiện theo yêu cầu của khách.
                    <br />
                    - Nhận đặt hàng theo yêu cầu.
                    <br />
                    - Nhận sửa chữa, làm mới bàn ghế cũ thành mới.
                    <br />
                    - Giao hàng và thanh toán tận nhà trên toàn quốc. Miễn phí vận chuyển phạm vi từ cửa hàng đi 30km.
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