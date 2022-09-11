import React from "react";

export default function MenuStyleOneItem({children ,title, link}){
    console.log(children)

    return (
        <li className="menu-item-has-children  mega-menu-wrap">
            <a href={link}><i className="flaticon-fruits icon"></i> {title}</a>
            {children}
        </li>
    );
}