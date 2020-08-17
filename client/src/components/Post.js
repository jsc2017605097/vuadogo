import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'
import Loading from './Loading'

export default function Post() {
    const product = useSelector(state => state.product)
    const filter = useSelector(state => state.filter)
    const productToShow = product.filter(p => {
        if (filter.category === 'ALL') {
            return p.name.toLowerCase().indexOf(filter.name.toLowerCase()) > -1
        }
        return p.name.toLowerCase().indexOf(filter.name.toLowerCase()) > -1 && p.category._id === filter.category
    })

    return product.length === 0 ? <Loading loading={true} /> : <div>
        {
            productToShow.map(item => {
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

