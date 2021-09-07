import React from 'react'
import BusinessExploreCol from './BusinessExploreCol'

function BusinessExplore() {
    return (
        <div className="BusinessExplore w-85 padding-section">
            <p>Explore your </p>
            <h1>business solution</h1>
            <div className="business-solutions-column-area grid-col-2">
            <BusinessExploreCol mainheading="Great interface and visual content" desc="“Manza is like a LinkedIn but specifically for businesses. We all know how well it went for them! It’s all about making a great first impression and Manza helps businesses accomplish that through a great interface and visual content.”" newsname="- The New York Times"/>
         
            <BusinessExploreCol mainheading="Wonderful user experience" desc="““A brilliant platform that makes it extremely easy to find businesses that you’re looking for. Wonderful user experience which makes it easier to find trustworthy and quality businesses.””" newsname="- The Washington Post"/>
         
            <BusinessExploreCol mainheading="Perfect platform to help businesses" desc="The impact that the pandemic had on our economy and our small business community was awful.  Manza is the perfect platform to help these business owners get back on their feet. Manza surely lives up to their slogan “Set Your Business in Motion”.” " newsname="- California Governor"/>
         
            <BusinessExploreCol mainheading="Wonderful user experience" desc="““A brilliant platform that makes it extremely easy to find businesses that you’re looking for. Wonderful user experience which makes it easier to find trustworthy and quality businesses.””" newsname="- The Washington Post"/>
                  
            </div>
        </div>
    )
}

export default BusinessExplore
