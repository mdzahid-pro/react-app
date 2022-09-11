import React from "react";

export default function SupportItemIndexOne(props){
    const {title, iconClass, description} = props; 
    return (
        <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="single-support-item">
                <div className="icon-box">
                    <i className={iconClass}></i>
                </div>
                <div className="content">
                    <h5 className="title">{ title }</h5>
                    <p className="info">{ description }</p>
                </div>
            </div>
        </div>
    );
}