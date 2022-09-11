import React,{useState} from "react";
import ProductStyleOne from "../components/style-one-product";
import ProductImg from '../../../assets/img/product/shop/01.png'

export default function FilterStyleOneProduct(){
    const [activeClass, setActiveClass] = useState("*");

    const handleClick = (e) => {
        const current_class = e.target.getAttribute('data-filter');
        setActiveClass(current_class);
    }
    
    return (
        <div className="col-md-8 col-lg-9">
            <div className="row">
                <div className="col-lg-12">
                    <div className="btn-list-wrapper">
                        <ul className="btn-list btn-wrapper">
                            <li onClick={ handleClick } data-filter="*" className={activeClass == "*" ? "active" : ""}>all</li>
                            <li onClick={ handleClick } data-filter=".new" className={activeClass == ".new" ? "active" : ""}>new arrival</li>
                            <li onClick={ handleClick } data-filter=".feat" className={activeClass == ".feat" ? "active" : ""}>featured</li>
                            <li onClick={ handleClick } data-filter=".toprat" className={activeClass == ".toprat" ? "active" : ""}>top rated</li>
                            <li onClick={ handleClick } data-filter=".bseller" className={activeClass == ".bseller" ? "active" : ""}>best seller</li>
                            <li onClick={ handleClick } data-filter=".off" className={activeClass == ".off" ? "active" : ""}>sale off</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="custom-row">
                <div className={activeClass == '*' || activeClass == "off" || activeClass == "feat" 
                ? "custom-col off feat" :
                    "custom-col off feat d-none"}
                    >
                    <ProductStyleOne img={ProductImg} imgAlt={"test Product Image"} sellPrice={180} ratting={5} rattingCount={150} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".bseller" || activeClass == ".new" ?
                    "custom-col bseller new" : "d-none custom-col bseller new"}>
                    <ProductStyleOne img={ProductImg} imgAlt={"test Product Image"}
                     sellPrice={480} ratting={3} rattingCount={30} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".off" || activeClass == ".feat" ?
                    "custom-col off feat" : "d-none custom-col off feat"}>
                    <ProductStyleOne img={ProductImg} imgAlt={"test Product Image"}
                     sellPrice={650} ratting={4} rattingCount={60} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".toprat" || activeClass == ".feat" ?
                    "custom-col off feat" : "d-none custom-col toprat feat"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={450} ratting={5} 
                    rattingCount={150} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".bseller" || activeClass == ".off" ?
                    "custom-col off bseller" : "d-none custom-col bseller off"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={350} ratting={5} 
                    rattingCount={150} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".new" || activeClass == ".feat" ?
                    "custom-col feat new" : "d-none custom-col new feat"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={180} ratting={5} 
                    rattingCount={150} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".new" || activeClass == ".feat" ?
                    "custom-col feat new" : "d-none custom-col new feat"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={180} ratting={5} 
                    rattingCount={150} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".new" || activeClass == ".feat" ?
                    "custom-col feat new" : "d-none custom-col new feat"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={180} ratting={1} 
                    rattingCount={10} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".bseller" || activeClass == ".off" ?
                    "custom-col off bseller" : "d-none custom-col bseller off"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={180} ratting={4.5} 
                    rattingCount={148} slug={"/sfdadf"}/>
                </div>
                <div className={activeClass == '*' || activeClass == ".toprat" || activeClass == ".new" ?
                    "custom-col new toprat" : "d-none custom-col toprat new"}>
                    <ProductStyleOne 
                    img={ProductImg}
                    imgAlt={"test Product Image"} 
                    sellPrice={180} ratting={4} 
                    rattingCount={150} slug={"/sfdadf"}/>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="btn-wrapper text-center margin-top-60 see-all">
                        <a href="#" className="btn-default rounded-btn semi-bold">see all</a>
                    </div>
                </div>
            </div>
        </div>
    );
}