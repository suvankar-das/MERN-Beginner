import React, { Component } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import './product.css'

class Product extends Component {
    constructor (props) {
        super(props)
        this.state = {
            category: '',
            id: 0,
            description: '',
            image: '',
            title: '',
            rating: {},
            price: 0
        }
    }
    componentDidMount = () => {
        let { id, category, description, image, title, rating, price } = this.props.info;
        this.setState({
            id, category, description, title, image, rating, price
        })
    }
    render() {
        return (
            <div class="product-card">
                <div class="badge">Hot</div>
                <div class="product-tumb">
                    <img src={this.state.image} alt=""></img>
                </div>
                <div class="product-details">
                    <span class="product-catagory">{this.state.category}</span>
                    <h4><a href="">{this.state.category}</a></h4>
                    <p>{this.state.description}</p>
                    <div class="product-bottom-details">
                        <div class="product-price"><small>${(this.state.price * 1.6).toFixed(2)}</small>${this.state.price}</div>
                        <div class="product-links">
                            <a href=""><FaHeart></FaHeart></a>
                            <a href=""><FaShoppingCart></FaShoppingCart></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
