import React, { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import ApiConstants from "./shared/apiConstants";

function SingleWeather() {
  let weatherID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const units = "metric";
  var cityData = [];
  const dataCache = new Map();
  const cacheExpirationTime = 5 * 60 * 1000;

  const [data, setData] = useState();

  useEffect(() => {
    weatherID = localStorage.getItem("weatherID");

    fetchAPI(weatherID, units, apiKey);
  });

  const fetchAPI = (cityIds, units, apiKey) => {
    // Check if the data is already in the cache and hasn't expired.
    const currentTime = Date.now();
    if (dataCache.has(cityIds)) {
      const cacheData = dataCache.get(cityIds);
      if (currentTime - cacheData.timestamp < cacheExpirationTime) {
        cityData = cacheData.data;
        console.log("Cache data: " + cityData);
        return;
      }
    }
  
    // Assignment step 04
    // If data is not in cache mechanism or has expired, make an API request.
    axios.get(
      `${ApiConstants.GET_WEATHER_API}/group?id=${cityIds}&units=${units}&appid=${apiKey}`
    )
      .then((response) => (setData(response.data.list[0])))
      .then((response) => {
        // Store the data in the cache
        dataCache.set(cityIds, { data: cityData, timestamp: currentTime });
        return;
      })
      .catch((error) => console.log(error));
  }

  const handleBack = () =>{
    window.location.href = './';
  }

  return (
    <div>
      <div className="headerContainer">
        <header>
          <img src="../src/assets/header.png" className="img-fluid" />
        </header>
      </div>
      <div className="d-flex align-self-center justify-content-center mt-4 mb-4">
        <div>
          <img
            src="../src/assets/logo.png"
            style={{ width: "45px", height: "auto" }}
            className="logo"
          />
        </div>
        <div className="logoText2">
          <a
            className="text-decoration-none d-flex"
            style={{ color: "#ffffff", fontWeight: 700, fontSize: "150%" }}
          >
            Weather App
          </a>
        </div>
      </div>
      <div className="mb-5" style={{ display: "flex" }}>
        <div className="mb-5">
          <div className="row">
            <div id="Card" className="col-md-5">
              <div
                className="card d-flex"
                style={{
                  backgroundColor: "#388ee7",
                  height: "500px",
                  width: "1000px",
                  border: "none",
                }}
              >
                <div className>
                  <img
                    src="../src/assets/cardBg.png"
                    className="card-img-top"
                  />
                  <div
                    id="back"
                    className="backBtnViewCard"
                    style={{ marginBottom: "100px" }}
                    onClick={()=>handleBack()}
                  >
                    <img src="../src/assets/back.png" className="backBtn" />
                  </div>
                  <div className="cityNameviewCard">
                    <div className>
                      <h3
                        id="view-city-name"
                        className="card-title text-white"
                        style={{ fontSize: "60px" }}
                      >
                        {data?.name}, {data?.sys.country}
                      </h3>
                    </div>
                    <div className="ms-5 px-5 mb-3">
                      <a
                        className="text-white small text-decoration-none"
                        style={{ fontSize: "13px" }}
                      >
                        Sunday 15 march
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="ms-5">
                          <div className="weatherIconView">
                            <img
                              src="../src/assets/fewClouds.png"
                              id="icon"
                              className="viewWeatherIcon ms-2 mb-2"
                            />
                            <div className="me-5">
                              <a
                                id="view-city-description"
                                className="card-text text-white text-decoration-none"
                                style={{ fontWeight: 500 }}
                              >
                                {data?.weather[0]?.description}
                              </a>
                            </div>
                          </div>
                          <div className="vertical-line ms-5" />
                        </div>
                        <div className="align-self-center ms-5">
                          <div className="ms-5">
                            <h1 className="font-light text-white">
                              <small id="view-city-temp">{data?.main?.temp}</small>
                              <sup>o</sup>c
                            </h1>
                          </div>
                          <div className="ViewFonts ms-5">
                            <div className>
                              <small className="text-white">
                                Temp min:{" "}
                                <small
                                  className="text-white"
                                  id="view-city-temp_min"
                                >
                                  {data?.main?.temp_min}
                                </small>
                                <sup>o</sup>c
                              </small>
                            </div>
                            <div className>
                              <small className="text-white">
                                Temp max:{" "}
                                <small
                                  className="text-white"
                                  id="view-city-temp_max"
                                >
                                  {data?.main?.temp_max}
                                </small>
                                <sup>o</sup>c
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body d-flex align-items-center justify-content-center"
                  style={{ backgroundColor: "#383b47" }}
                >
                  <div className="align-self-center ms-3 pb-3">
                    <div className="mt-2">
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        Pressure:{" "}
                        <fetchtext
                          id="view-city-pressure"
                          className="fetchText2"
                        >
                          {data?.main?.pressure}hPa
                        </fetchtext>
                      </a>
                    </div>
                    <div>
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        Humadity:{" "}
                        <fetchtext
                          id="view-city-humidity"
                          className="fetchText2"
                        >
                          {data?.main?.humidity}%
                        </fetchtext>
                      </a>
                    </div>
                    <div>
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        Visibiliy:{" "}
                        <fetchtext
                          id="view-city-visibility"
                          className="fetchText2"
                        >
                          8.0km
                        </fetchtext>
                      </a>
                    </div>
                  </div>
                  <div className="ms-4 mt-2">
                    <div
                      className="d-flex ms-2"
                      style={{ height: "50px", color: "#ffffff" }}
                    >
                      <div className="vr" />
                    </div>
                  </div>
                  <div className="align-self-center ms-4">
                    <div className="ms-5 mb-1 pe-1">
                      <img
                        src="../src/assets/degree.png"
                        className="degreeIcon2"
                      />
                    </div>
                    <div className="mb-2 ms-4">
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        {data?.wind?.speed}ms/ {data?.wind?.deg} Degree
                      </a>
                    </div>
                  </div>
                  <div className="ms-5 mt-2 pe-3">
                    <div
                      className="d-flex ms-3"
                      style={{ height: "50px", color: "#ffffff" }}
                    >
                      <div className="vr" />
                    </div>
                  </div>
                  <div className="align-self-center ms-3">
                    <div>
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        Sunrise:{" "}
                        <fetchtext className="fetchText2">6:05am</fetchtext>
                      </a>
                    </div>
                    <div>
                      <a className="ViewFonts card-text text-white small text-decoration-none">
                        Sunset:{" "}
                        <fetchtext className="fetchText2">6:05am</fetchtext>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer
        className="bg-light text-center text-lg-start fixed-bottom"
        style={{ width: "100%" }}
      >
        <div className="text-center p-3" style={{ backgroundColor: "#30333d" }}>
          <a
            className="fw-normal text-decoration-none"
            style={{ color: "#ffffff", opacity: "0.5" }}
          >
            2021 Fidenz Technologies
          </a>
        </div>
      </footer>
    </div>
  );
}

export default SingleWeather;
