import React, { Component } from "react";

import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";

function Homepage() {
  return (
    <main>
      <section>
        <img className="logo-mastercraft" src={logo} />
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain
        </p>
        <div className="buttons">
          <p>Back this project</p>
          <p>
            <img src={bookmark} />
            Bookmark
          </p>
        </div>
      </section>

      <section className="numbers-section">
        <div className="numbers-div">
          <h4>$89,914</h4> <p>of $100,000 backed</p>
        </div>
        <div className="numbers-div">
          <h4>5,007 </h4>
          <p>total backers</p>
        </div>
        <div className="numbers-div">
          <h4>56</h4> <p>days left</p>
        </div>
      </section>

      <section>
        <h3>About this project</h3>
        <p>
          Duis irure deserunt nulla velit pariatur aute voluptate exercitation
          nulla magna. Quis anim dolore magna laboris amet ut. Velit anim ut
          duis magna officia Lorem ullamco. Occaecat fugiat dolor aliquip fugiat
          consequat labore nostrud nulla voluptate ullamco. Id dolore anim magna
          magna sit veniam. Irure sit magna laboris cillum enim officia pariatur
          quis. Ad est adipisicing commodo voluptate eiusmod. Eiusmod irure ad
          incididunt amet labore elit nisi dolore labore amet. Do exercitation
          in ea ea esse laboris fugiat laboris et labore. Esse cupidatat
          consectetur duis proident. Quis incididunt duis aliquip ut in
          excepteur. Veniam do enim amet aute proident. Exercitation cillum enim
          cupidatat voluptate laborum officia do non. In deserunt sunt nostrud
          aute cillum. Ad esse laborum dolore nulla consequat velit. Esse amet
          culpa nostrud sint voluptate cupidatat culpa do irure consequat.
        </p>

        <div></div>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}

export default Homepage;
