
function SliderContent({ movie, index }) {
    return (
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
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {movie.title}
                </h3>
            </a>
        </div>
    );
}

export default SliderContent;