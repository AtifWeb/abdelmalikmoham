import React from 'react'
import BrowserBusiness from '../component/BrowserBusiness'
import Header from '../component/Header'
import '../../Assets/css/search.css'
import SearchBodyArea from '../component/SearchBodyArea'
function Search() {
    return (
        <div className="Search"> 
            {/* header */}
            <Header/>

            {/* BrowserBusiness */}
            <BrowserBusiness/>


            {/* Search Body Area */}

            <SearchBodyArea/>
        </div>
    )
}

export default Search
