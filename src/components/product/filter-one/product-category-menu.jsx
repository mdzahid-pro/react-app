import React from "react";
import MenuStyleOne from "../../menus/menu-style-one";

export default function ProductCategoryMenu(){
    return (
        <div className="col-md-4 col-lg-3">
            <div className="side-menu-wrapper position-relative index-03">
                <nav className="navbar navbar-area nav-style-03 side-menu">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu index-03">
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#bizcoxx_main_menu_two" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <i className="fas fa-bars icon"></i>
                                <span className="text">all categories</span>
                                <i className="fas fa-caret-down icon"></i>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse index-03-catg show" id="bizcoxx_main_menu_two">
                            <MenuStyleOne />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}