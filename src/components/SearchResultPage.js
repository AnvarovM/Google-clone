import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from './StateProvider';
import { BiSearchAlt2, BiImage, BiNews, BiVideo } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ImMic } from 'react-icons/im';
import useGoogleSearch from './useGoogleSearch';
import { AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { actionTypes } from './reducer';

function SearchResultPage() {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();

  // Live APi call
  const { data } = useGoogleSearch(term);

  const search = (e) => {
    e.preventDefault();
    console.log('you hot google search btn =>> ', input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };

  console.log(data);
  return (
    <Container>
      <div className="searchPage__header">
        {/* Google logo */}
        <Link to="/">
          <img
            className="logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        {/* Google input */}
        <form className="search">
          <div className="main__input">
            <AiOutlineSearch onClick={search} className="icons" />
            <input
              value={term}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search..."
            />
            <ImMic className="icons" />
          </div>
        </form>
      </div>

      <div className="another__links">
        <div className="links">
          <div className="link" id="active">
            <BiSearchAlt2 />
            <span>All</span>
          </div>
          <div className="link">
            <BiImage />
            <span>Images</span>
          </div>
          <div className="link">
            <BiNews />
            <span>News</span>
          </div>
          <div className="link">
            <BiVideo />
            <span>Video</span>
          </div>
          <div className="link">
            <BsThreeDotsVertical />
            <span>More</span>
          </div>
        </div>
      </div>
      <hr />

      {/* google another  */}

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for{' '}
            <strong>{term}</strong>
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} ▾
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>

              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}

export default SearchResultPage;

const Container = styled.div`
  padding: 30px;

  .searchPage__header {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 100;
    align-items: center;
    background: #fff;
  }

  .logo {
    object-fit: contain;
    height: 50px;
    margin-right: 50px;
  }

  .main__input {
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    height: 35px;
    padding: 10px 20px;
    border-radius: 999px;
    margin: 0 auto;
  }

  input {
    flex: .6;
    padding: 0 0 0 20px;
    font-size: medium;
    border: none;
    outline-width: 0;
  }

  .icons {
    cursor: pointer;
    margin: 0 5px;
  }

  .search__buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .another__links {
    display: flex;
    padding: 15px 0 0;
    color: gray;
    cursor: pointer;


    .links {
      flex: 1;
      max-width: 450px;
      min-width: 300px;
      display: flex;
      justify-content: space-between;
    }
    .link {
      display: flex;
      align-items: center;
      padding: 10px;

      span {
        margin-left: 5px;
      }
    }

    #active {
      border-bottom: 2px solid #215bb9;
    }
  }


  .searchPage__results {
    margin: 40px 0;
  }
/* 
  .searchPage__resultCount {
    color: #70757a;
    font-size: 14px;
    margin-left: 200px;
  } */

  .searchPage__result {
    max-width: 650px;
    margin-top: 10px;
    /* margin-left: 200px; */
    margin-bottom: 50px;
  }

  .searchPage__resultTitle {
    text-decoration: none;
    color: #2468d6;
  }

  .searchPage__resultTitle:hover {
    text-decoration: underline;
  }

  .searchPage__resultImage {
    object-fit: contain;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  @media (max-width: 1024px) {
    .main__input {
      width: 50vw;
      padding: 0;
    }
  }

  @media (max-width: 776px) {
    .main__input {
      width: 40vw;
      padding: 0;
    }
  }
`;
