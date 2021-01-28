import React from "react";

import Logout from "components/Logout";
import { NoUserIcon } from "icons";

import styled from "styled-components";
import { Section, Label } from "styles";
import { mixins, theme } from "styles";

const { color, fontSize } = theme;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const UnknownProfile = styled.div`
  ${mixins.flexCenter}
  border-radius: 50%;
  background: ${color.lightSlateGray};
  width: 200px;
  height: 200px;

  svg {
    width: 100px;
    height: 100px;
    color: ${color.lightGray};
  }
`;

const Overview = styled.div`
  ${mixins.flexRow}
  margin: 2em 0;
`;

const OverviewItem = styled.div`
  ${mixins.flexColumn}
  align-items: center;
  margin: 0 1em;
`;

const Stat = styled.p`
  color: ${color.green};
  font-size: ${fontSize.lg};
  line-height: 1.5em;
`;

function User(props) {
  const { data } = props;

  const avatar = data.user.images[0] ? data.user.images[0].url : null;
  const name = data.user.display_name;

  const followers = data.user.followers.total;
  const following = data.following.artists.total;
  const playlists = data.playlists.total;

  return (
    <Section>
      {avatar ? (
        <Avatar src={avatar} alt="avatar" />
      ) : (
        <UnknownProfile>
          <NoUserIcon />
        </UnknownProfile>
      )}
      <h2>{name}</h2>

      <Logout />

      <Overview>
        <OverviewItem>
          <Stat>{followers}</Stat>
          <Label>FOLLOWERS</Label>
        </OverviewItem>
        <OverviewItem>
          <Stat>{following}</Stat>
          <Label>FOLLOWING</Label>
        </OverviewItem>
        <OverviewItem>
          <Stat>{playlists}</Stat>
          <Label>PLAYLISTS</Label>
        </OverviewItem>
      </Overview>
    </Section>
  );
}

export default User;
