import { FormEl, Input, SearchBtn } from './styled';
import { useState } from "react";
import { Report } from 'notiflix/build/notiflix-report-aio';  
import PropTypes from 'prop-types';


const Form = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target: {value} }) => { // глибока диструктуризація
        setQuery(value.toLowerCase());
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(query.trim() === '') {
            Report.failure('Enter your request.');
            return;
        }
        onSubmit(query); // передача даних в Movies
        setQuery('');  
    }

    return (
        <FormEl onSubmit={handleSubmit}>
            <Input 
                type="text"
                onChange={handleChange}
                value={query}
            />
            <SearchBtn type="submit">Search</SearchBtn>
        </FormEl>
    )
}

export default Form;

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};