import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import phongngu from '../../images/phongngu.png'
import phongtho from '../../images/phongtho.jpg'
import phongkhach from '../../images/phongkhach.png'

const items = [
    {
        src: phongkhach,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'ĐỒ GỖ VỀ PHÒNG KHÁCH',
        key: '1'
    },
    {
        src: phongngu,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'ĐỒ GỖ VỀ PHÒNG NGỦ',
        key: '2'
    },
    {
        src: phongtho,
        altText: 'VUA ĐỒ GỖ',
        caption: 'VUA ĐỒ GỖ',
        header: 'ĐỒ GỖ VỀ PHÒNG THỜ',
        key: '3'
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;