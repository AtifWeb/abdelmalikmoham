import React from 'react'

function ClientReview({mainheading,
    desc,
    newsname}) {
    return (
        <div className="col">  
        <h1>{mainheading}</h1>
        <p>{desc}</p>
        <div className="information-review-wrapper d-flex-align-center">
        <p>{newsname}</p>
        <p>July 30, 2021</p>
        </div>
        
        
        
        </div>
    )
}

export default ClientReview
