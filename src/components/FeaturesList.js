import React from 'react'
import Link  from 'gatsby-link'

const FeaturesList = ( props ) => (

  <div className="row flist-outer">
    <div className="col-md-6 col-md-push-4 col-md-pull-2 Featureslist-container">
      <div className="col-md-10 col-xs-10">
        <div className="featurelisti">
          {props.content}
        </div>
      </div>
      <div className="col-md-2 col-xs-2">
        <div className="checkimage-conatiner">
          <i class="fa fa-check"></i>
        </div>
      </div>
    </div>
  </div>

);

export default FeaturesList
