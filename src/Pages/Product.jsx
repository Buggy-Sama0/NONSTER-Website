
import './product.css'
import {productList} from './productList'

function Product() {

    return (
        <div className='product-list'>
            {productList.map((product)=>(
                <div className='product' key={product.id}>
                    <img src={product.productImage}/>
                    <h2>{product.productName}</h2>
                    {/* <p>${product.price}</p> */}
                    <button>Purchase</button>
                </div>
            ))}
        </div>
    )
}

export default Product