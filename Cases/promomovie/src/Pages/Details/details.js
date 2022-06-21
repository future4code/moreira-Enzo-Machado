import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Link } from "react-router-dom";

import { Container } from "./style";


function Details() {

    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const imagePath = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {

            const {title, poster_path, overview, release_date} = data
            
            const movie = {
                id,
                title,
                image: `${imagePath}${poster_path}`,
                sinopse: overview,
                releaseDate: release_date
            }

            setMovie(movie)
        })
    }, [id])
    

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span className="release-date">Release Date: {movie.releaseDate}</span>
                    <span>Sinopse: {movie.sinopse}</span>
                    <Link to="/"><button>Go back</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details;