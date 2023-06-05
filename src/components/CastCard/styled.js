import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
    grid-column-gap: 8px;
    margin: 30px auto;
    padding: 25px;
    text-align: center;
    background-color: #f9a504;
    border-radius: 4px;
`; 

export const Name = styled.p`
    font-weight: 700;
`; 

export const ListItem = styled.li`
    list-style: none;
`;

export const ImageWrapper = styled.div`
    width: 200px;
    height: 300px;
`; 