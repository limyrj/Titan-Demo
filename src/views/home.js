import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <div className="home-top-menu">
          <img
            alt="Rectangle34I814"
            src="/playground_assets/rectangle34i814-sca.svg"
            className="home-rectangle34"
          />
          <span className="home-text">
            <span>Our Firm</span>
          </span>
          <div className="home-what-we-do">
            <div className="home-down-arrow">
              <img
                alt="Line9I814"
                src="/playground_assets/line9i814-zc3zl.svg"
                className="home-line9"
              />
              <img
                alt="Line9I814"
                src="/playground_assets/line9i814-z67s.svg"
                className="home-line91"
              />
            </div>
            <span className="home-text02">
              <span>What We Do</span>
            </span>
          </div>
          <span className="home-text04">
            <span>Media</span>
          </span>
          <span className="home-text06">
            <span>Contact</span>
          </span>
          <img
            alt="TitanCapitalLogo1I814"
            src="/playground_assets/titancapitallogo1i814-oib-200h.png"
            className="home-titan-capital-logo1"
          />
        </div>
        <div className="home-group5">
          <img
            alt="chuttersnapdgAX0FbiabIunsplash18262"
            src="/playground_assets/chuttersnapdgax0fbiabiunsplash18262-fayl-900h.png"
            className="home-chuttersnapdg-ax-fbiab-iunsplash1"
          />
          <div className="home-group4">
            <button className="home-who-we-are-button">
              <div className="home-down-arrow1">
                <img
                  alt="Line9I840"
                  src="/playground_assets/line9i840-3vo8.svg"
                  className="home-line92"
                />
                <img
                  alt="Line9I840"
                  src="/playground_assets/line9i840-80ri.svg"
                  className="home-line93"
                />
              </div>
              <span className="home-text08">
                <span>Who We Are</span>
              </span>
            </button>
            <span className="home-text10">
              <span>ti·​tan</span>
            </span>
            <span className="home-text12">
              <span>One that stands out for greatness of achievement.</span>
            </span>
          </div>
        </div>
        <div className="home-footer">
          <img
            alt="Rectangle36I829"
            src="/playground_assets/rectangle36i829-01e.svg"
            className="home-rectangle36"
          />
          <span className="home-text14">
            <span>Copyright © 2023 Titan Capital.</span>
          </span>
          <div className="home-site-navigation">
            <span className="home-text16">
              <span>Our Firm</span>
            </span>
            <span className="home-text18">
              <span>What We Do</span>
            </span>
            <span className="home-text20">
              <span>Media</span>
            </span>
            <span className="home-text22">
              <span>Contact</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
