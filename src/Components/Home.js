import React, { Component } from 'react';

class Home extends Component {
    render() {
      return (
        <div className="Home text-center">
           <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                <header className="masthead mb-auto">
                    <div className="inner">
                        <h3 className="masthead-brand">React Experiment</h3>
                        <nav className="nav nav-masthead justify-content-center">
                            <a className="nav-link active" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Contact</a>
                        </nav>
                    </div>
                </header>

                <main role="main" className="inner cover">
                    <h1 className="cover-heading">React Bootstrap Prototyping.</h1>
                    <p className="lead">
                        This landing page is using the Bootstrap 'Cover' template and being rendered with React.js, it's a quick experiment for my React.js studies.
                    </p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
                    </p>
                </main>

                <footer className="mastfoot mt-auto">
                    <div className="inner">
                        <p>Put together by <a href='http://www.nicolaskaosartor.com/'>Nicolas K. Sartor</a> with a <a href="https://getbootstrap.com/">Bootstrap</a> template made by by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                    </div>
                </footer>
            </div>
        </div>
      );
    }
  }
  
  export default Home;