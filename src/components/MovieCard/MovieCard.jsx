const MovieCard = ({ movie }) => {  
    console.log('Hello from MovieCard');
    const { original_title, genres, overview, poster_path, vote_average } = movie;  //id

        return (
        <>
            <h2 className="visually-hidden">Selected Movie</h2>
            <section>
                {poster_path && <img alt="movie poster" src={`https://image.tmdb.org/t/p/original/${poster_path}`} width='250'/>}
                <h3>{original_title}</h3>
                {vote_average && 
                    <p>User Score: 
                        <span>{vote_average.toFixed(1) * 10}%</span>   {/* toFixed округлення дробових чисел (після коми 1 цифра)   */}
                    </p>
                }  
                <h4>Overview</h4>
                <p>{overview}</p>
                <h4>Genres</h4>
                <p>{genres && genres.map(genre => genre.name).join(", ")}</p>
            </section>
        </>
    );
}

export default MovieCard;

