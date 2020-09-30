import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import img1 from '../vuadogo/vuadogo1.jpg'
import img2 from '../vuadogo/vuadogo2.jpg'
import img3 from '../vuadogo/vuadogo3.jpg'
import img4 from '../vuadogo/vuadogo4.jpg'
import img5 from '../vuadogo/vudo1.jpg'

const items = [
    {
        src: img1,
        altText: 'VUA ĐỒ GỖ',
        key: '1',
        captionText:""
    },
    {
        src: img2,
        altText: 'VUA ĐỒ GỖ',
        key: '2',
        captionText:""
    },
    {
        src: img3,
        altText: 'VUA ĐỒ GỖ',
        key: '3',
        captionText:""
    },
    {
        src: img4,
        altText: 'VUA ĐỒ GỖ',
        key: '4',
        captionText:""
    },
    {
        src: img5,
        altText: 'VUA ĐỒ GỖ',
        key: '5',
        captionText:""
    },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;