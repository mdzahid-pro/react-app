import React from "react";

export default function FaqAndHelp(){
    return (
        <div className="topbar-item">
            <div className="info">
                <ul className="list">
                    <li className="item">
                        <a href="#">
                            <i className="las la-info-circle icon"></i>
                            Help
                        </a>
                    </li>
                    <li className="item">
                        <a href="#">FAQ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}