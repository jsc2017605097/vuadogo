import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img1 from '../vuadogo/vuadogo1.JPG'
import img2 from '../vuadogo/vuadogo2.JPG'
import img3 from '../vuadogo/vuadogo3.JPG'
import img4 from '../vuadogo/vuadogo4.JPG'
import img5 from '../vuadogo/vuado1.JPG'

const items = [
    {
        src: img1,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: ' CỬA HÀNG VUA ĐỒ GỖ',
        key: '1'
    },
    {
        src: img2,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'SẢN PHẦM NỔI BẬT',
        key: '2'
    },
    {
        src: img3,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'KHAI TRƯƠNG VUA ĐỒ GỖ',
        key: '3'
    },
    {
        src: img4,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'KHAI TRƯƠNG VUA ĐỒ GỖ',
        key: '4'
    },
    {
        src: img5,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'ĐẦY ĐỦ CÁC LOẠI SẢN PHẨM TẠI VUA ĐỒ GỖ',
        key: '5'
    },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;