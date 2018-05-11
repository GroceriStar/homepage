import React from 'react'

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>NOT FOUND</title>
      <meta name="description" content="404 Page" />
    </Helmet>

    <div id="main" className="alt">

      <section id="one">
        <div className="inner">
        <header className="major">
        <h1>
        You just hit a route that doesn&#39;t exist... the sadness.
        </h1>
        </header>
        </div>
      </section>

    </div>
  </div>
)

export default NotFoundPage
