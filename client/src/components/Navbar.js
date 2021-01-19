import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme, mixins, media } from "styles";
import { logout } from "../utils";

// Styled Components
import { Nav } from "styles";

// Icons
import {
  SpotifyIcon,
  GithubIcon,
  UserIcon,
  TrackIcon,
  ArtistIcon,
  GenreIcon,
  LogoutIcon,
  TrendsIcon,
} from "icons";

const Logo = styled.div`
  margin: 2em 0;
  cursor: pointer;
  transition: ${theme.transition};
  border-radius: 50%;

  svg {
    display: block;
  }

  ${media.tablet`
    display: none;
  `}
`;

const SpotifyLogo = styled(Logo)`
  color: ${theme.color.green};
  width: 50px;

  &:hover {
    color: ${theme.color.lightGreen};
  }
`;

const GithubLogo = styled(Logo)`
  color: ${theme.color.gray};
  width: 30px;

  &:hover {
    color: ${theme.color.white};
  }
`;

const Menu = styled.div`
  width: 100%;
  ${mixins.flexColumn}
  ${media.tablet`
    width: 100%;
    ${mixins.flexRow}
    ${mixins.flexSpaceBetween}
  `}
`;

const MenuItem = styled(NavLink)`
  max-height: 25px;
  /*${mixins.flexColumn}*/
  /*${mixins.flexCenter}*/
  display: flex;
  align-items: center;
  color: ${theme.color.lightGray};
  transition: ${theme.transition};
  cursor: pointer;
  margin: 1em 0em 1em 1em;
  text-decoration: none;
  font-size: 11px;
  border-right: 2px solid transparent;

  &.active {
    border-color: ${theme.color.lightGreen};
    color: ${theme.color.white};
    color: ${theme.color.green};
    /*background-color: #18181b;*/
  }

  &:hover {
    color: ${theme.color.white};
    color: ${theme.color.green};
    /*background-color: #18181b;*/
  }

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 0.5em;
    margin-left: 2em;
    margin-right: 2em;
  }

  ${media.tablet`
    flex: 1 1 0;
    padding: 1em 0;
    max-height: 100%;
    border-top: 2px solid transparent;
    border-right: 0;
  `}
`;

const handleLogout = (e) => {
  e.preventDefault();
  console.log("ya");
  logout();
};

function Navbar() {
  return (
    <Nav>
      <SpotifyLogo>
        <SpotifyIcon />
      </SpotifyLogo>

      <Menu>
        <MenuItem exact to="/">
          <UserIcon />
          Profile
        </MenuItem>
        <MenuItem exact to="/top-tracks">
          <TrackIcon />
          Top Tracks
        </MenuItem>
        <MenuItem exact to="/top-artists">
          <ArtistIcon />
          Top Artists
        </MenuItem>
        <MenuItem exact to="/top-genres">
          <GenreIcon />
          Top Genres
        </MenuItem>
        {/* <MenuItem exact to="/sign-out" onClick={handleLogout}>
          <LogoutIcon />
          Logout
        </MenuItem> */}
      </Menu>

      <GithubLogo>
        <GithubIcon />
      </GithubLogo>
    </Nav>
  );
}

export default withRouter(Navbar);
