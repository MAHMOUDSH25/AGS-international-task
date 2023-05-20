import React from "react";
import "./Body.css";

// Companies list Images import
import ThreeK from "../../Images/ThreeK.png";
import Deye from "../../Images/Deye.png";
import DJ from "../../Images/DJ.png";
import Growwat from "../../Images/Growwat.png";
import Must from "../../Images/Must.png";
import Lumi from "../../Images/Lumi.png";
import Rocket from "../../Images/Rocket.png";
import Felicity from "../../Images/Felicity.png";
import SuperPower from "../../Images/SuperPower.png";
import Rambo from "../../Images/Rambo.png";

// Accounts list Images import
import Acc1 from "../../Images/Acc1.png";
import Acc2 from "../../Images/Acc2.png";
import Acc3 from "../../Images/Acc3.png";
import Acc4 from "../../Images/Acc4.png";

function Body() {
  return (
    <section className="body">
      <h2 className="body__title">Relating to which</h2>
      <section className="companies">
        <ul className="companies__list">
          <li className="company__item">
            <img id="item__img" src={ThreeK} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Deye} />
          </li>
          <li className="company__item">
            <img id="item__img" src={DJ} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Growwat} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Must} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Lumi} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Rocket} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Felicity} />
          </li>
          <li className="company__item">
            <img id="item__img" src={SuperPower} />
          </li>
          <li className="company__item">
            <img id="item__img" src={Rambo} />
          </li>
        </ul>
      </section>
      <section className="accounts">
        <div className="accounts__div">
          <h2 className="accounts__title">Direct it to whome</h2>
          <div className="people__accounts">
            <ul className="acc__list">
              <li className="acc__item">
                <img id="acc__img" src={Acc1} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc2} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc3} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc4} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc3} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc2} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc3} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc4} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc2} />
              </li>
              <li className="acc__item">
                <img id="acc__img" src={Acc1} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Body;
