import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/ducks/movieSlice";
import breakPoints from "../breakpoints";
import Carousel from "react-elastic-carousel";
import movieTrailer from "movie-trailer";
import { youtubeParser } from "../functions";
import opts from "../youtubeOpts";
import YouTube from "react-youtube";

const baseUrl = "https://image.tmdb.org/t/p/original";
function Row({ title, fetchUrl, useLargeImg }) {
  const [click, setClick] = useState(false);
  const [videoId, setVideoId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovie({
        fetchLink: fetchUrl,
        title,
      })
    );
  }, [dispatch, fetchUrl]);
  const movies = useSelector((state) => {
    const { movie } = state;
    const {
      trendingMovies,
      actionMovies,
      netflixOriginals,
      topRated,
      horrorMovies,
    } = movie;
    if (title === "Netflix Originals") {
      return netflixOriginals.results;
    } else if (title === "Trending Now") {
      return trendingMovies.results;
    } else if (title === "Top Rated") {
      return topRated.results;
    } else if (title === "Action Movies") {
      return actionMovies.results;
    } else {
      return horrorMovies.results;
    }
  });
  const fetchMovieTrailer = ({ name, original_title, original_name }) => {
    console.log(name || original_title || original_name);
    if (videoId) {
      setVideoId("");
    } else {
      movieTrailer(
        name || original_title || original_name || "",
        (error, response) => {
          if (error) {
            console.log(error);
          }
          console.log(response);
          setVideoId(youtubeParser(response));
        }
      );
    }
  };
  return (
    <RowContainer>
      <h1>{title}</h1>
      <CardsContainer>
        <Carousel breakPoints={breakPoints}>
          {movies?.map((movie) => {
            return (
              <ImageContainer
                key={movie.id}
                styles={useLargeImg ? { height: "250px" } : { height: "100px" }}
                src={
                  useLargeImg
                    ? `${baseUrl}${movie.poster_path}`
                    : `${baseUrl}${movie.backdrop_path}`
                }
                alt=""
                onClick={() => {
                  setClick(!click);
                  fetchMovieTrailer(movie);
                }}
              />
            );
          })}
        </Carousel>
      </CardsContainer>
      <YoutubeContainer>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
      </YoutubeContainer>
    </RowContainer>
  );
}

export default Row;

const RowContainer = styled.div`
  color: white;
  > h1 {
    text-transform: uppercase;
    font-size: 25px;
    padding: 10px 0 0 15px;
  }
`;

const CardsContainer = styled.div`
  color: white;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  button.rec-dot {
    box-shadow: 0 0 1px 2px rgb(189, 188, 188);
  }
  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5);
  }
`;

const ImageContainer = styled.img`
  max-height: ${(props) => props.styles.height};
  object-fit: contain;
  width: 200px;
  margin: 5px;
  :hover {
    transform: scale(1.1);
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;

const YoutubeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
