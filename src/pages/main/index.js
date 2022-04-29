import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import Data from "../../components/data/CourseInfo.json";
import  AOS  from "aos";

//      Css
import styles from "./main.module.css"
import 'aos/dist/aos.css';

//      Image
// import Mainbg from "../../image/main/main.png"
import bgRB from "../../image/main/bg-r-b.png"
import bgLT from "../../image/main/bg-l-t.png"
import Main2bg from "../../image/main/main2.gif"
import Youtube from "../../image/main/youtube.png"
import bgTT from "../../image/main/bg-t-t.png" 


//      React Icons 
import { FiPlay } from "react-icons/fi"
import { AiOutlineArrowRight, AiOutlineFundProjectionScreen, AiOutlineSafetyCertificate } from "react-icons/ai"
import { TiDocumentText, TiGroup } from "react-icons/ti"
import { GoRequestChanges } from "react-icons/go"
import { MdHomeWork, MdQuestionAnswer,} from "react-icons/md"
import { RiQuestionAnswerLine } from "react-icons/ri"


export default function Main() {

    AOS.init({ duration : 2000});

    const [modal, setModal] = useState(true)
    const modalToggle = () => {
        setModal(!modal);
    }

    return (
        <section>
            <div className="mt-10" style={{ backgroundImage: `url(${bgRB})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                <div className="max-w-screen-xl mx-auto px-6"> 
                    <div className="md:flex relative">
                        <div data-aos="fade-up" className="md:w-[400px] lg:w-[600px] leading-tight mt-10 z-10">
                            <h1 className="text-center md:text-left lg:text-[60px] sm:text-[40px] text-[28px] font-extrabold">BIZ BILAN ZAMONAVIY KASB USTASIGA AYLANING</h1>
                        </div>                    
                        <div data-aos="fade-up" className="md:w-[450px] w-full md:absolute md:top-0 md:right-[-30px] lg:right-[100px] md:mt-0 mt-4">
                            <img className="mx-auto md:mx-0 w-10/12 h-10/12 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]" src={Main2bg} />
                        </div>
                    </div>
                    <div className="lg:mt-10 mt-6 pb:10 md:pb-24 flex flex-wrap justify-center md:justify-start w-full md:w-[600px] z-30">
                        <div className="relative border-2 cursor-pointer rounded-full w-[160px] h-[160px] group hover:opacity-75" onClick={modalToggle}>
                            <img src={Youtube} className="w-full h-full rounded-full"/>
                            <div className="bg-[rgba(0,0,0,.35)] absolute top-0 left-0 w-full h-full rounded-full "></div>
                            <FiPlay size={60} className="text-gray-100 absolute top-12 left-14 group-hover:opacity-100 group-hover:text-indigo-700 transition-all" />
                        </div>
                        <div className="pl-5 ml-5 mb-10 sm:mb-6 sm:border-l-2 border-left z-10">
                            <h1 className="mb-4 font-bold text-xl w-[200px] lg:w-[260px] items-center mt-4 text-black md:text-blue-500">IT SOHASIDA MUVAFFAQIYATGA ERISHISH</h1>
                            <Link >
                                <button className="flex rounded px-6 py-1 shadow-sm hover:shadow-[#6600ff] border-2 border-[#6600ff]  text-lg text-[#6600ff] transition-all">
                                    Batafsil
                                    <AiOutlineArrowRight className="mt-1 ml-2 font-semibold" size={20} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={modal ? styles.modalContainer : styles.modalContainerActive}  onClick={modalToggle}>
                            <div className={styles.modalVideoBody}> 
                                <div className={styles.modalVideoInner}>
                                    <div className={styles.modalVideoMovieWrap}>
                                        <ReactPlayer className="" url="https://youtu.be/c3wW3nQ2eXU" />
                                    </div>  
                                </div>  
                                <div className={styles.remove} onClick={modalToggle}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 py-14 px-6">
                <div className="max-w-screen-xl mx-auto">
                    <h1 data-aos="fade-right" className="text-2xl font-bold text-white text-center">Mediana - IT bo'yicha mahoratga ega bo'lishni istaganlar uchun o'quv kurslarini taklif etadi.</h1>
                    <p className="text-xl text-white text-center mt-2 md:mt-4">Veb-ishlab chiqish, backend, frontend, UI/UX dizayn, SMM, 3DS MAX & AUTOCAD,  kurslari va WordPress maxsus kursi bilan IT sohasiga o'ting.</p>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${bgLT})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' }}>
                <div style={{ backgroundImage: `url(${bgRB})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right bottom' }}>
                    <div className="max-w-screen-xl mx-auto py-20 px-6" >
                        <h1 data-aos="fade-right" className="text-xl md:text-3xl font-bold mt-10">
                            Kursga qo'shiling va quyidagilarni oling: 
                            <p className="w-[47%] h-[3px] bg-indigo-600 mt-1"></p>
                        </h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 font-semibold text my-20">
                            <div className=" ">
                                <TiDocumentText size={30} className="text-yellow-600" />
                                <p className="">Nazariyani tushunarli usullarda</p>
                            </div>
                            <div>
                                <TiGroup  size={30} className="text-yellow-600"/>
                                <p>Dars davomida sinf bilan mashq qiling</p>
                            </div>
                            <div>
                                <GoRequestChanges size={30} className="text-yellow-600"/>
                                <p>Har bir darsdan keyin viktorina</p>
                            </div>
                            <div>
                                <MdHomeWork size={30} className="text-yellow-600"/>
                                <p>Uyga topshiriqlar</p>
                            </div>
                            <div>
                                <MdQuestionAnswer size={30} className="text-yellow-600"/>
                                <p>Uy vazifasini tekshirish va savollarga javob berish</p>
                            </div>
                            <div>
                                <AiOutlineFundProjectionScreen size={30} className="text-yellow-600"/>
                                <p>Darslar davomida loyihalarni yakunlash</p>
                            </div>
                            <div>
                                <AiOutlineSafetyCertificate size={30} className="text-yellow-600"/>
                                <p>Tugatish sertifikatini olish</p>
                            </div>
                            <div>
                                <RiQuestionAnswerLine size={30} className="text-yellow-600"/>
                                <p>Kursdan keyin bepul maslahatlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 md:py-10">
                <div className="max-w-screen-ls mx-auto px-6 py-10">
                    <h1 data-aos="fade-right" className="text-white text-center font-bold text-2xl">O'zingizga mos yo'nalish tanlang</h1>
                    <p className="text-whte text-xl text-center text-white mt-2 md:mt-4">IT sohasida eng rivojlangan va talabi yuqori bo'lgan kurslardan birini tanlang. Kurs davomida portfolio to'plash, rezyume hosil qilish va ish topishingizga esa biz yordam beramiz.</p>
                </div>
            </div>
            <div className="" style={{ backgroundImage: `url(${bgTT})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center' }}>
                <div style={{ backgroundImage: `url(${bgLT})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top' }}>
                    <div className="max-w-screen-xl mx-auto pt-10">
                        <h1 className="text-center font-bold text-3xl pt-8">O'quv kurslar</h1>
                        <p className="mt-2 w-[120px] h-[3px] bg-blue-800 mx-auto"></p>
                        <Card />    
                    </div>
                </div>
            </div>
            
           
        </section>
    )
}


//   Main Page Video  Modal Component
// function Modal () {
//     return (
//         <div className={setModal ? styles.modalContainer : styles.modalContainerActive}>
//             <div className={styles.modalVideoBody}> 
//                 <div className={styles.modalVideoInner}>
//                     <div className={styles.modalVideoMovieWrap}>
//                         <ReactPlayer className="" url="https://youtu.be/c3wW3nQ2eXU" />
//                     </div>  
//                 </div>  
//                 <div className={styles.remove}></div>
//             </div>
//         </div>
//     )
// }



//  Main Page Card Component
function Card () {
    AOS.init({ duration : 2000});
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  md:gap-6 py-8 md:py-16 ">   
               { Data.map(post => {
                   return (
                       <div data-aos="fade-up" className="cursor-pointer relative filter brightness-50 group hover:brightness-100 transition-all z-50 hover:scale-110 duration-500">  
                           <div className="w-full h-52 rounded-md cover brightness-50 z-60">
                                <img src={post.image} style={{objectFit: 'cover'}} className="w-full h-full cover rounded-xl"/>
                            </div>
                            <div className="absolute top-0 left-0 w-[20%] rounded-2xl rounded-b-2xl rounded-l-none  bg-black">
                                <img src={post.userImage} className="w-full h-full" />
                            </div>
                            <h2 className="tracking-widest font-semibold absolute top-14 left-[38%] text-white text-xl md:text-2xl">{post.title}</h2>
                            <p className="z-20 transform group-hover:-translate-y-10 duration-700 tracking-wider w-[60%] absolute bottom-[10px] left-[20%]  text-white text-center font-bold transition">{post.content_1}</p>
                        </div>  
                    )
               }) }
        </div>
    )
}
