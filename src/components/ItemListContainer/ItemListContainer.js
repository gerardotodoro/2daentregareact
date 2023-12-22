import { useState, useEffect} from 'react'
import { getProductsByCategory, getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greating}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
        }, [categoryId])




    return (
        <div>
            <h1>{greating}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer