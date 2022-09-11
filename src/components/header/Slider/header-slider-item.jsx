import React from "react";

export default function HeaderSliderItem(props){
    const {imageUrl, subtitle, title, description, btn_text, btnUrl} = props;
    return (
        <div className="single-slider-item bg"
            style={{background: "url("+ imageUrl +")"}}>
            <div className="content">
                <h5 className="sub-title">{subtitle}</h5>
                <h1 className="title">{ title }</h1>
                <p className="offer-title">{ description }</p>
                <div className="btn-wrapper">
                    <a href={ btnUrl } className="btn-default transparent-btn-1">{btn_text}</a>
                </div>
            </div>
        </div>
    );
}