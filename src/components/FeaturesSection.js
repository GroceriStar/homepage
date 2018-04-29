import React   from 'react'
import Link    from 'gatsby-link'
import Feature from 'Feature'
import data    from '../assets/data/first'

const FeaturesSection = ({  }) => {

  let listItems = _.each(data.features, (i, feature) => (
  			<Feature key="{i}" heading="{feature[0]}" content="{feature[1]}" img="fas fa-shopping-cart fa-2x" />
  		));

  	listItems = (
    <div className="sectiontwo">
      {listItems}
    </div>
  );

  let listItems2 = _.each(data.headings, (i, heading) => (
  	<Feature key="{i}" heading="{heading[0]}" content="{heading[1]}" img="fas fa-shopping-cart fa-2x" />
  	));
  	listItems2 = (
  	<div className="sectiontwo">
  		{listItems2}
  	</div>
  );

  let listItems3 = _.each(data.footer, (i, footer) => (

  	<Feature key="{i}" heading="{footer[0]}" content="{footer[1]}" img="fas fa-shopping-cart fa-2x" />

  	));
  	listItems3 = (
  	<div className="sectiontwo">
  		{listItems3}
  	</div>
  );

  return (

    <section id="one2" className="tiles">
      <article>
          <header className="major">
              <h3>
                Dont take our word for it.<br/>Try it out yourself.
              </h3>
              <p>Still not Convinced?</p>
              <span>May be this all list of features will help!</span>
              <ul>
                <li>
                </li>
              </ul>
          </header>
          <Link to="/landing" className="link primary">
            Placeholder
          </Link>
      </article>
    </section>

  );

};

export default FeaturesSection
