import React, {Component} from 'react';
import Feature from '../components/Features/Feature';
import FeatureImage from '../components/Features/FeatureImage';
import data from '../data/features'

let features = [];
var i = 0;
while (i + 3 <= data.length) {
    features.push(<li><Feature name={data[i]}  description={data[i + 1] }/>, <FeatureImage imageSrc={data[i + 2]} /></li>);
    i += 3;
}

class StoreFeatures extends Component {
    render() {
        return (
                <ul>
                    <li>
                        <div id='main-container'>{features}</div>
                    </li>
                </ul>
                )
                ;
    }
}
;
export default StoreFeatures;
