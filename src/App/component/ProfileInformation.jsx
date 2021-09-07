import React from 'react'
import {Bar} from 'react-chartjs-2';
import {data,options} from '../Util/Chart'
import profile from '../../Assets/img/Profile photo.png'
import { Link } from 'react-router-dom';
import twitter from '../../Assets/img/twitter.png'
import instagram from '../../Assets/img/Instagram.png'
import facebook from '../../Assets/img/Icon awesome-facebook-f.png'
import google from '../../Assets/img/Google.png'
import yelp from '../../Assets/img/yelp.png'
import Group71 from '../../Assets/img/Group 71.png'
import Group79 from '../../Assets/img/Group 79.png'
import Group86 from '../../Assets/img/Group 86.png'
import Group93 from '../../Assets/img/Group 93.png'
import Group96 from '../../Assets/img/Group 96.png'
import Group98 from '../../Assets/img/Group 98.png'
function ProfileInformation() {
    return (
        <div className="ProfileInformation w-85 padding-section">
            <div className="top-area d-flex">

                <div className="image-wrapper">
                    <img src={profile} alt="" />
                </div>
                <div className="profile-info-area">
                    <div className="top-area d-flex" >
                        <h2>John & Kate Smith</h2>
                        <p>Member since July 21, 2019</p>
                    </div>
                    <div className="bottom-area d-flex">
                        <div className="contact-us">
                            <p>Contact us</p>
                            <ul>
                                <li className="d-flex-align-center">
                                <svg id="phone" xmlns="http://www.w3.org/2000/svg" width="15.885" height="15.885" viewBox="0 0 15.885 15.885">
  <path id="Icon_awesome-phone" data-name="Icon awesome-phone" d="M15.308.763,12.081.018a.749.749,0,0,0-.853.431L9.738,3.924a.743.743,0,0,0,.214.869l1.88,1.539a11.5,11.5,0,0,1-5.5,5.5L4.8,9.949a.744.744,0,0,0-.869-.214L.453,11.225a.754.754,0,0,0-.434.856l.745,3.227a.744.744,0,0,0,.726.577,14.394,14.394,0,0,0,14.4-14.4A.744.744,0,0,0,15.308.763Z" transform="translate(0.001 0.001)" fill="#7ac15a"/>
</svg>

                                (461) 910 5515
                                </li>
                                <li className="d-flex-align-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.348" height="18.348" viewBox="0 0 18.348 18.348">
  <g id="globe" transform="translate(1 1)">
    <path id="Path_3" data-name="Path 3" d="M19.348,11.174A8.174,8.174,0,1,1,11.174,3a8.174,8.174,0,0,1,8.174,8.174Z" transform="translate(-3 -3)" fill="none" stroke="#7ac15a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_4" data-name="Path 4" d="M3,18H19.348" transform="translate(-3 -9.826)" fill="none" stroke="#7ac15a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    <path id="Path_5" data-name="Path 5" d="M15.07,3a12.956,12.956,0,0,1,3.07,8.174,12.956,12.956,0,0,1-3.07,8.174A12.956,12.956,0,0,1,12,11.174,12.956,12.956,0,0,1,15.07,3Z" transform="translate(-6.896 -3)" fill="none" stroke="#7ac15a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  </g>
</svg>

                                katesrestaurant.com
                                </li>
                            </ul>

                            <div className="icons-wrapper d-flex-align-center">
                                <Link>

                                <img src={twitter} alt="" />
</Link>
<Link>
<img src={facebook} alt="" />

</Link>

<Link>
<img src={instagram} alt="" />
</Link>

<Link>

<img src={google} alt="" />

</Link>
<Link>
<img src={yelp} alt="" />


</Link>
                            </div>
                        </div>
                        




                        <div className="out-trust-section">
                            <p>We work ethically</p>
                            <div className="images-wrapper">
                        <img src={Group71} alt="" />
                        <img src={Group79} alt="" />
                        <img src={Group86} alt="" />
                        <img src={Group93} alt="" />
                        <img src={Group96} alt="" />
                        <img src={Group98} alt="" />
                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="bottom grid-col-3">
        <div className="google-map-area">
                <p>Visit us</p>
                <p>123 Made up street, San Jose, California, USA</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26361414.263400003!2d-113.75849480805297!3d36.24080384347216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1630494888632!5m2!1sen!2s"  style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

            </div>


            <div className="chart-area">
                <div className="top-area d-flex-align-center">
                    <p>Popular times</p>
                    <p className="time d-flex-align-center"><svg id="Clock" xmlns="http://www.w3.org/2000/svg" width="20.031" height="20.031" viewBox="0 0 20.031 20.031">
  <path id="Icon_awesome-clock" data-name="Icon awesome-clock" d="M10.578.563A10.016,10.016,0,1,0,20.594,10.578,10.014,10.014,0,0,0,10.578.563ZM12.884,14.7,9.322,12.113a.488.488,0,0,1-.2-.392v-6.8a.486.486,0,0,1,.485-.485h1.939a.486.486,0,0,1,.485.485v5.561L14.6,12.351a.484.484,0,0,1,.105.678L13.563,14.6A.488.488,0,0,1,12.884,14.7Z" transform="translate(-0.563 -0.563)" fill="#7ac15a"/>
</svg>
 8 AM - 5 PM</p>
                </div>
                <div className="days">
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                    <p>Sun</p>
                </div>
                <div className="chart-wrapper">
                <Bar
          data={data}
          options={options}
      
        />
                </div>
            </div>

            <div className="contact-area">
                <p>Get in touch</p>
                <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here"></textarea>
                <button className="join-now-button">SEND</button>
            </div>
        </div>
        </div>
    )
}

export default ProfileInformation
