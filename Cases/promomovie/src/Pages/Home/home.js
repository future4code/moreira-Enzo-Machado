import { APIKey } from "../../config/key";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";
import { MovieList } from "./style";
import { Movie } from "./style";

import Header from "../../components/header";

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        // consumir a api...
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return(
        <div>
            <Header />   
            <Container>
                <MovieList>
                    {movies.map(movie => {
                        return(
                            <Movie key={movie.id}>
                                <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`}/></Link>
                                <span>{movie.title}</span>
                                <p>{movie.release_date}</p>
                            </Movie>
                        )
                    })}
                </MovieList>
            </Container>
        </div>
    )
}

export default Home;