import React from 'react'
import Header from '../component/Header'

import Footer from '../component/Footer'
import '../../Assets/css/profile.css'
import Profilehero from '../component/Profilehero'
import ClientReviews from '../component/ClientReviews'
import AboutUs from '../component/AboutUs'
import ProfileInformation from '../component/ProfileInformation'

function Profile() {
    return (
        <div className="Profile">

            {/* header */}
            <Header active="profile"/>


            {/* hero */}
            <Profilehero/>

            {/* ProfileInformation */}
            <ProfileInformation/>

            {/* AboutUs */}
            <AboutUs/>


            {/* clients reviews */}
            <ClientReviews/>

            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Profile
