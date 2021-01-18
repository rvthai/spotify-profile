import React from "react";
import styled from "styled-components";
import { Card, theme } from "styles";
import { Link } from "react-router-dom";

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const Card2 = styled(Card)`
  width: 350px;
`;

const Bars = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 25px;
  background-color: ${theme.color.green};
  margin: 0 1rem 1rem 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  display: flex;
  align-items: center;
`;

function TopGenresPreview(props) {
  const ratio = Math.round(props.max / 10) * 10;

  return (
    <Card2>
      <PreviewHeader>
        <h3>Top Genres of All Time</h3>
        <Link style={{ textDecoration: "none" }} to="/top-genres">
          <p>SEE MORE</p>
        </Link>
      </PreviewHeader>
      <Bars>
        {Object.keys(props.data).map((genre, index) => (
          <div key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Bar percentage={(props.data[genre] / ratio) * 75}>
                <p
                  style={{
                    color: "#fff",
                    marginLeft: "0.5em",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {genre}
                </p>
              </Bar>
              <p>{props.data[genre]}%</p>
            </div>
          </div>
        ))}
      </Bars>
    </Card2>
  );
}

export default TopGenresPreview;
