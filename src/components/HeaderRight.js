import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdApps } from 'react-icons/md';

function HeaderRight() {
  return (
    <Container>
      <Link to="/gmail">Gmail</Link>
      <Link to="/Iiages">Images</Link>
      <MdApps className="apps__icon" />
      <img src="/images/avatar.png" alt="" />
    </Container>
  );
}

export default HeaderRight;

const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    color: rgba(0, 0, 0, 0.87);
    font-size: 15px;
    text-decoration: inherit;
    margin-right: 20px;

    &:hover {
      text-decoration: underline;
    }
  }

  .apps__icon {
    font-size: 45px;
    color: rgba(0, 0, 0, 0.87);
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 5px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.33);
      transition-duration: 250ms;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
