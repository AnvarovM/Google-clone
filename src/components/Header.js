import React from 'react';
import styled from 'styled-components';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

function Header() {
    return (
        <Container>
            <HeaderLeft />
            <HeaderRight />
        </Container>
    )
}

export default Header;

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
`;
