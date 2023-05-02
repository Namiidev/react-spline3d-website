import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import IconTwitter from "./assets/img/icon-twitter.svg";
import IconYouTube from "./assets/img/icon-youtube.svg";
import IconLaptop from "./assets/img/icon-laptop.svg";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return (
      <Loader>
        <ClipLoader color="#fff" size={74} speedMultiplier={0.7} />
        <h2>Loading...</h2>
      </Loader>
    );
  } else
    return (
      <Wrapper>
        <Spline
          className="spline"
          scene="https://prod.spline.design/oB8Swt26cT8crpK1/scene.splinecode"
        />
        <Social>
          <div />
          <img src={IconTwitter} alt="Twitter" />
          <img src={IconYouTube} alt="YouTube" />
        </Social>
        <Content>
          <Menu>
            <li>
              <a className="home" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/">Download</a>
            </li>
            <li>
              <a href="/">App</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <button>Get Started</button>
            </li>
          </Menu>
          <h1>Deescover new people</h1>
          <p>
            Bring your people together and build your community online! by using
            our cross-platform app that lets you collaborate via chat, voice and
            by sharing and storing unlimited data. A new meta-world of topics is
            waiting for you. Join the private beta.
          </p>
          <button>
            <img src={IconLaptop} alt="" /> Download for Mac
          </button>
        </Content>
      </Wrapper>
    );
}

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  place-content: center;
  align-items: center;
  background-color: rgb(14, 17, 41);
  font-family: "Spline Sans", sans-serif;
  font-weight: bold 600;
  color: white;
`;

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  background-color: rgb(14, 17, 41);

  .spline {
    position: relative;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;

    @media (max-width: 1024px) {
      transform: scale(1) translateX(-100px) translateY(-100px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(-100px) translateY(-120px);
    }
    @media (max-width: 600px) {
      transform: scale(0.6) translateX(-700px) translateY(-150px);
      right: auto;
      left: 50%;
      margin-left: 0px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-850px);
    }
    @media (max-width: 281px) {
      transform: scale(0.45) translateX(-740px);
  }
}
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }

    .home {
      background: rgba(0, 0, 0, 0.2);
      border: 0px;
      font-size: 16px;
      padding: 12px 30px;
      border-radius: 14px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 280px;
      backdrop-filter: blur(20px);
      font-weight: 600;
      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
      transition: 1s;
      cursor: pointer;
      pointer-events: auto;
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(31, 66, 250, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
