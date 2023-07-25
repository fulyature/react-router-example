import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const PersonDetail = () => {
  // let { state: person } = useLocation();
  // let navigate = useNavigate();
  // let {param}
  let { id } = useParams();
  console.log({ id });
  const [person, setPerson] = useState({});
  const getPerson = () => {
    axios(`https://reqres.in/api/users/${id} `)
      .then((res) => setPerson(res.data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src={person?.avatar} alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
