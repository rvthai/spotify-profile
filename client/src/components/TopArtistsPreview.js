import React from "react";
import { Card } from "styles";
import { Link } from "react-router-dom";

import styled from "styled-components";

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

function TopArtistsPreview(props) {
  return (
    <Card>
      <PreviewHeader>
        <h3>Top Artists of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-artists">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <div>
        {props.data.map((artist, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              margin: "1.5em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "1em",
              }}
              src={artist.images[2].url}
              alt="artist-profile-pic"
            />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TopArtistsPreview;
