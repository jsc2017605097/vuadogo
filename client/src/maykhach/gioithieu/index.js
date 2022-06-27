import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Container } from "reactstrap"
import { useEffect, useState } from 'react';
import axios from 'axios';
const Example = (props) => {
    const [content, setContent] = useState("");
    useEffect(() => {
        axios({
            method: 'get',
            url: '/api/intro/62b80ab49c6d0e3e7ca135b8',
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
            .then(res => {
                setContent(res.data.content);
            })
            .catch(error => {
                console.log(error.message);
            })
    }, [])
    return (
        <div>
            <Jumbotron>
                <Container>
                    <section
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <hr className="my-2" />
                    <p>Để biết thêm thông tin chi tiết các sản phẩm nội thất đồ gỗ, quý khách vui lòng xem các sản phẩm dưới đây.</p>
                    <p className="lead">
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;