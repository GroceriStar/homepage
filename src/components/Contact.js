import React from 'react'
import ContactSidebar from './ContactSidebar'

const Contact = ( props ) => (

    <section id="contact">
        <div className="inner">
            <section>

                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">
                        Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">
                        Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">
                        Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li>
                        <input type="submit" value="Send Message" className="special" /></li>
                        <li>
                        <input type="reset" value="Clear" /></li>
                    </ul>
                </form>

            </section>
            <ContactSidebar />
        </div>
    </section>

)

export default Contact
