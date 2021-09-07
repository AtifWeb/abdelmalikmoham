import React from 'react'

function GoogleMapArea() {
    return (
        <div className="map-area">
        <h3>Search on a map</h3>

        <div className="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406261.5010028373!2d-122.09760988411225!3d37.297077761542155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1630445449468!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>

    </div>
    )
}

export default GoogleMapArea
