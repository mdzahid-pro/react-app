import React from "react";
import SocialIconList from "../../common/social/social-icon-list";
import FaqAndHelp from "../../common/help-faq/faq-and-help";
export default function TopHeader(){
    return (
        // <!-- topbar area start -->
        <div className="topbar-area">
            <div className="container custom-container-1318">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="topbar-inner">
                            <div className="left-content">
                                <SocialIconList />
                                <FaqAndHelp />
                            </div>
                            <div className="right-content">
                                <div className="topbar-item">
                                    <div className="track-order">
                                        <a href="#" className="sign-in">
                                            <span className="login">Track Order</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="topbar-item">
                                    <div className="select-option">
                                        <div className="single-select">
                                            <select className="lang">
                                                <option value="volvo">eng</option>
                                                <option value="saab">bang</option>
                                            </select>
                                        </div>
                                        <div className="single-select">
                                            <select className="currency">
                                                <option value="volvo">usd</option>
                                                <option value="saab">euro</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="topbar-item">
                                    <div className="account-control d-none">
                                        <a href="register-form.html" className="sign-in"><i className="lar la-user icon"></i> <span
                                                className="login">log in</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* topbar area end */}
        </div>    
    );
}