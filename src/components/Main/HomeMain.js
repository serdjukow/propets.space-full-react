import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import da from "../utilits/dynamic_adapt";
// import { useHistory } from "react-router-dom";

const HomeMain = () => {
  useEffect(() => {
    da.init();
  }, []);
  return (
    <>
      <main className="page">
        <section className="welcome">
          <div className="welcome__row">
            <div className="welcome__content">
              <h1 className="welcome__title">
                Welcome to your <span>pawfessional</span> community
              </h1>
              <NavLink to="/found" className="welcome__button button-lost">
                <div className="welcome__button-container">
                  <p className="content-top">I lost my pet!</p>
                  <p className="content-bottom">Click to find!</p>
                </div>
                <div className="welcome__logo">
                  <svg
                    className="text-line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="79.004"
                    height="80.427"
                    viewBox="0 0 79.004 80.427"
                  >
                    <g transform="translate(1145.451 109.648)">
                      <path
                        className="a"
                        d="M116.634,33.743c2.329.709,4.962-1.215,5.975-4.354s-.1-6.177-2.329-6.987c-2.329-.709-4.962,1.215-5.974,4.354S114.3,33.034,116.634,33.743Z"
                        transform="translate(-1226.441 -113.215)"
                      />
                      <path
                        className="a"
                        d="M110.178,33.946c2.126-.608,3.038-3.747,2.025-6.987-1.114-3.24-3.747-5.266-5.873-4.557-2.126.608-3.038,3.747-2.025,6.987C105.419,32.528,108.052,34.655,110.178,33.946Z"
                        transform="translate(-1226.567 -113.215)"
                      />
                      <path
                        className="a"
                        d="M104.7,34.656c-1.013-3.038-3.544-4.962-5.569-4.354s-2.937,3.544-1.924,6.582,3.544,4.962,5.569,4.354C104.9,40.63,105.711,37.694,104.7,34.656Z"
                        transform="translate(-1226.657 -113.115)"
                      />
                      <path
                        className="a"
                        d="M113.616,34.5h-.506s-8.81,1.418-8.81,11.645c0,5.974,4.962,3.443,4.962,3.443s2.127-2.126,3.848-2.126h.405c1.722,0,3.848,2.126,3.848,2.126s4.962,2.633,4.962-3.342C122.426,35.918,113.616,34.5,113.616,34.5Z"
                        transform="translate(-1226.562 -113.061)"
                      />
                      <path
                        className="a"
                        d="M127.573,30.5c-2.025-.709-4.557,1.215-5.468,4.152s0,5.873,2.025,6.582,4.557-1.215,5.468-4.152C130.509,34.046,129.6,31.109,127.573,30.5Z"
                        transform="translate(-1226.342 -113.113)"
                      />
                      <path
                        className="a"
                        d="M156.909,72.405,156.6,72l-8.4,8.2.2.2,2.127,2.228c1.418,1.418,4.456.709,6.683-1.519,2.329-2.228,3.038-5.266,1.62-6.683Z"
                        transform="translate(-1226.008 -112.587)"
                      />
                      <path
                        className="a"
                        d="M139.93,55.343A32.389,32.389,0,1,0,113.8,68.608a31.915,31.915,0,0,0,17.62-5.266l15.7,15.7,8.4-8.2ZM113.7,59.6a23.29,23.29,0,1,1,23.29-23.29A23.294,23.294,0,0,1,113.7,59.6Z"
                        transform="translate(-1226.851 -113.448)"
                      />
                    </g>
                  </svg>
                </div>
              </NavLink>
              <NavLink
                to="/lost"
                className="welcome__button button-pet"
                data-micromodal-open
              >
                <div className="welcome__button-container">
                  <p className="content-top">I found a pet!</p>
                  <p className="content-bottom">What to do?</p>
                </div>
              </NavLink>
            </div>
            <div
              className="welcome__img-container"
              data-da=".welcome__content,768.98,1"
            >
              <div className="welcome__img">
                <img
                  src="https://propets.space/images/dist/home.png"
                  alt="Welcome"
                />
              </div>
            </div>
          </div>
          <div className="welcome__info-link info-link">
            I’m okay, just want to <NavLink to="/sign_in">join</NavLink> the
            pawsome community!
          </div>
        </section>
        <section className="banner">
          <div className="banner__row banner__container">
            Our fluffy space for lovers, admirers, dads and moms of our
            four-legged, winged, tailed guys.
          </div>
        </section>
        <section className="block-info">
          <div className="block-info__row _container">
            <div className="block-info__column">
              <div className="block-info__img">
                <img
                  src="https://propets.space/images/dist/home-2.png"
                  alt=""
                />
              </div>
              <div className="block-info__content">
                <h3 className="block-info__title">
                  Here is collected everything that your pet needs:
                </h3>
                <ul className="block-info__list">
                  <li>professional veterinarian tips;</li>
                  <li>useful information about education and care;</li>
                  <li>information about pet-sitting and walking service;</li>
                  <li>
                    and of course, great communication with new friends in your
                    social network!
                  </li>
                </ul>
                <div className="block-info__info-link info-link">
                  Make an account and <NavLink to="/sign_in">join</NavLink> to
                  us!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__row _container">
          <div className="footer__logo logo logo-white">
            <svg
              className="text-line text-line-footer"
              xmlns="http://www.w3.org/2000/svg"
              width="201.032"
              height="47.168"
              viewBox="0 0 201.032 47.168"
            >
              <path
                className="a"
                d="M115.436,28.685c1.3.4,2.777-.68,3.344-2.437s-.057-3.457-1.3-3.911c-1.3-.4-2.777.68-3.344,2.437S114.132,28.288,115.436,28.685Z"
                transform="translate(-49.352 -9.642)"
              />
              <path
                className="a"
                d="M107.41,28.8c1.19-.34,1.7-2.1,1.133-3.911-.623-1.814-2.1-2.947-3.287-2.55-1.19.34-1.7,2.1-1.134,3.911C104.746,28.007,106.22,29.2,107.41,28.8Z"
                transform="translate(-45.01 -9.644)"
              />
              <path
                className="a"
                d="M101.216,32.689c-.567-1.7-1.984-2.777-3.117-2.437s-1.644,1.984-1.077,3.684,1.984,2.777,3.117,2.437C101.329,36.033,101.783,34.389,101.216,32.689Z"
                transform="translate(-41.933 -13.079)"
              />
              <path
                className="a"
                d="M109.514,34.5h-.283a6.2,6.2,0,0,0-4.931,6.518c0,3.344,2.777,1.927,2.777,1.927a4.144,4.144,0,0,1,2.154-1.19h.227a4.144,4.144,0,0,1,2.154,1.19s2.777,1.474,2.777-1.87C114.445,35.293,109.514,34.5,109.514,34.5Z"
                transform="translate(-45.187 -14.947)"
              />
              <path
                className="a"
                d="M125.009,30.437c-1.133-.4-2.55.68-3.06,2.324s0,3.287,1.133,3.684,2.55-.68,3.06-2.324C126.653,32.421,126.143,30.777,125.009,30.437Z"
                transform="translate(-52.748 -13.151)"
              />
              <path
                className="a"
                d="M153.074,72.227,152.9,72l-4.7,4.591.113.113,1.19,1.247c.793.793,2.494.4,3.741-.85,1.3-1.247,1.7-2.947.907-3.741Z"
                transform="translate(-64.207 -31.194)"
              />
              <path
                className="a"
                d="M114.158,32.648a18.128,18.128,0,1,0-14.622,7.424,17.862,17.862,0,0,0,9.862-2.947l8.785,8.785,4.7-4.591Zm-14.679,2.38a13.035,13.035,0,1,1,13.035-13.035A13.037,13.037,0,0,1,99.479,35.028Z"
                transform="translate(-35.266 -1.646)"
              />
              <path
                className="a"
                d="M23.18,2.774A19.36,19.36,0,0,0,15.416,1.3H0V33.322H10.825V25.444h4.647A18.886,18.886,0,0,0,23.18,23.97a11.378,11.378,0,0,0,5.1-4.194,11.434,11.434,0,0,0,1.757-6.4,11.908,11.908,0,0,0-1.757-6.4A12.02,12.02,0,0,0,23.18,2.774ZM18.023,16.149a4.656,4.656,0,0,1-3.287.963H10.825V9.631h3.911a4.945,4.945,0,0,1,3.287.963A3.549,3.549,0,0,1,19.1,13.372,3.549,3.549,0,0,1,18.023,16.149Z"
                transform="translate(0 -0.563)"
              />
              <path
                className="a"
                d="M232.194,1.3H207.2V33.322h26.638v-8.1H217.8V20.966h13.545V13.2H217.8V9.461h23.69l.057.227V33.322H252.37V9.688h9.352V1.3H232.194Z"
                transform="translate(-89.768 -0.563)"
              />
              <path
                className="a"
                d="M330.834,17.229a10.534,10.534,0,0,0-4.364-2.89,43.868,43.868,0,0,0-6.178-1.587,29.7,29.7,0,0,1-4.081-1.02c-.85-.283-1.247-.793-1.247-1.417,0-1.36,1.36-2.04,4.137-2.04a19.588,19.588,0,0,1,8.9,2.38l3.23-7.821a22.62,22.62,0,0,0-5.611-2.1,26.422,26.422,0,0,0-6.4-.737,20.447,20.447,0,0,0-8.161,1.417,11.219,11.219,0,0,0-5.044,3.911,9.422,9.422,0,0,0-1.7,5.5,8.032,8.032,0,0,0,1.814,5.5,11.065,11.065,0,0,0,4.307,2.947,49.439,49.439,0,0,0,6.178,1.644,27.232,27.232,0,0,1,4.137,1.077c.85.34,1.247.85,1.247,1.53a1.428,1.428,0,0,1-.964,1.3,8.465,8.465,0,0,1-3.23.453,20.714,20.714,0,0,1-5.441-.793,19.741,19.741,0,0,1-5.1-2.154L303.8,30.208a20.084,20.084,0,0,0,6.178,2.38,35.067,35.067,0,0,0,7.765.907,20.447,20.447,0,0,0,8.161-1.417,11.219,11.219,0,0,0,5.044-3.911,9.422,9.422,0,0,0,1.7-5.5A7.374,7.374,0,0,0,330.834,17.229Z"
                transform="translate(-131.62)"
              />
              <path
                className="a"
                d="M67.558,14.65a7.915,7.915,0,0,0-3.457,2.72V14.14H57.3V38.794h7.141V27.119A6.857,6.857,0,0,1,66.2,21.961a5.292,5.292,0,0,1,2.777-1.474A20.594,20.594,0,0,1,72.319,13.8,12.113,12.113,0,0,0,67.558,14.65Z"
                transform="translate(-24.825 -5.979)"
              />
              <path
                className="a"
                d="M171.18,2.774A19.078,19.078,0,0,0,163.472,1.3H148V13.542a20.9,20.9,0,0,1,1.3,7.311,20.664,20.664,0,0,1-1.3,7.311v5.1h10.825V25.444h4.647a18.886,18.886,0,0,0,7.708-1.474,11.1,11.1,0,0,0,6.914-10.6,11.031,11.031,0,0,0-1.814-6.4A12.02,12.02,0,0,0,171.18,2.774Zm-5.157,13.375a4.656,4.656,0,0,1-3.287.963h-3.911V9.631h3.911a4.945,4.945,0,0,1,3.287.963,3.549,3.549,0,0,1,1.077,2.777A3.549,3.549,0,0,1,166.023,16.149Z"
                transform="translate(-64.12 -0.563)"
              />
            </svg>
          </div>
          <div className="footer__address">
            1600 Amphitheatre Pkwy Mountain View, CA 94043, USA
          </div>
        </div>
      </footer>
    </>
  );
};
export default HomeMain;
