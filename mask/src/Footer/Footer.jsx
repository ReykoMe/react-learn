import React from "react";
import './Footer.module.css';
const Footer = () => {
    const copywrite = "Produced by ReykoMe on React + Redux";
    return (
        <div className="col text-center bg-primary rounded p-2 mt-3 mb-2 text-light">
            {copywrite}
        </div>
    )
}
export default Footer;