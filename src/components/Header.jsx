import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getMovies, reqUpcomingMovies } from '../features/moviesSlice';
import { useEffect, useState } from 'react';

function Header() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getMovies);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(reqUpcomingMovies()).then(setLoading(false))
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }

    console.log(data);
    return (
        data?.map && data.map((movie) => (
            <div>
                <h2 key={movie.id}>{movie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Couverture du film" />
            </div>
        ))
    );
}

export default Header;