import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getMovies, reqPopularMovie, reqPopularTv, reqTopRatedTv } from '../features/moviesSlice';

const Carousel = ({ listname, type }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const dispatch = useAppDispatch();
  const data = useAppSelector(getMovies);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
      maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
    }
    
    dispatch(reqPopularMovie());
    dispatch(reqPopularTv());
    dispatch(reqTopRatedTv());

    setTimeout(() => {
      setLoading(false)
    }, 1000)
   
  }, [currentIndex, dispatch]);
  
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        // carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false;
  };

  if(isLoading) {
    return <div></div>
  }

  return (
    <div className="carousel my-12 mx-auto">
      <h2 style={{ paddingLeft: 50 }} className="text-3xl leading-8 font-semibold mb-5 text-white-700">
        {listname}
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data[type].map((movie, index) => (
            movie.backdrop_path ? 
            <div
              key={index}
              className="carousel-item text-center relative w-64 h-64 snap-start"
            >
              <a
                  href=""
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-full aspect-square hidden"
                />
              </a>
              <a
                  href=""
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
              >
                <div className='slider-content-hidden'>
                  <div className='slider-content-img'>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    />
                  </div>
                  <div className="slider-content-body mt-5">
                    <div style={{ marginRight: 200 }}>
                      <i className="fa-2xl fa-solid fa-circle-play text-white"></i>
                      <i className="fa-2xl fa-solid fa-circle-plus"></i>
                      <i className="fa-2xl fa-solid fa-thumbs-up"></i>
                    </div>
                    <div>
                      <i className="fa-2xl fa-solid fa-circle-chevron-down"></i>
                    </div>
                    <div className='pl-2 mt-5 flex flex-row grow'>
                      <p style={{ fontWeight: 500, color: '#46d369' }} className='mr-2'>Recommandé à 95%</p>
                      <p style={{ border: '1px solid white' }} className='pl-2 pr-2 mr-2'>16+</p>
                      <p className='mr-2'>2 h 4 min</p>
                      <small style={{ border: '1px solid white', fontWeight:600 }} className='pl-2 pr-2'>HD</small>
                    </div>
                    <div className='pl-2 mt-5 flex flex-row grow'>
                      <p style={{ fontWeight: 600 }}>Exaltant  Hip-Hop  Coppétition</p>
                    </div>
                  </div>
                </div>
              </a>
            </div> : null
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;