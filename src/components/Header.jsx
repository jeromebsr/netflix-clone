import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getMovies, reqMovieDetails, reqMovieImages, reqUpcomingMovies } from '../features/moviesSlice';
import { useEffect, useState } from 'react';

function Header() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getMovies);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(reqMovieDetails('tv', '60574'))
        dispatch(reqMovieImages('tv', '60574'))

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [dispatch])

    if(isLoading) {
        return <div></div>
    }
    
    return (
        <div>
            <div className="header-container">
                <div className="header-movie-image-logo">
                    <img width="300" src={`https://image.tmdb.org/t/p/original/${data.movieImages.logos[2].file_path}`} /> 
                </div>
                
                <div className="header-description">
                    {data.movieDetails.last_episode_to_air.overview}
                </div>

                <div className="header-buttons">
                    <button><i className="fa-solid fa-play"></i> Lecture</button>
                    <button><i className="fa-solid fa-circle-info"></i> Plus d'infos</button>
                </div>
            </div>
            <img
                className="image-layer"
                src={`https://image.tmdb.org/t/p/original/${data.movieDetails.backdrop_path}`} alt="Couverture du film" 
            /> 
        </div>
    );
}

export default Header;