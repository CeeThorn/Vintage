import React from 'react'

const Contact = () => {
  return (
    <div>
        {/* Left Side */}
        <div>
            <p>GET IN TOUCH</p>

            <h1> Lets's talk
                <br/> custom appparel
            </h1>
        </div>


        <div>
            <p> NAME</p>
            <input type="text" placeholder="Your name"/>

            <p>EMAIL</p>
            <input type="email" placeholder="Your email"/>

            <p>PHONE</p>
            <input type="tel" placeholder="Your phone number"/>

            <p>COMPANY</p>
            <input type="text" placeholder="Your company"/>

            <p>MESSAGE</p>
            <textarea placeholder="Your message"></textarea>

            <button type="submit">Submit</button>
        </div>

        {/* Right Side */}
        <div>
            <p>CONTACT INFO</p>
            <p>1234 Main Street, Suite 100</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@vintageapparel.com</p>
        </div>

    </div>
  )
}

export default Contact