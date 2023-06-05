import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgb(10, 10, 31);
    padding: 25px;
    color: rgb(158, 158, 179);
`; 

export const ContentWrapper = styled.section`
    display: flex;
`; 

export const PosterWrapper = styled.div`
    width: 300px;
    height: 400px;
    box-shadow: 9px 4px 4px 0px rgba(182, 179, 179, 0.3);
`; 

export const TextWrapper = styled.div`
    padding-left: 30px;
    width: 50%;
`; 

export const Title = styled.h3`
    font-size: 35px;
    color: rgb(205, 205, 223);
    margin-top: 10px;
`; 

export const ScoreTitle = styled.p`
    font-weight: 700;
`; 

export const ScoreValue = styled.span`
    margin-left: 10px;
    font-weight: 400;
`; 