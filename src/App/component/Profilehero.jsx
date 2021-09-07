import React from 'react'
import ArrowLeft from '../../Assets/img/Path 31.png'
import ArrowRight from '../../Assets/img/Path 32.png'
function Profilehero() {
    return (
        <div className="Profilehero">
            <div className="glass-wrapper">
                <img src={ArrowLeft} alt="" className="left-arrow"/>
                <img src={ArrowRight} alt="" className="right-arrow" />
                <div className="presentation">
                    <h3>Happy Hours</h3>

                    <p>3:00pm - 4:00pm</p>
                    <strong>20% OFF</strong>

                </div>
            </div>
        </div>
    )
}

export default Profilehero
