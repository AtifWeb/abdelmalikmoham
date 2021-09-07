import React from 'react'
import HeroImage from '../../Assets/img/heeroimage.png'
import glassbg from '../../Assets/img/Rectangle 6.png'
function HomeHero() {
    return (
        <div className="HomeHero">
            <img src={HeroImage} alt="" />
            <div className="glass-bg" />
            <div className="presentation w-85">
                <p>Welcome to Manza</p>
                <h1>The greatest business repository in America</h1>
                <p>Join the rest of the 2 million businesses on Manza by putting the power into your own hands and letting the world know your business exists. </p>
                <button>Join now</button>
            </div>
        </div>
    )
}

export default HomeHero
