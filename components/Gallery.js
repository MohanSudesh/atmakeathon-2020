import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div>
        <section id="gallery" className="main special">
          <header className="major">
            <h2>Gallery</h2>
          </header>
          <ul className="features">
            <li>
              <img src={"../static/images/NeoRider and NeoBolt.png"} />

              <p>NeoRider and NeoBolt</p>
            </li>
            <li>
              <img src={"../static/images/NeoRider in the making.png"} />

              <p>NeoRider in the making</p>
            </li>

            <li>
              <img
                src={"../static/images/R2D2 team and friends (July 2018).png"}
              />
              <p>R2D2 team and friends (July 2018)</p>
            </li>
            <li>
              <img src={"../static/images/Prosthetic Knee prototype.jpg"} />

              <p>Prosthetic Knee prototype</p>
            </li>
            <li>
              <img src={"../static/images/Standing wheelchair Sitting.png"} />

              <p>Standing wheelchair Sitting</p>
            </li>
            <li>
              <img src={"../static/images/Standing wheelchair Standing.png"} />
              <p>Standing wheelchair Standing</p>
            </li>
          </ul>

          {/* <img src={"../static/images/NeoRider and NeoBolt.png"} />
          <img src={"../static/images/NeoRider in the making.png"} />
          <img src={"../static/images/Prosthetic Knee prototype.jpg"} />
          <br></br>
          <img src={"../static/images/R2D2 team and friends (July 2018).png"} />
          <img src={"../static/images/Standing wheelchair Sitting.png"} />
          <img src={"../static/images/Standing wheelchair Standing.png"} /> */}
        </section>
      </div>
    );
  }
}

export default Gallery;
