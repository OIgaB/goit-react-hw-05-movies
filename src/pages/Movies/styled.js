import styled from 'styled-components';

export const Form = styled.form`
    display: inline-flex;
    gap: 15px;
    border-radius: 4px;
    padding: 0 15px 15px 35px;
`;

export const Input = styled.input`
    display: block;
    height: 14px;
    padding: 7px 10px;
    font-size: 15px;
    border-radius: 4px;
    letter-spacing: 1.3px;
    border-color: transparent;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;

    box-shadow: #f9a504 0px 30px 60px -70px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset;
        &:hover,
        &:focus {
            border-color: #f9a504;
        }
`; 

export const SearchBtn = styled.button`
    width: 90px;
    height: 30px;
    background-color: #f9a504;
    border-radius: 4px;
    border-color: transparent;
    &:hover,
    &:focus {
        background-color: #b97b07;  
    }
`; 