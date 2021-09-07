import React from 'react'
import WhyManzaSteps from './WhyManzaSteps'
import NetWorkIcon from '../../Assets/img/Network icon.png'
import Exposuer from '../../Assets/img/Exposuer icon.png'
import Rocket from '../../Assets/img/Group 293.png'
import Bulb from '../../Assets/img/Bulb icon.png'
function WhyManza() {
    return (
        <div className="WhyManza padding-section">
                <div className="WhyManza-content w-85 grid-col-2">
                        <div className="left-area">
                            <p>The best business solutions for you</p>
                            <h1>Why Manza?</h1>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
<span>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos ets</span></p>
<a href="#" className="d-flex-align-center">Learn more  <svg xmlns="http://www.w3.org/2000/svg" width="9.89" height="17.297" viewBox="0 0 9.89 17.297">
  <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M18.155,14.842,11.61,8.3a1.231,1.231,0,0,1,0-1.746,1.246,1.246,0,0,1,1.751,0l7.416,7.411a1.234,1.234,0,0,1,.036,1.7l-7.447,7.462a1.236,1.236,0,0,1-1.751-1.746Z" transform="translate(-11.246 -6.196)" fill="#7ac15a"/>
</svg>
</a>
                        </div>



                        <div className="right-area">
                            <WhyManzaSteps img={Bulb} mainheading="Innovation"/>
                            <WhyManzaSteps img={NetWorkIcon} mainheading="Network"/>
                            <WhyManzaSteps img={Exposuer} mainheading="Exposure"/>
                            <WhyManzaSteps img={Rocket} mainheading="Growth"/>
                           
                        </div>
                </div>
        </div>
    )
}

export default WhyManza
