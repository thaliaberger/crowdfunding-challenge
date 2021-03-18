import React, { useState } from "react";

import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import close from "../images/icon-close-modal.svg";

function Homepage() {
  const [totalbacked, setTotalBacked] = useState(89.914);
  const [totalbackers, setTotalBackers] = useState(5.007);
  const [bambooStand, setBambooStand] = useState(101);
  const [blackEditionStand, setBlackEditionStand] = useState(64);
  const [bookmarkToggle, setBookmarkToggle] = useState("Bookmark");
  const [modalToggle, setModalToggle] = useState(false);

  function handleBookmarkToggle() {
    bookmarkToggle === "Bookmark"
      ? setBookmarkToggle("Bookmarked")
      : setBookmarkToggle("Bookmark");
  }

  function handleModal() {
    setModalToggle(!modalToggle);
  }

  return (
    <main>
      <section>
        <img className="logo-mastercraft" src={logo} />
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain
        </p>
        <div className="buttons">
          <p onClick={handleModal}>Back this project</p>
          <p
            onClick={handleBookmarkToggle}
            style={{
              color: `${
                bookmarkToggle === "Bookmark"
                  ? "hsl(0, 0%, 48%)"
                  : "hsl(176, 72%, 28%)"
              }`,
            }}
          >
            <img src={bookmark} />
            {bookmarkToggle}
          </p>
        </div>
      </section>

      <section className="numbers-section">
        <div className="numbers-divs">
          <div className="numbers-div">
            <h4>${totalbacked}</h4> <p>of $100,000 backed</p>
          </div>
          <div className="numbers-div">
            <h4>{totalbackers} </h4>
            <p>total backers</p>
          </div>
          <div className="numbers-div">
            <h4>56</h4> <p>days left</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-content"
            style={{ width: `${Math.floor(totalbacked)}%` }}
          ></div>
        </div>
      </section>

      <section className="options-section">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>

        <div>
          <div>
            <h3>Bamboo Stand </h3> <h5>Pledge $25 or more</h5>
          </div>
          <div>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </div>
          <div>
            <p>
              <strong> {bambooStand}</strong> left
            </p>
            <button onClick={handleModal}>Select Reward</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Black Edition Stand </h3> <h5>Pledge $75 or more </h5>
          </div>
          <div>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </div>
          <div>
            <p>
              <strong>{blackEditionStand}</strong> left
            </p>
            <button onClick={handleModal}>Select Reward</button>
          </div>
        </div>
        <div>
          <div>
            <h3>Mahogany Special Edition </h3> <h5>Pledge $200 or more</h5>
          </div>
          <div>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </div>
          <div>
            <p>
              <strong>0</strong> left
            </p>
            <button disabled>Out of Stock</button>
          </div>
        </div>
      </section>
      <div
        className="overlay"
        style={{ display: `${modalToggle ? "block" : "none"}` }}
      >
        <section className="options-modal-section">
          <img onClick={handleModal} src={close} />
          <h3> Back this project</h3>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className="single-option">
            <input name="options" type="radio" />
            <label htmlFor="1">
              <h4> Pledge with no reward</h4>
              <p>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </label>
          </div>
          <div className="single-option">
            <input name="options" type="radio" />
            <label htmlFor="2">
              <div>
                <h4>Bamboo Stand </h4> <h5>Pledge $25 or more</h5>
                <h6>101 left</h6>
              </div>
              <p>
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
            </label>
          </div>
          <div className="single-option">
            <input name="options" type="radio" />
            <label htmlFor="3">
              <div>
                <h4>Black Edition Stand</h4>{" "}
                <h5> Pledge $75 or more 64 left</h5>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
            </label>
          </div>
          <div className="single-option">
            <input name="options" type="radio" />
            <label htmlFor="4">
              <div>
                <h4> Mahogany Special Edition</h4>{" "}
                <h5>Pledge $200 or more 0 left</h5>
              </div>
              <p>
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
            </label>
          </div>
          101 left Enter your pledge $25 Continue Enter your pledge $75 Continue
          0 left Enter your pledge $200 Continue
        </section>
      </div>
    </main>
  );
}

export default Homepage;
