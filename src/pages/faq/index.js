import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoIosArrowDown } from "react-icons/io"

//      Image 
import main_bg from "../../image/FAQ/bg-faq.gif"






export default function Faq() {
    return (
        <section>
            <div>
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="sm:flex justify-between relative">
                        <h1 data-aos="fade-right"
                            className="z-10 lg:text-[60px] sm:text-[40px] text-[28px] font-extrabold max-w-xs sm:mt-32 lg:mt-10 mt-8 sm:my-20">
                            TEZ-TEZ SO'RALADIGAN SAVOLLAR
                        </h1>
                        <div data-aos="fade-left" className="max-w-md sm:absolute sm:top-[-40] sm:right-0">
                            <img className="w-full h-full" src={main_bg} />
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto bg-gray-200 p-2 py-8 sm:p-10 md:p-[44px] sm:mt-20 rounded-xl mb-10">
                    <div className="sm:px-4">
                        <h1  data-aos="fade-up"
                            className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl tetx-indigo-500 text-center mb-4 sm:mb-10 tracking-wider leading-8 sm:leading-10">
                            O'ZINGIZNI QIZIQTIRGAN SAVOLLARGA JAVOBLAR KONTENTI
                        </h1>
                    </div>
                    <div className="max-w-screen-md mx-auto">
                        <div  data-aos="fade-left" className="my-1">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<IoIosArrowDown />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                    <Typography fontSize={'20px'} className="text-indigo-800">Accordion 1</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography className="text-indigo-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div  data-aos="fade-left" className="my-1">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<IoIosArrowDown />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography fontSize={'20px'} className="text-indigo-800">Accordion 1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="text-indigo-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div  data-aos="fade-left" className="my-1">
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<IoIosArrowDown />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography fontSize={'20px'} className="text-indigo-800">Accordion 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography className="text-indigo-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


