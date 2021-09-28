import React from "react";
import "../cascading/Feature.css";
import { Link } from "react-router-dom";

class Features extends React.Component {
  render() {
    return (
      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <img
              className="mb-4"
              src="https://images.unsplash.com/photo-1616964524979-c08f6d87c7e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXklMjBjYWtlJTIwY2FuZGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="logo"
              width="150px"
              height="150px"
              style={{ borderRadius: "50%" }}
            />

            <h2>100% FRESH</h2>
            <p>
            Everything we bake, we bake with Love,
            Freshly baked all Day. Every day!
            </p>
            <p>
              <a class="btn btn-secondary" href="/ViewCakesTableUser">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              className="mb-4"
              src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
              alt="logo"
              width="150px"
              height="150px"
              style={{ borderRadius: "50%" }}
            />

            <h2>100% CREMY</h2>
            <p>
            Cakes make everything better!!
            Cake is for life not just for birthdays.
            </p>
            <p>
              <a class="btn btn-secondary" href="/ViewCakesTableUser">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img
              className="mb-4"
              src="https://www.pistahouse.in/uploads/1582116404-Fresh%20Fruit%20Cake.jpg"
              alt="logo"
              width="150px"
              height="150px"
              style={{ borderRadius: "50%" }}
            />

            <h2>100% NATURAL FRUIT</h2>
            <p>
            Fruit cake is always a good idea,
            Fruit cake makes everything better.
            </p>
            <p>
              <a class="btn btn-secondary" href="/ViewCakesTableUser">
                View details &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
