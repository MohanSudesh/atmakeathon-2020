import React, { Component } from "react";

export class GetInTouch extends Component {
  render() {
    return (
      <div>
        <section id="getintouch" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major special">
                <h2>Get In Touch</h2>
              </header>
              <ul>
                <li>strategist@shaastra.org</li>
                <li>
                  Lalitha: +91 9444 425 923 <br></br> Strategist: Events and
                  Workshops, Shaastra 2020
                </li>
                <li>
                  Nikhil S: +91 8289 960 302<br></br>Strategist: Events and
                  Workshops, Shaastra 2020
                </li>
              </ul>
              <br></br>
              <br></br>
              {/* <p>
                strategist@shaastra.org <br></br>Lalitha: +91 9444 425 923{" "}
                <br></br>
                Strategist: Events and Workshops, Shaastra 2020<br></br> Nikhil
                S: +91 8289 960 302
                <br></br>
                Strategist: Events and Workshops, Shaastra 2020
              </p> */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default GetInTouch;
