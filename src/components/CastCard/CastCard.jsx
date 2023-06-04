const CastCard = ({ cast }) => {
    return (
        <>
            <p>Hello from CastCard!</p>
            <ul>
                {cast && cast.map(({id, profile_path, name, character}) => {
                    return <li key={id}>
                        <img alt="actor" src={`https://image.tmdb.org/t/p/original/${profile_path}`} width='200'/>
                        <p>{name}</p>
                        {character && <p>Character: <span>{character}</span></p>}
                    </li>  
                })}
            </ul>
        </>
    );
}

export default CastCard;