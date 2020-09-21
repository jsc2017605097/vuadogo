import React from 'react'
import {SiGooglemaps} from 'react-icons/si'

export default function GoogleMap() {
    return (
        <div className="container" id='googlemap'>
            <div style={{background: "#3f51b5",padding: "10px 10px", color: "#FFFFFF",textAlign:"center" }}>
                <SiGooglemaps />&nbsp; Google map
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <iframe title="Googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.566705201264!2d105.714713215399!3d20.68719990472548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31343535daf8eea3%3A0x34512cfedc1fbd4a!2zVlVBIMSQ4buSIEfhu5Y!5e0!3m2!1svi!2s!4v1600655562855!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
            </div>
        </div>
    )
}
