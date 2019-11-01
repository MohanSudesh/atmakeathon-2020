import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section id="home" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major special">
                <br></br>
                <br></br>
                <br></br>
                <h2>Home</h2>
              </header>

              <h2>
                <strong>Timeline:</strong>
              </h2>

              <table>
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <strong>ROUND 1</strong>
                      <br></br> November 24th, 2019
                    </td>
                    <td>Submission of idea description.</td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <strong>ROUND 2</strong>
                      <br></br>1st week of January, 2020
                    </td>
                    <td>
                      Grand Finale of AT Makeathon - Presentation of prototypes
                      by Shortlisted teams.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>
                <strong>About AT Makeathon:</strong>
              </h2>

              <p>
                In collaboration with the TTK Centre for Rehabilitation Research
                and Device Development (R2D2) at IIT Madras, we bring forth to
                you, <strong>Assistive Technology (AT) Makeathon.</strong> R2D2
                is headed by Prof. Sujatha Srinivasan of the Department of
                Mechanical Engineering. <br></br>
                <br></br>
                The main goal of the event is to provide an effective solution
                by combining the ideas of students with the resources of R2D2.
                We can enhance the quality of life of the elderly, and adults
                and children with disabilities by implementing successful
                prototypes designed by students. This will also create a mindset
                for social entrepreneurship among engineering students by
                providing them a platform to showcase their ideas and enabling
                them to set up their start-ups.<br></br>
                <br></br> Furthermore, the
                <a href="https://www.disabilityinnovation.com/">
                  {" "}
                  <strong>Global Disability Innovation (GDI) Hub</strong>
                </a>{" "}
                shall be mentoring the makeathon. GDI hub aims to build a
                movement to accelerate disability innovation for creating a
                fairer world. In addition to the prize money, winners will have
                the opportunity to be supported with business acceleration at
                GDI Hub as part of a new Inclusive Innovation Ecosystem.
                <br></br>
                <br></br>
              </p>
              <h2>
                <strong> About R2D2:</strong>
              </h2>
              <p>
                The group aims to improve the life of people with physical
                impairments by developing affordable and easily implementable
                solutions to movement enabling devices. Their research is
                related to human movement, the influence of orthotic and
                prosthetic devices on human movement, and the design and
                development of mechanisms and assistive devices. Get to know
                more about the group{" "}
                <a href="https://home.iitm.ac.in/r2d2/">
                  <strong>here</strong>
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
