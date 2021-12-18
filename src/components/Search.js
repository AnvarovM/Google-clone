/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { ImMic } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Search({ HideButton = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();
    console.log("you hot google search btn =>> ", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };
  return (
    <Container>
      <form className="search">
        <div className="main__input">
          <AiOutlineSearch onClick={search} className="icons" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Google or Type a URL"
          />
          <ImMic className="icons" />
        </div>

        {!HideButton ? (
          <div className="search__buttons">
            <button type="submit" onClick={search}>
              Google Serach
            </button>
            <button>Iʻm feeling Lucky</button>
          </div>
        ) : (
          <div className="search__buttons">
            <button
              className="search__buttonsHidden"
              type="submit"
              onClick={search}
            >
              Google Serach
            </button>
            <button className="search__buttonsHidden">Iʻm feeling Lucky</button>
          </div>
        )}
      </form>

      <div className="main__links">
        <a href="https://tesla-clone-portfolio.netlify.app/" className="item">
          <img src="/images/tesla.png" alt="" />
          <span>Tesla clone</span>
          <BsThreeDotsVertical className="three__dots" />
        </a>
        <div className="item">
        <a href="https://gym-portfolio.netlify.app//" className="item">
          <img src="/images/portfolio.png" alt="" />
          <span>Gym website</span>
          <BsThreeDotsVertical className="three__dots" />
          </a>
        </div>
        <a href="https://menshop-portfolio.netlify.app/" className="item">
          <img src="/images/menshop.png" alt="" />
          <span>Men shop</span>
          <BsThreeDotsVertical className="three__dots" />
        </a>
      </div>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  .main__input {
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 35px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 75vw;
    margin: 0 auto;
    margin-top: 40px;
    max-width: 560px;
  }

  input {
    flex: 1;
    padding: 0 20px;
    font-size: medium;
    border: none;
    outline-width: 0;
  }

  .icons {
    cursor: pointer;
  }

  .search__buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  button {
    padding: 5px 15px;
    margin: 0 10px;
    cursor: pointer;
    background-color: #f8f8f8;
    border-radius: 4px;
    border: 1px solid #fff;

    .search__buttonsHidden {
      display: none !important;
    }

    &:hover {
      border-color: lightgray;
      transition-duration: 250ms;
    }
  }

  .main__links {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .item {
    display: flex;
    flex-direction: column;
    padding: 8px 10px;
    height: 110px;
    border-radius: 4px;
    position: relative;
    margin: 0 5px;

    img {
      width: 30px;
      object-fit: contain;
      margin-left: 30px;
    }

    &:hover {
      background-color: lightgray;
    }

    span {
      font-size: 13px;
      font-weight: 300;
      padding: 5px 10px;
      background-color: #fff;
      color: #000000;
      border-radius: 20px;
      margin: 20px 0;
    }

    .three__dots {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }

  @media (max-width: 776px) {
    .main__input {
    }

    input {
      padding: 0 20px;
      margin: 0 5px;
    }
  }
  @media (max-width: 556px) {
    .item {
      display: none;
    }
    .main__input {
      width: 75vw;
      padding: 0;
    }
  }
`;
