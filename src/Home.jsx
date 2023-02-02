import React, { useState, useEffect } from "react";
import axios from "axios";
import DummyData from "./assets/dummyData/cities.json";

function Home() {
  const [weatherData, setWeatherData] = useState(DummyData.List);

  useEffect(() => {
    setWeatherData(DummyData.List);
  }, [DummyData]);

  const handleNavigation = (data) =>{
    // alert(data.CityCode);
    localStorage.setItem("weatherID", data.CityCode)
    window.location.href = './SingleWeather';
  }

  return (
    <div>
      <div className="headerContainer">
        <header>
          <img src="../src/assets/header.png" className="img-fluid" />
        </header>
      </div>
      <div
        className="d-flex align-items-center justify-content-center m-4"
      >
        <div className="logo">
          <img src="../src/assets/logo.png" className="logo" />
        </div>
        <div className="logoText">
          <a
            className="text-center text-decoration-none home-heading"
          >
            Weather App
          </a>
        </div>
      </div>
      <center>
        <div className="inputContainer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city"
            />
            <button
              className="btn btn-primary add-city-btn"
              type="button"
            >
              Add City
            </button>
          </div>
        </div>
      </center>
      <div
        className="container container-sub"
      >
        <div className="mx-auto">
          <div className="row mx-auto d-flex">
            {weatherData?.map((item) => (
              <div id="card-0" className="col-md-5" key={item.CityCode} onClick={()=>handleNavigation(item)}>
                <div
                  className="card mx-auto mx-auto-card"
                >
                  <div>
                    <img
                      src="../src/assets/cardBg.png"
                      className="card-img-top"
                    />
                    <div className="card-overlay">
                      <div className="d-flex ms-5 mt-4">
                        <div className>
                          <div className>
                            <h3
                              className="card-title text-white"
                              id="city-name-0"
                            >
                              {item.CityName}
                            </h3>
                          </div>
                          <div className="ms-4 mb-3">
                            <a className="text-white small text-decoration-none">
                              9.19am, march 8
                            </a>
                          </div>
                          <div className="ms-3">
                            <img
                              src="../src/assets/fewClouds.png"
                              id="icon-0"
                              className="weatherIcon"
                            />
                            <a
                              className="card-text text-white text-decoration-none ms-2"
                              id="city-description-0"
                            >
                              {item.Status}
                            </a>
                          </div>
                        </div>
                        <div className="align-self-end ms-5 mb-1">
                          <div className>
                            <h1 className="font-light text-white">
                              <small id="city-temp-0">{item.Temp}</small>
                              <sup>o</sup>c
                            </h1>
                          </div>
                          <div className>
                            <div className>
                              <small className="text-white">
                                Temp min:{" "}
                                <small
                                  className="text-white"
                                  id="city-temp_min-0"
                                >
                                  25
                                </small>
                                <sup>o</sup>c
                              </small>
                            </div>
                            <div className>
                              <small className="text-white">
                                Temp max:{" "}
                                <small
                                  className="text-white"
                                  id="city-temp_max-0"
                                >
                                  28
                                </small>
                                <sup>o</sup>c
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-body d-flex"
                  >
                    <div className="align-self-center ms-3 pb-3">
                      <div className="mt-2">
                        <a className="card-text text-white small text-decoration-none">
                          Pressure:{" "}
                          <fetchtext id="city-pressure-0" className="fetchText">
                            1018hPa
                          </fetchtext>
                        </a>
                      </div>
                      <div>
                        <a className="card-text text-white small text-decoration-none">
                          Humadity:{" "}
                          <fetchtext id="city-humidity-0" className="fetchText">
                            78%
                          </fetchtext>
                        </a>
                      </div>
                      <div>
                        <a className="card-text text-white small text-decoration-none">
                          Visibiliy:{" "}
                          <fetchtext
                            id="city-visibility-0"
                            className="fetchText"
                          >
                            8.0km
                          </fetchtext>
                        </a>
                      </div>
                    </div>
                    <div className="ms-3 mt-2">
                      <div
                        className="d-flex ms-2 d-flex-ms-2"
                      >
                        <div className="vr" />
                      </div>
                    </div>
                    <div className="align-self-center ms-3">
                      <div className="ms-5 mb-1 pe-1">
                        <img
                          src="../src/assets/degree.png"
                          className="degreeIcon"
                        />
                      </div>
                      <div className="mb-2 ms-1">
                        <a className="card-text text-white small text-decoration-none">
                          4.0ms/ 120 Degree
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div
                        className="d-flex ms-3 d-flex-ms-3"
                      >
                        <div className="vr" />
                      </div>
                    </div>
                    <div className="align-self-center ms-3">
                      <div>
                        <a className="card-text text-white small text-decoration-none">
                          Sunrise:{" "}
                          <fetchtext className="fetchText">6:05am</fetchtext>
                        </a>
                      </div>
                      <div>
                        <a className="card-text text-white small text-decoration-none">
                          Sunset:{" "}
                          <fetchtext className="fetchText">6:05am</fetchtext>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer
        className="bg-light text-center text-lg-start mt-auto"
        style={{ width: "100%" }}
      >
        <div className="text-center p-3" style={{ backgroundColor: "#30333d" }}>
          <a
            className="fw-normal text-decoration-none"
          >
            2021 Fidenz Technologies
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
