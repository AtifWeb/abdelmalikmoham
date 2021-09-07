import React from 'react'

function Filter() {
    return (
        <form className="filter-area">
                    <div className="search-box d-flex-align-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.969" height="19.969" viewBox="0 0 19.969 19.969">
  <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(1 1)" opacity="0.406">
    <path id="Path_1" data-name="Path 1" d="M20.1,12.3a7.8,7.8,0,1,1-7.8-7.8,7.8,7.8,0,0,1,7.8,7.8Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_2" data-name="Path 2" d="M29.218,29.218l-4.243-4.243" transform="translate(-11.662 -11.662)" fill="none" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

                            <input type="text" name="" id="" placeholder="Search by keyword" />
                    </div>

                    <div className="category-area">
                        <h2>Business category</h2>
                        <div className="checkboxes-wrapper">
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="all" />
                                <label htmlFor="all">Select all</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Food" />
                                <label htmlFor="Food">Food</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Travel" />
                                <label htmlFor="Travel">Travel</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Art" />
                                <label htmlFor="Art">Art</label>
                            </div> 
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Finance" />
                                <label htmlFor="Finance">Finance</label>
                            </div>
                        </div>
                    </div>
                    <div className="category-area"style={{marginTop:0,paddingTop:20}}>
                        <h2>Badges</h2>
                        <div className="checkboxes-wrapper">
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="all2" />
                                <label htmlFor="all2">Select all</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Local" />
                                <label htmlFor="Local">Local business</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Fair" />
                                <label htmlFor="Fair">Fair trade</label>
                            </div>
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="business" />
                                <label htmlFor="business">Small business</label>
                            </div> 
                            <div className="checkbox d-flex-align-center">
                                <input type="checkbox" name="" id="Family" />
                                <label htmlFor="Family">Family owned</label>
                            </div>
                        </div>

                        
                    </div>
                    <button className="join-now-button" style={{marginTop:20,width:"100%",height:50,fontSize:18}}>Apply filters</button>
            </form>

    )
}

export default Filter
