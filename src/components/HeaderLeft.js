import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HeaderLeft() {
    return (
        <Container>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>  
        </Container>
    )
}

export default HeaderLeft;

const Container = styled.div `
    display: flex;

    a {
        color: rgba(0,0,0, 0.87);
        font-size: 15px;
        text-decoration: inherit;
        margin-right: 20px;

        &:hover {
            text-decoration: underline;
        }
    }
`;