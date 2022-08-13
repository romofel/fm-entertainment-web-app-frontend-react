/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css } from "@emotion/react";

const defaultBackground = "https://placehold.co/600x400";

function PlayContainer() {
  return <div data-testid="play-container">PlayContainer</div>;
}

const thumbnailStyles = css`
  width: 255px;
  height: 174px;
  border-radius: 8px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Thumbnail({ background = defaultBackground }) {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      css={thumbnailStyles}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      {onHover && <PlayContainer />}
      {background && (
        <img data-testid="thumbnail-background" src={background} alt="" />
      )}
    </div>
  );
}

