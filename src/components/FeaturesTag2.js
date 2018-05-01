import React from 'react'
import Link  from 'gatsby-link'
// import data  from '../assets/data/second'
import Feature from '../components/Feature'

                // <Feature img="fas fa-shopping-cart fa-2x"
                // heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
                // <Feature img="fas fa-mobile-alt fa-2x"
                // heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
                // <Feature img="fas fa-cogs fa-2x"
                // heading="Customization" content="This is your own lists. You can do anything."/>
                //
                // <hr />
                //
                //
                //



const FeaturesTag2 = (  ) => (

  <section id="two2">
    <div className="inner">
      <h2>
        Features
      </h2>
    <div>
    <span className="icon fa-shopping-cart"></span>
    <h3>Instant Handles (coming soon)</h3>
    </div>
    <ul className="alt">

        <li className="icon fa-check">

        <Feature img="icon fa-shopping-cart fa-2x"
        heading="Organize your shopping experience" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>

        </li>
        <li className="icon fa-check">

        <Feature img="icon fa-mobile-alt fa-2x"
        heading="Mobile-oriented design (completed by Bootstrap)" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>

        </li>
        <li className="icon fa-check">

        <Feature img="icon fa-cogs fa-2x"
        heading="Customization" content="This is your own lists. You can do anything."/>

        </li>
        <li className="icon fa-check">

        <Feature img="icon fa-cogs fa-2x"
          heading="Quick access (coming soon)" content="Search ingredients in database, at your lists"/>

        </li>
        <li className="icon fa-check">

        <Feature img="icon fa-cogs fa-2x"
          heading="Favourite ingredients (Coming soon)" content="Save your favorite ingredients for fast access later"/>


        </li>
        <li>
        <Feature img="fas fa-cogs fa-2x"
       heading="Plan your family budget (coming soon)" content="You can calculate and plan your purchases. Control how much do you spend on this shopping session"/>


        </li>
    </ul>

     <ul className="actions">
         <li>
           <Link to="/landing" className="button next">Clone shopping list</Link>
         </li>
     </ul>
   </div>
 </section>

);
export default FeaturesTag2
