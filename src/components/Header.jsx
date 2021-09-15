import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Header() {
  const [header, setHeader] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setHeader(true);
    } else if (window.scrollY < 100) {
      setHeader(false);
    }
  });

  return (
    <Navbar>
      <HeaderContainer headerColor={header}>
        <NetflixImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
          alt="netflix-logo"
        />
        <TwingImage src="https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_400x400.jpg" />
      </HeaderContainer>
    </Navbar>
  );
}

export default Header;

const Navbar = styled.div``;

const HeaderContainer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.headerColor && "black"};
  transition: all 0.3s ease-in;
  z-index: 999;
`;

const NetflixImage = styled.img`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 90px;
  object-fit: contain;
`;

const TwingImage = styled.img`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 30px;
  object-fit: contain;
`;
