import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/questions">
        <h1>Go to Questions</h1>
      </Link>
    </div>
  );
}

export default Home;
