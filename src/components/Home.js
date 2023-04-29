import React from "react";
import vg from "../Assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Aman pandey</h1>
          <p>Soliton to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nam quae natus illo a maxime, magni officia molestias nulla. Ex unde
            cumque officiis ipsam, magnam doloremque iste odio suscipit
            quisquam.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            praesentium incidunt numquam ex. Dolorum, neque laudantium
            repudiandae recusandae iste magni aliquid sequi consectetur
            doloribus sint totam, amet dolore, voluptatum repellat. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Excepturi magnam alias
            aliquid ad, distinctio quasi ab cumque totam vero. Vero asperiores
            quaerat adipisci natus eaque eligendi veniam amet inventore
            suscipit.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
