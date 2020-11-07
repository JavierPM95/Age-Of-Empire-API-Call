import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";



const Civilization = () => {
  const [civilization, setCivilization] = useState([]);

  useEffect(() => {
    getCivilization();
  }, []);

  const getCivilization = async () => {
    const res = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const data = await res.json();
    setCivilization(data.civilizations);
  };

  return (
    <div className="container">
      <div>
        <h1 className="my-2">Civilizations</h1>
      </div>
      <div>
        <ul>
          {civilization.map((civilization) => (
            <li key={civilization.id}>
              <Link to={`/civilization/${civilization.id}`}>
                {civilization.name} - {civilization.expansion}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Civilization;
