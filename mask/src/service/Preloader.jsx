import React from 'react'
import imgPreloader from '../media/pulse_preloader.gif'

export default function Preloader (props) {
    return (
        <div className="col-12 text-center mt-5">
            <img src={imgPreloader} alt={imgPreloader} className="w-25" />
        </div>
    )
}
