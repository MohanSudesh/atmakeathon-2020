import React, { Component } from "react";

export class Rules extends Component {
  render() {
    return (
      <div>
        <section id="rules">
          <header className="major special">
            <h2>Rules</h2>
          </header>
          <ul>
            <li>
              <p>Students can participate in teams of three.</p>
            </li>
            <li>
              <p>
                Teams are advised to submit their technological ideas as
                abstracts along with product descriptions and dimensions.
                <strong>
                  Deadline for the same is November 24th, 2019
                </strong>.{" "}
              </p>
            </li>
            <li>
              <p>
                During the 1st week of January, the Grand finale of AT Makeathon
                event will be conducted in one of the halls of IITM. The
                selected teams will be presenting their ideas along with their
                prototypes in front of a panel of jury.
              </p>
            </li>
            <li>
              <p>
                The winners of the AT Makeathon will get cash prizes and mentor
                support from R2D2 for their product development and to start a
                venture
              </p>
            </li>
          </ul>
          <h3>
            <strong>
              The prototypes designed will be judged by the following criteria:
            </strong>
          </h3>
          <ol>
            <li>Customer Survey / User Interaction</li>
            <li>Study of Existing Products</li>
            <li> Design (Functionality, Ergonomics, Kinetics, Simplicity)</li>
            <li>Novelty</li>
            <li>Design Methodology</li>
            <li>Prototyping</li>
            <li>Costing</li>
            <li>
              Product Specification (Objective Metrics like size, weight, force
              necessary for operation, etc)
            </li>
          </ol>
        </section>
      </div>
    );
  }
}

export default Rules;
