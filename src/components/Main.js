import React from 'react';
import styled from 'styled-components';
import Search from './Search';

function Main() {
  return (
    <Container>
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt=""
      />

      <Search HideButton />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  flex: 1;
  display: flex;
  margin-top: 10%;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 120px;
  }

  @media (max-width: 1024px) {
  img{
    height: 90px;
  }
  }

  @media (max-width: 776px) {
    img {
      margin-top: 20%;
    }
  }

`;
