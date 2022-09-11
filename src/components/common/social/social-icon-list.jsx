import React from "react";

export default function SocialIconList(){
    return (
        <div className="topbar-item">
            <div className="social-icon">
                <ul className="social-link-list">
                    <li className="link-item"><a href="#"><i className="fab fa-facebook-f icon"></i></a>
                    </li>
                    <li className="link-item"><a href="#"><i className="fab fa-twitter icon"></i></a></li>
                    <li className="link-item"><a href="#"><i className="fab fa-linkedin-in icon"></i></a>
                    </li>
                    <li className="link-item"><a href="#"><i className="fab fa-pinterest-p icon"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}