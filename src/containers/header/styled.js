import styled from 'styled-components';
import HeaderBg from 'assets/header-bg.png';

export const HeaderSC = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${HeaderBg});
    background-repeat: no-repeat;
background-size: cover;
`
export const Absolute = styled.div`
    position: absolute;
    right: 0;
    bottom: 174px;
    display: flex;
    flex-direction: column;
    align-iyems: flex-end;
`
export const HeaderText = styled.h1`
    font-family: 'Roboto';
    text-transform: uppercase;
    text-align: end;
    margin-top: 0;
    margin-bottom: ${({ space }) => (space ? space : '10px')};
    font-size: ${({ size }) => (size ? size : '55px')};
    font-weight: ${({ weight }) => (weight ? weight : 400)};
    color: ${({ red }) => (red ? '#E6110C' : '#FFF')};
`