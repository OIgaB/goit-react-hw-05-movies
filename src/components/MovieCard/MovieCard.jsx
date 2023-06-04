const MovieCard = ({ movie }) => {  
    console.log('Hello from MovieCard');
    const { original_title, genres, overview, poster_path, vote_average, release_date } = movie;  //id        
    const date = new Date(release_date); // конвертація дати з 2023-03-02 в Thu Mar 02 2023 02:00:00 GMT+0200 щоб потім дістати рік

        return (
        <>
            <h2 className="visually-hidden">Selected Movie</h2>
            <section>
                {poster_path && <img alt="movie poster" src={`https://image.tmdb.org/t/p/original/${poster_path}`} width='250'/>}
                <h3>{original_title}</h3>
                <p>({date.getFullYear()})</p>
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

