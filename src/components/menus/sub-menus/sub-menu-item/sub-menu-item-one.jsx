import React from "react";

export default function SubMenuItemOne({title, link}){
    return (
        <li><a href={link}>{title}</a></li>
    );
}