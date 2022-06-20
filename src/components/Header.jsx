import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, getValue, incrementWithNumber, getPopularMovies, reqPopularMovies } from '../features/moviesSlice';
import { useState, useEffect } from 'react';

function Header() {
    const dispatch = useAppDispatch();
    const data = useAppSelector(getPopularMovies);

    useEffect(() => {
        dispatch(reqPopularMovies())
    }, [])

    console.log(data);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            {
                data.payload.movies.data[0]?.results.map((movie) => console.log(movie))
            }
        </div>
    );
}

export default Header;