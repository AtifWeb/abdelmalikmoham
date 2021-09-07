import React from 'react'

function WhyManzaSteps({mainheading,img}) {
    return (
        <div className="WhyManzaStep">
            <div className="image-wrapper d-flex-align-center">
            <img src={img} alt="" />
            </div>
            <div className="presentation">
                <h2>{mainheading}</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            </div>
        </div>
    )
}

export default WhyManzaSteps
