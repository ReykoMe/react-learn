import React from "react";


const Footer = () => {
    const copyright = "Produced by ReykoMe on React + Redux";
    return (
        <div className="row">
            <div className="col text-center bg-primary rounded p-2 mt-3 mb-2 text-light">
                <p className="mb-0">{copyright}</p>
            </div>
        </div>
    )
}
export default Footer;