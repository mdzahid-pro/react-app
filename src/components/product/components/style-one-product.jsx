import React from "react";
import IconRating from "./ratting-icon";

export default function ProductStyleOne({img, imgAlt, title,ratting,rattingCount,slug,sellPrice}){
    return (
        <div className="single-product-view-grid-style-04">
            <div className="product-thumb">
                <a href="#" className="img-link">
                    <img src={img} alt={imgAlt} />
                </a>
            </div>
            <div className="product-content">
                <div className="main-content">
                    <h4 className="product-title">
                        <a href="#">{title}</a>
                    </h4>
                    <div className="bottom-content">
                        <div className="left-content">
                            <div className="ratings">
                                <span className="icon-wrap">
                                    <IconRating avg_rating={ratting} />
                                </span>
                                <span className="total-feedback">({ rattingCount })</span>
                            </div>
                            <div className="product-pricing">
                                <span className="price">${sellPrice}</span>
                            </div>
                        </div>
                        <div className="right-content">
                            <a href="#" className="cart">
                                <i className="las la-cart-plus icon"></i>
                            </a>
                            <a href="#" className="wishlist-x">
                                <i className="lar la-heart icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}