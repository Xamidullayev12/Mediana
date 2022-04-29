import React from "react";

import styles from "./input.module.css";





function ContactInput() {
    return (
        <div>
            <form>
                <div className="groupUser">
                    <label>Username</label>
                    <input type="text" />
                </div>
                <div className="groupPhone">
                    <label>Phone</label>
                    <input type="tel" />
                </div>
            </form>
        </div>
    )

}

export default ContactInput;