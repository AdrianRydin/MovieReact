import {useState,useEffect} from "react";
import "./caroussel.css";

function Caroussel() {
  const [trailers, setTrailers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchTrailers = async () => {
      const res = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
      const data = await res.json();
      const shuffled = [...data].sort(() => Math.random() - 0.5); 
      setTrailers(shuffled.slice(0, 5));
    };
    fetchTrailers();
  }, []);

  const rotate = (direction) => {
    setActiveIndex((prev) => {
      if (direction === 'right') {
        return (prev + 1) % trailers.length;
      } else {
        return (prev - 1 + trailers.length) % trailers.length;
      }
    });
  };

  return (
    <section className="trailers">
      <img
        src="./src/assets/icons/arrow-left.svg"
        alt="left navigation arrow"
        className="trailers__arrow trailers__arrow--left"
        onClick={() => rotate('left')}
      />
      <img
        src="./src/assets/icons/arrow-right.svg"
        alt="right navigation arrow"
        className="trailers__arrow trailers__arrow--right"
        onClick={() => rotate('right')}
      />
      <section className="trailers__container">
        {trailers.map((movie, index) => {
          const relativeIndex = (index - activeIndex + trailers.length) % trailers.length;
          return (
            <iframe
              key={movie.imdbID || movie.Title + index}
              className={`trailers__video trailers__video-${relativeIndex + 1}`}
              src={movie.Trailer_link}
              title={movie.Title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          );
        })}
      </section>
    </section>
  );
}


export default Caroussel;