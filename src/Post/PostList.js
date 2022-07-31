import React, { Component } from 'react'
import { productList } from "./../local_data/post-mimic";
import Product from './Product';

class ProductList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: []
        }
    }

    getProductsFromDb = async () => {
        let products = await productList();
        this.setState({ products: products })
    }

    componentDidMount = () => {
        this.getProductsFromDb();
    }

    render() {

        return (
            <div>
                {
                    this.state.products?.map((item) =>
                        <ul>
                            <Product key={item.id} info={item}></Product>
                        </ul>
                    )
                }
            </div>
        )
    }
}

export default ProductList
