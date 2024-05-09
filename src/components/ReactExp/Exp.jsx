import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { isTokenExpired } from "../../utils";
import { useNavigate } from "react-router-dom";

const Exp = () => {
  const navigate = useNavigate();

  const getData = async () => {
    try {
      if (!isTokenExpired(JSON.parse(localStorage.getItem("tokens")).accessToken)) {
        console.log("getting data...");
        const { data } = await axios.get(`http://localhost:4000/get/data`, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("tokens")).accessToken,
          },
        });
        console.log(data);

      } else {
        console.log("token refreshing....");
        const {
          data: { token },
        } = await axios.post(`http://localhost:4000/user/refresh/token`, {
          refreshToken: JSON.parse(localStorage.getItem("tokens")).refreshToken,
        });
        if (token) {
          const freshToken = JSON.parse(localStorage.getItem("tokens"));
          freshToken["accessToken"] = token;

          localStorage.setItem("tokens", JSON.stringify(freshToken));

          const {data} = await axios.get(`http://localhost:4000/get/data`, {
            headers: {
              Authorization: JSON.parse(localStorage.getItem("tokens")).accessToken,
            },
          });
          console.log(data);
          
        } else {
          localStorage.clear();
          navigate("/");
        }
      }
    } catch (e) {
      console.log(e);
      localStorage.clear();
      navigate("/");
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <button onClick={getData}>Get data</button>
    </>
  );
};

export default Exp;
