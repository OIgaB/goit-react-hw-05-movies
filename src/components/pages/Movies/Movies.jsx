const Movies = () => {
    console.log('агов Movies!');
    const handleChange = ({ target: {value} }) => { // глибока диструктуризація
        console.log(value);
    }
 return (
    <>
 <div>Це Movies</div>
    <form>
        <input 
            type="text"
            onChange={handleChange}
            // value={}
        />
        <button type="submit">Search</button>
    </form>
    </>
 )
}

export default Movies;