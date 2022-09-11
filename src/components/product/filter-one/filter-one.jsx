import React,{Component} from 'react'
import {Navbar} from 'react-bootstrap/Navbar'
import FilterStyleOneProduct from './filter-style-one';
impory

class ProductFilterOne extends Component {
    state = {
        activeClass: '*',

    };

    handleClick = (e) => {
        const current_class = e.target.getAttribute('data-filter');
        this.setState({
            activeClass: current_class
        });
    }

    render(){
        const {activeClass} = this.state; 
        return (
            <div className="product-filter-for-index-03">
                <div className="container custom-container-1720">
                    <div className="row">
                        
                        <FilterStyleOneProduct />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductFilterOne;