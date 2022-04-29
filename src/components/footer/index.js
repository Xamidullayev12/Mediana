import React from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import  AOS  from "aos";


//      Css 
import styles from "./footer.module.css"
import 'aos/dist/aos.css';


//      Image
import Telephone from "../../image/footer/icon1.png"
import Pen from "../../image/footer/icon3.png"
import Map from "../../image/footer/icon2.png"
import Logo from "../../image/logo.jpg"



//      React Icons 
import { FaInstagram, FaTiktok, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { FiFacebook } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"



export default function Footer() {

    const location = useLocation(); 
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    
    // function handleClick(lang) {
    //     i18n.changeLanguage(lang);
    // }


    const { t, i18n } = useTranslation();

    AOS.init({ duration : 2000});


    return (
        <footer>
            <div className="bg-blue-700 pt-4 pb-4">
                <div className="flex flex-wrap justify-around mx-auto max-w-screen-xl">
                    <div className="my-2 z-50">
                        <a href="tel:+998776665544">
                            <div className="rounded-[50%] border-4 border-white p-1 w-28 h-28 mx-auto hover:opacity-50 transition-all">
                                <div className="rounded-[50%] bg-white w-full h-full relative">
                                    <img className="w-[40%] h-auto absolute top-5 left-7" src={Telephone} />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-white mt-3 text-center">Call Us</h1>
                            <p className="w-[200px] text-center text-white">+998 77 666 55 44</p>
                        </a>
                    </div>

                    <div className="my-2 z-50">
                        <a href="mailto:sjdngj">
                            <div className="rounded-[50%] border-4 border-white p-1 w-28 h-28 mx-auto hover:opacity-50 transition-all">
                                <div className="rounded-[50%] bg-white w-full h-full relative">
                                    <img className="w-[40%] h-auto absolute top-5 left-7" src={Pen} />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-white mt-3 text-center">Write Us</h1>
                            <p className="w-[200px] text-center text-white">info@mediana.com</p>
                        </a>
                    </div>
                    <div className="my-2 z-50">
                        <a href="map_section">
                            <div className="rounded-[50%] border-4 border-white p-1 w-28 h-28 mx-auto hover:opacity-50 transition-all">
                                <div className="rounded-[50%] bg-white w-full h-full relative">
                                    <img className="w-[40%] h-auto absolute top-5 left-7" src={Map} />
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-white mt-3 text-center">Visit Us</h1>
                            <p className="w-[200px] text-center text-white">Uzbekistan, Tashkent city, Mirzo Ulug'bek district,  </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className="bg-gray-200 relative">
                    <div className="flex justify-center ">
                        <div className="mr-4 flex flex-wrap mt-8">
                            <a href="#">
                                <div data-aos="fade-up">
                                    <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#C13584] hover:scale-75 group-hover:border-red-200 transition-all">
                                        <FaInstagram className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#E1306C]" size={24} />
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div  data-aos="fade-up"  data-aos-duration="1500">
                                    <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#179CDE] hover:scale-75 group-hover:border-red-200 transition-all">
                                        <FaTelegramPlane className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#0088CC]" size={24} />
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div  data-aos="fade-up"  data-aos-duration="1000">
                                    <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#2BB741] hover:scale-75 group-hover:border-red-200 transition-all">
                                        <FaWhatsapp className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#25D366]" size={24} />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bg-white h-28 w-28 rounded-[50%] z-10">
                            <img className="w-full h-full" src="" />
                        </div>
                        <div className="mr-4 flex flex-wrap mt-8">
                        <a href="#">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#25F4EE] hover:scale-75 group-hover:border-red-200 transition-all">
                                    <FaTiktok className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#000000]" size={24} />
                                </div>
                            </div>
                            </a>
                            <a href="#">
                                <div data-aos="fade-up" data-aos-duration="1500">
                                    <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#1877F2] hover:scale-75 group-hover:border-red-200 transition-all">
                                        <FiFacebook className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#1877F2]" size={24} />
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div data-aos="fade-up">
                                    <div className="w-12 h-12 bg-white rounded-full relative mx-4 my-2  group shadow-md hover:shadow-[#282828] hover:scale-75 group-hover:border-red-200 transition-all">
                                        <AiOutlineYoutube className="absolute top-3 right-3 text-indigo-700 group-hover:text-[#FF0000]" size={24} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <ul className="max-w-screen-xl mx-auto  flex flex-wrap justify-center py-4">
                        <li className={splitLocation[1] === "" ? "text-indigo-600" : ""}>
                            <NavLink to="/" exact>
                                <div className="text-lg font-bold mx-4 my-2">
                                    <span>Main</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "faq" ? "text-indigo-600" : ""}>
                            <NavLink to="/faq" exact>
                                <div className="text-lg font-bold mx-4 my-2">
                                    <span>{ t ('FAQ')}</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "about" ? "text-indigo-600" : ""}>
                            <NavLink to="/about" exact>
                                <div className="text-lg font-bold mx-4 my-2">
                                    <span>About</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className={splitLocation[1] === "contact" ? "text-indigo-600" : ""}>
                            <NavLink to="/contact" exact>
                                <div className="text-lg font-bold mx-4 my-2">
                                    <span>{ t ('navbar.contact')}</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="w-full h-[2px] bg-gray-400"></div>
                    <div className="">
                        Copyright
                    </div>
                </div>
            </div>
        </footer>
    )
}