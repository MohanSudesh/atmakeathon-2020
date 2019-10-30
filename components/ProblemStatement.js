import React, { Component } from "react";

class ProblemStatement extends Component {
  render() {
    return (
      <div>
        <section id="problemstatement" className="main ">
          <header className="major special">
            <h2>Problem Statements</h2>
          </header>
          <h3>
            {" "}
            Participants are requested to pick one of the following problem
            statements :{" "}
          </h3>
          <br></br>
          <h3>
            <strong>Pediatric - Assistive Devices to Enable Play</strong>
          </h3>
          <p>
            It is a well-known fact that children benefit from playing games.
            However, disabled children might find it hard to play along with
            their peers. Take an existing cooperative game/toy and adapt it or
            design a new one that is fun and that includes children with varying
            abilities, who would otherwise not be able to play it with their
            peers. The target games could be either played indoors, outdoors in
            playgrounds, or water. It is anticipated that the assistive
            play-enabling devices would build self-esteem and improve the motor
            and social skills of disabled children.
          </p>
          <h3>
            <strong>Stairclimbing assist</strong>
          </h3>
          <p>
            Stair climbing is a challenging task for the elderly and/or people
            with knee pain and they may require the support of other people or
            hand-rails to climb even a few steps. Many temples and shrines,
            which the elderly Indian population are highly enthusiastic about
            visiting, require climbing steps. Usually, side rails are absent for
            such steps and besides, the steps may not be of uniform height,
            making them difficult to climb. Design a device to assist an elderly
            person to be able to navigate such steps independently. The device
            should be low-tech, easily transportable, light-weight and easy to
            use.
          </p>
          <h3>
            <strong>One Arm Drive</strong>
          </h3>
          <p>
            After a stroke, it’s common to experience weakness or paralysis on
            one side of the body. According to the National Stroke Association,
            as many as 9 out of 10 stroke survivors have some degree of
            paralysis immediately following a stroke. For such people, the
            hand-powered / manual wheelchair needs to be equipped with a system
            that permits operation using one arm. This system should enable the
            user to propel (move forward, move backward), brake and steer.
            Further, it should be possible to use this system with the left arm
            or right arm.
          </p>
          <h3>
            <strong>Therapy</strong>
          </h3>
          <p>
            Elderly and people with disabilities often need support from
            caregivers to shift within the house, therapy centers, etc for
            activities of daily living, e.g. shifting from bed to wheelchair or
            wheelchair to toilet, etc. Often the hoists are large, difficult to
            maneuver in tight indoor areas and occupy storage space. Design a
            hoist that is compact to operate and store at home and therapy
            centers.
          </p>
          <h3>
            <strong>Other movement enabling devices</strong>
          </h3>
          <p>
            Any device that enables a person with a disability to perform
            activities that they would not be able to do independently
            otherwise, or helps in social inclusion.
          </p>
        </section>
      </div>
    );
  }
}

export default ProblemStatement;
