import React from 'react'
import video from '../../Assets/img/Video.png'
import rachel from '../../Assets/img/rachel-park-hrlvr2ZlUNk-unsplash.png'
import MaskGroup6 from '../../Assets/img/Mask Group 6.png'
import MaskGroup7 from '../../Assets/img/Mask Group 7.png'
import joseph from '../../Assets/img/joseph-gonzalez-zcUgjyqEwe8-unsplash.png'
import cala from '../../Assets/img/cala-w6ftFbPCs9I-unsplash.png'
function AboutUs() {
    return (
        <div className="AboutUs w-85 padding-section">
            <div className="col">
                <h1>About us</h1>
                <p>We started Jonh & Kate’s after several years in corporate tech. We felt like something was missing in our life and the corporate world was just not for us anymore so we felt like there was time for a change. </p>
                <p>It’s always been a dream of ours to start a family-owned mom &pop shop where we serve our community. My love for coffee and John’s passion for cooking/baking made this career transition a no-brainer. </p>
                <p>So please, come and try John’s famous carrot cake with a cup of my favourite coffee blends form the highlands of Ethiopia; the best thing to happen since sliced bread. :)”</p>
            </div>
            <div className="col">
                <img src={video} alt="" />
            </div>
            <div className="col">
                <img src={rachel} alt="" />
            </div>
            <div className="col">
                <img src={MaskGroup6} alt="" />
            </div>
            <div className="col">
                <img src={cala} alt="" />
            </div>
            <div className="col">
                <img src={MaskGroup7} alt="" />
            </div>
            <div className="col">
                <img src={joseph} alt="" />
            </div>
        </div>
    )
}

export default AboutUs
