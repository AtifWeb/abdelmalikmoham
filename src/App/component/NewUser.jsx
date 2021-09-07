import React from 'react'

function NewUser() {
    return (
        <div className="NewUser padding-section">
            <div className="content w-85">
                <h1>NewUser</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>

                <div className="users-information grid-col-3">
                    <div className="box">
                        <p>Last month</p>
                        <strong>56,987</strong>
                    </div>
                    <div className="box">
                        <p>Last week</p>
                        <strong>1,297</strong>
                    </div>
                    <div className="box">
                        <p>Yesterday</p>
                        <strong>52</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewUser
