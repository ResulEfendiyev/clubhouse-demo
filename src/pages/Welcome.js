import React from "react";
import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className={style.WelcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.WelcomeInfo}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id,
          veniam ad est consequuntur iure, officia facere recusandae fugiat
          dolorum vero exercitationem deserunt beatae voluptatum. Minus
          assumenda deleniti rerum praesentium?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          pariatur expedita doloribus exercitationem consequuntur quisquam!
          Officia quam delectus tenetur nostrum temporibus neque! Nisi hic
          libero molestiae quasi architecto earum. Corrupti! lorem
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          dolor.
        </p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact="true"
          to="/invite"
          className="primaryBtn align-items-center mb-3"
        >
          Get your username {" "}
          {/* <img src="" alt="" /> */}
        </Link>
        <Link to="/">Have an invite text? Sign in</Link>
      </div>
    </div>
  );
}
