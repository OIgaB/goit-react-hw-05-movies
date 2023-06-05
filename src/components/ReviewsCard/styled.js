import styled from 'styled-components';

export const Notification = styled.p`
    padding: 15px 15px 15px 25px;
`; 

export const ListItem = styled.li`
    list-style: none;
    padding: 5px;
    background-color: rgba(145, 177, 182, 0.514);
    &:nth-child(even) {
        background-color: rgba(185, 229, 236, 0.514);
  }
`; 

export const Author = styled.p`
    font-weight: 700;
`; 
