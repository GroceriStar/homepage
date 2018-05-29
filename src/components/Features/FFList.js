import React     from 'react'
import Link      from 'gatsby-link'
import FFFeature from './FFFeature'

// import pic01 from '../../assets/images/pic01.jpg'
// import pic02 from '../../assets/images/pic02.jpg'
// import pic03 from '../../assets/images/pic03.jpg'
// import pic04 from '../../assets/images/pic04.jpg'
// import pic05 from '../../assets/images/pic05.jpg'
// import pic06 from '../../assets/images/pic06.jpg'
//
import picz01 from '../../assets/images/food-1.jpg'
import picz02 from '../../assets/images/food-2.jpg'
import picz03 from '../../assets/images/food-3.jpg'
import picz04 from '../../assets/images/food-4.jpg'
import picz05 from '../../assets/images/food-5.jpg'
import picz06 from '../../assets/images/food-6.jpg'
import picz07 from '../../assets/images/food-7.jpg'
import picz08 from '../../assets/images/food-8.jpg'

import picz010 from '../../assets/images/food-10.jpg'
import picz011 from '../../assets/images/food-11.jpg'
import picz012 from '../../assets/images/food-12.jpg'
import picz013 from '../../assets/images/food-13.jpg'

const FFLink = ( props ) => (
  <section id="one" className="tiles">
    <FFFeature heading="Organize your ingredients"
      content="Do you want to spend less? Do you want to reduce your impulse purchases? Grocery lists can help you. You'll buy only foods that you need."
      img={picz02}
      to="#" />
    <FFFeature heading="Mobile-oriented design"
      content="You can manage all data from your phone. You always carry your smartphone, instead of paper lists. Your lists on your phone, period."
      img={picz013}
      to="#" />
    <FFFeature heading="Grocery lists customization"
      content="This is your own lists. You can do anything."
      img={picz011}
      to="#" />
  </section>
);
export default FFLink
