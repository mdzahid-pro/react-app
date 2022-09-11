import React from "react";

export default function SubMenuStyleOne({children,title,}){
    return (
        // <ul className="sub-menu mega-menu-inner">
            <li className="mega-menu-single-section">
                <ul className="mega-menu-main">
                    <li>
                        <h5 className="menu-title">{ title }</h5>
                    </li>
                    {children}
                </ul>
            </li>
    );
}