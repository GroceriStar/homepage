import React from 'react'
import Link  from 'gatsby-link'
// import data  from '../assets/data/second'
import Feature from './Feature'

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


      </div>

      <div className="row">
        <div className="4u 12u$(medium)">  <Feature img="icon alt fa-shopping-cart fa-2x"
          heading="Organize your ingredients" content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."/>
 </div>
        <div className="4u 12u$(medium)">   <Feature img="icon alt fa-mobile fa-2x"
          heading="Mobile-oriented design" content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."/>
</div>
        <div className="4u 12u$(medium)">   <Feature img="icon alt fa-cogs fa-2x"
          heading="Grocery lists customization" content="This is your own lists. You can do anything."/>
</div>
      </div>
      <hr className="major" />

        <h3>Coming soon features</h3>
      <div className="row">
        <div className="4u 12u$(medium)"> <Feature img="icon alt fa-cogs fa-2x"
          heading="Quick access" content="Search ingredients in database, at your lists"/>
</div>
        <div className="4u 12u$(medium)"> <Feature img="icon alt fa-cogs fa-2x"
          heading="Favourite ingredients" content="Save your favorite ingredients for fast access later"/>
</div>
        <div className="4u 12u$(medium)"> <Feature img="icon alt fa-cogs fa-2x"
       heading="Plan your family budget" content="You can calculate and plan your purchases. Control how much do you spend on this shopping session"/>
</div>
      </div>



   </div>
 </section>

);
export default FeaturesTag2
