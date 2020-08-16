import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Loading from './Loading'

export default function Post() {
    const product = useSelector(state => state.product)
    return product.length === 0 ? <Loading loading={true} /> : <div style={{ borderRadius: "8px" }}>
        {
            product.map(item => {
                return <Card author={item.user.name}
                    date={item.created_at}
                    name={item.name}
                    img={item.img}
                    category={item.category.name}
                    describtion={item.describtion}
                    id={item._id}
                />
            })
        }
    </div>
}

