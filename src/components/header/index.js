import React, { useState } from "react"
import { NavLink } from "react-router-dom";

import styles from "./header.module.css"

//      React Hooks
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


//      Image 
import Logo from "../../image/logo.jpg"

//      Icons
import { MdOutlineLanguage } from "react-icons/md"




export default function Header() {

     
    const location = useLocation();
    
    const { pathname } = location;
    
    const splitLocation = pathname.split("/");
    
    
    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }
    const { t, i18n } = useTranslation();

    const [burger, setBurger] = useState(false)
    const toggleBurger = () => {
        setBurger(!burger)
    } 

    return (
        <section className="">
            <div>
                <div className="max-w-screen-xl mx-auto flex justify-between py-[30px] px-6">
                    <div>
                        <NavLink to="/" exact>
                            <div className="flex w-[140px]">
                                <div className="h-[70px] w-[96px]">
                                    <img className="h-full w-full" src={Logo} />
                                    <h1 className="text-blue-600 font-bold text-[22px] relative bottom-1">Mediana</h1>
                                </div>
                            </div>
                        </NavLink>
                    </div>   
                    <div className="flex">
                        <ul className={ burger ? "lg:bg-white bg-gray-300 rounded-b-[10px] rounded-l-[10px] py-4 lg:ml-auto lg:flex font-semibold lg:text-[20px] lg:pt-10 absolute lg:right-[0] right-[52px] lg:top-[0px] top-[100px] transition-all z-50 lg:mt-6 lg:mr-20" : "lg:bg-white bg-gray-300 rounded-b-[10px] rounded-l-[10px] py-4 lg:ml-auto lg:flex font-semibold lg:text-[20px] lg:pt-10 absolute lg:right-[0] right-[52px] lg:top-[0] top-[-300px] transition-all mt-6 lg:mr-20" }>
                            <li className={splitLocation[1] === "" ? "text-indigo-600 " : ""}>
                                <NavLink to="/" exact>
                                    <div className={styles.navItems}>
                                        <span>Main</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "course" ? "text-indigo-600 font-extrabold" : ""}>
                                <NavLink to="/course" exact>
                                    <div className={styles.navItems}>
                                        <span>{ t ('Course')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "faq" ? "text-indigo-600" : ""}>
                                <NavLink to="/faq" exact>
                                    <div className={styles.navItems}>
                                        <span>{ t ('FAQ')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "about" ? "text-indigo-600" : ""}>
                                <NavLink to="/about" exact>
                                    <div className={styles.navItems}>
                                        <span>About</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={splitLocation[1] === "contact" ? "text-indigo-600" : ""}>
                                <NavLink to="/contact" exact>
                                    <div className={styles.navItems}>
                                        <span>{ t ('Contact')}</span>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <div className="flex px-4">
                                    <MdOutlineLanguage size={26} className="text-gray-500 mr-1 hover:text-blue-600 cursor-pointer"/>
                                    <button className="hover:text-blue-700 font-bold lg:text-[18px] text-[#807e7e]" onClick={() => handleClick('uz')}>Uz</button>
                                    <button className="hover:text-blue-700 font-bold lg:text-[18px] text-[#807e7e] px-1 mx-1 border-indigo-800 border-x " onClick={() => handleClick('en')}>En</button>
                                    <button className="hover:text-blue-700 font-bold lg:text-[18px] text-[#807e7e]" onClick={() => handleClick('ru')}>Ru</button>
                                </div>    
                            </li>
                        </ul>
                        <div className="lg:hidden cursor-pointer">
                            <div className={styles.burger} onClick={toggleBurger}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}  