import React from "react"
import Map1 from "../../components/yandex.map"
import ContactInput from "../../components/contact.input" 







export default function Contact() {
    return (
        <section>
            <div className="">
                <div className="my-10 md:my-16">
                    <h1 className="text-4xl font-bold text-center">CONTACT</h1>
                    <p className="w-[120px] h-[3px] bg-blue-800 mx-auto"></p>
                </div>
                <div className="max-w-screen-xl mx-auto flex ">
                    <div className="md:p-8">
                        <div id="contact-section">
                            <ContactInput />
                        </div>
                    </div>
                    <div id="map_section">
                        <Map1 />
                    </div>
                </div>
            </div>
        </section>
    )
}