import React from "react";
import HeaderLogo from "../../common/logo/header-logo";
import HeaderLocation from "../location/header-location";
import HeaderMiniCart from "../mini-cart/header-mini-cart";
import './navbar.css'

export default function HeaderNavbar(){
    return (
        // <!-- navbar area start -->
        <div className="nav-area-wrapper">
            <div className="container custom-container-1720">
                <div className="row nav-reverse">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-area navbar-expand-lg has-topbar nav-style-01 index-01 only-menu extra">
                            <div className="container nav-container custom-container-1720 padding-x-0">
                                <div className="responsive-mobile-menu">
                                    <div className="logo-wrapper">
                                        <div className="logo">
                                            <HeaderLogo />
                                        </div>
                                        <HeaderLocation />
                                    </div>
                                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                        data-target="#bizcoxx_main_menu" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                                <div className="navbar-collapse collapse" id="bizcoxx_main_menu">
                                    <ul className="navbar-nav">
                                        <li className="menu-item-has-children current-menu-item mega-menu mega-menu-wrap">
                                            <a href="#">Home</a>
                                            <ul className="sub-menu mega-menu-inner">
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main single-menu">
                                                        <li><a href="index-01.html">Home 01</a></li>
                                                        <li><a href="index-02.html">Home 02</a></li>
                                                        <li><a href="index-03.html">Home 03</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children mega-menu-wrap">
                                            <a href="#">products</a>
                                            <ul className="sub-menu mega-menu-inner">
                                                <li className="mega-menu-single-section">
``````                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">fashion</h5>
                                                        </li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                        <li><a href="#">blog grid nature</a></li>
                                                        <li><a href="#">blog list food</a></li>
                                                        <li><a href="#">blog List nature</a></li>
                                                        <li><a href="#">blog grid travel</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children mega-menu-wrap">
                                            <a href="#">page</a>
                                            <ul className="sub-menu mega-menu-inner">
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">shop</h5>
                                                        </li>
                                                        <li><a href="shop-no-sidebar.html">shop no sidebar</a></li>
                                                        <li><a href="shop-full-width.html">shop full width</a></li>
                                                        <li><a href="shop-left-sidebar.html">shop left sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">shop right sidebar</a></li>
                                                        <li><a href="shop-list.html">shop list</a></li>
                                                        <li><a href="shop-details.html">shop details</a></li>
                                                        <li><a href="shop-campaings.html">shop campaigns</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">order</h5>
                                                        </li>
                                                        <li><a href="order-completed.html">order completed</a></li>
                                                        <li><a href="order-details.html">order details</a></li>
                                                        <li><a href="order-history.html">order history</a></li>
                                                        <li><a href="order-track.html">order track</a></li>
                                                        <li><a href="order-tracking.html">order tracking</a></li>
                                                        <li><a href="your-order.html">your order</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                        <li><a href="wishlist-with-product.html">wishlist with product</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-single-section menu-add-banner">
                                                    <img src="assets/img/nav/side-nav/02.jpg" alt="image" />
                                                    <div className="content">
                                                        <span className="offer">upto <span className="col">70%</span> off</span>
                                                        <div className="btn-wrapper">
                                                            <a href="#" className="btn-default">shop now</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children mega-menu-wrap">
                                            <a href="#">campaings</a>
                                            <ul className="sub-menu mega-menu-inner">
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">page title</h5>
                                                        </li>
                                                        <li><a href="blank-wishlist.html">blank wishlist</a></li>
                                                        <li><a href="cart.html">cart</a></li>
                                                        <li><a href="blank-cart.html">blank cart</a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                        <li><a href="your-order.html">your order</a></li>
                                                        <li><a href="payment-history.html">payment history</a></li>
                                                        <li><a href="edit-profile.html">edit profile</a></li>
                                                        <li><a href="user-profile.html">user profile</a></li>
                                                    </ul>
                                                </li>
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main">
                                                        <li>
                                                            <h5 className="menu-title">page title</h5>
                                                        </li>
                                                        <li><a href="faq.html">faq</a></li>
                                                        <li><a href="your-details.html">your details</a></li>
                                                        <li><a href="sign-in.html">sign in</a></li>
                                                        <li><a href="sign-up.html">sign up</a></li>
                                                        <li><a href="logout.html">logout</a></li>
                                                        <li><a href="error.html">error</a></li>
                                                        <li><a href="about.html">about</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children mega-menu-wrap">
                                            <a href="#">blog</a>
                                            <ul className="sub-menu mega-menu-inner">
                                                <li className="mega-menu-single-section">
                                                    <ul className="mega-menu-main single-menu">
                                                        <li><a href="blog-grid.html">blog grid</a></li>
                                                        <li><a href="blog-list.html">blog list</a></li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact us</a></li>
                                    </ul>
                                </div>

                                <HeaderMiniCart />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        {/* <!-- navbar area end --> */}
        </div>
    );
}