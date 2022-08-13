/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css } from "@emotion/react";

const defaultBackground = "https://placehold.co/600x400";

const playContainerStyles = css`
  background-color: rgba(0 0 0 / 50%);
  width: 100%;
  height: 100%;
`;

export function PlayContainer() {
  return <div css={playContainerStyles} data-testid="play-container"></div>;
}

const thumbnailStyles = css`
  position: relative;
  width: 255px;
  height: 174px;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 255px;
      height: 174px;
      background-color: rgb(0 0 0 / 50%);
    }
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Thumbnail({ background = defaultBackground }) {
  return (
    <div css={thumbnailStyles}>
      {background && (
        <img data-testid="thumbnail-background" src={background} alt="" />
      )}
    </div>
  );
}

