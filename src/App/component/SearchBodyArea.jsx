import React from 'react'
import Filter from './Filter'
import GoogleMapArea from './GoogleMapArea'
import SeachPageCards from './SeachPageCards'

function SearchBodyArea() {
    return (
        <div className="SearchBodyArea w-85 padding-section">
            {/* filter area */}
            <Filter/>

            {/* cards area   */}
            <div className="cards-area">
                <h3>Here is what we found</h3>
                <div className="cards-wrapper grid-col-2">
                    <SeachPageCards/>
                    <SeachPageCards/>
                    <SeachPageCards/>
                    <SeachPageCards/>
                </div>
            </div>



            {/* map area */}
          <GoogleMapArea/>
        </div>
    )
}

export default SearchBodyArea
