import React from 'react'
        import Link  from 'gatsby-link'
        import data  from '../../data/second'

        const ScienceTag = () => (
<section id="science-tag1">
    <div className="inner">


        <div className="row">

            <div className="12u 12u$(small) science-text">
                {data[0].text[0]}
            </div>

            <div className="12u 12u$(small)">
                <h3>
                    {data[0].title}
                </h3>
            </div>
            <br />
            <div className="12u 12u$(small)">
                <h3>{data[0].authors[0]}</h3>
            </div>
            <div className="12u 12u$(small)">
                <h3>{data[0].authors[1]}</h3>
            </div>
            <div className="12u 12u$(small)">
                <br />
                <ul className="actions">
                    <li>
                        <a href={data[0].url} className="button next">
                            Read full study
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        
        
        <div className="row">
            <div className="12u 12u$(small) science-text">
                {data[1].text[0]}
            </div>

            <div className="12u 12u$(small)">
                <h3>
                    {data[1].title}
                </h3>
            </div>
            <br />
            <div className="12u 12u$(small)">
                <h3>{data[1].authors[0]}</h3>
            </div>
            <div className="12u 12u$(small)">
                <h3>{data[1].authors[1]}</h3>
            </div>
            <div className="12u 12u$(small)">
                <br />
                <ul className="actions">
                    <li>
                        <a href={data[1].url} className="button next">
                            Read full study
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
</section>


        );
        export default ScienceTag
