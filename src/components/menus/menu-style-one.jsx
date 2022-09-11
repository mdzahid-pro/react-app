import React from "react";
import MenuStyleOneItem from "./menu-style-one-item";
import SubMenuStyleOne from "./sub-menus/sub-menu-style-one";
import SubMenuItemOne from "./sub-menus/sub-menu-item/sub-menu-item-one";

export default function MenuStyleOne(){
    return (
        <ul className="navbar-nav">
            <MenuStyleOneItem links={"javascript:void(0)"} title={"javascript"}>
                <ul class="sub-menu mega-menu-inner">
                    <SubMenuStyleOne title="Fruits and vagitables">
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                    </SubMenuStyleOne>
                    <SubMenuStyleOne title="Fasion">
                        <SubMenuItemOne title={"blog grid sgsfdg"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid tragsfdgsvel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid fadsfa"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid travel"} link={"javascript:void(0)"} />
                        <SubMenuItemOne title={"blog grid fadsfaf"} link={"javascript:void(0)"} />
                    </SubMenuStyleOne>
                    <SubMenuStyleOne title="Electronics">
                        <img src="assets/img/nav/side-nav/02.jpg" alt="image" />
                        <div class="content">
                            <span class="offer">upto <span class="col">70%</span> off</span>
                            <div class="btn-wrapper">
                                <a href="#" class="btn-default">shop now</a>
                            </divgi>
                        </div>
                    </SubMenuStyleOne>
                </ul>
            </MenuStyleOneItem>
        </ul>
    );
}