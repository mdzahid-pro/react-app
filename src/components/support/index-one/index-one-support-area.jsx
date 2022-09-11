import React from "react";
import SupportItemIndexOne from "./index-one-support-items";

export default function SupportAreaIndexOne(){
    return (
        // <!-- support area start -->
    <div className="support-area-wrapper index-01 index-03">
        <div className="container custom-container-1720">
            <div className="row support-item-wrap">
                <SupportItemIndexOne title="free shipping" iconClass="flaticon-free-delivery icon" description="We provide 100% Original item" />
                <SupportItemIndexOne title="fresh product" iconClass="flaticon-vegetable icon" description="We provide 100% Original item" />
                <SupportItemIndexOne title="100% Secure Payment" iconClass="flaticon-purse icon" description="We Ensure Secure Transections" />
                <SupportItemIndexOne title="24/7 Support Center" iconClass="flaticon-headphones icon" description="We are available in 24 hours" />
            </div>
        </div>
    {/* <!-- support area end --> */}
    </div>
    );
}