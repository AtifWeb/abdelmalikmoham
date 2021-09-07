import React from 'react'
import Header from '../component/Header'
import HomeHero from '../component/HomeHero'
import '../../Assets/css/home.css'
import BusinessExplore from '../component/BusinessExplore'
import WhyManza from '../component/WhyManza'
import WithManza from '../component/WithManza'
import NewUser from '../component/NewUser'
import Footer from '../component/Footer'
function Home() {
    return (
        <div className="Home">
            {/* header */}
            <Header />

            {/* hero */}
            <HomeHero />

            {/* BusinessExplore */}

            <BusinessExplore/>


            {/* WhyManza */}
            <WhyManza/>

            {/* WithManza */}

            <WithManza/>


            {/* NewUser */}
            <NewUser/>


            {/* Footer */}
            <Footer/>


        </div>
    )
}

export default Home
