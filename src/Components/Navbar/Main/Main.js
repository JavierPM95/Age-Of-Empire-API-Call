import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container my-4 text-center">
        <h1>This is the Main page</h1>
        <p className="my-2 text-secondary">You can navigate in the navigation bar</p>
        <h5 className="my-4">
          Try by cliking {" "} <Link to="civilization">Civilitation</Link>

        </h5>
      </div>
    </>
  );
};

export default Main;
