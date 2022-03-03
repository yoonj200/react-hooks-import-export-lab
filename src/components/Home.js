import React from "react";
// import username and city variables
import {username, city} from "../data/user"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}
// default export syntax
export default Home;