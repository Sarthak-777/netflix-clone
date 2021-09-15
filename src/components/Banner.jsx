import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [bannerMovie, setBannerMovie] = useState([]);
  const randomMovie = useSelector((state) => {
    const { movie } = state;
    const { netflixOriginals } = movie;
    const { results } = netflixOriginals;
    const randomBannerMovie = (min, max) => {
      return Math.floor(Math.random() * (max - 1));
    };
    const bannerMovie =
      results && results[randomBannerMovie(0, results?.length)];
    return bannerMovie;
  });

  return (
    <BannerContainer>
      <ContentContainer backgroundImage={baseUrl + randomMovie?.backdrop_path}>
        <Content>
          <h1>{randomMovie?.original_title || randomMovie?.original_name}</h1>
          <ButtonContainer>
            <button>Play</button>
            <button>My List</button>
          </ButtonContainer>
          <p>{randomMovie?.overview}</p>
        </Content>
        <FadeBottom />
      </ContentContainer>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  color: white;
  height: 448px;
  object-fit: contain;
`;

const ContentContainer = styled.div`
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
`;

const ButtonContainer = styled.div`
  > button {
    padding: 8px 1.5rem 8px 1.5rem;
    background-color: rgba(51, 51, 51, 0.5);
    color: #fff;
    font-size: 15px;
    border: none;
    font-weight: 700;
    margin-right: 15px;
    :hover {
      background-color: #fff;
      transition: all 0.3s ease-in;
      color: #111;
    }
  }
`;

const Content = styled.div`
  margin-left: 70px;
  padding-top: 100px;
  width: 600px;
  height: 25vh;
  > h1 {
    font-size: 45px;
  }
`;

const FadeBottom = styled.div`
  height: 8.5rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
