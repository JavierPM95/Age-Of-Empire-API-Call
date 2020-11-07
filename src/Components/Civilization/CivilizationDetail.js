import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";

const CivilizationDetail = () => {
  const { id } = useParams();

  const [civilizationDetail, setCivilizationDetail] = useState([]);

  useEffect(() => {
    const getCivilizationDetails = async () => {
        const res = await fetch(
          `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
        );
        const data = await res.json();
        setCivilizationDetail(data);
      };
      getCivilizationDetails();
  }, [id]);




  return (
    <div className="container">
      <div className="my-2">
        <h1>Civilization Detail</h1>
      </div>
      <div className="my-2">
        <h4><span role="img" arial-label="name">⚔{" "}</span>{civilizationDetail.name}</h4>
        <h6><span role="img" arial-label="expansion">🛡{" "}</span>{civilizationDetail.expansion}</h6>
        <h6><span role="img" arial-label="bonus">🔮{" "}</span><b>Bonus: </b>{civilizationDetail.team_bonus}</h6>
      </div>
    </div>
  );
};

export default CivilizationDetail;
