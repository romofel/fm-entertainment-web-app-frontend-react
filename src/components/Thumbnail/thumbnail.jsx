/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css } from "@emotion/react";
import playIcon from "../../assets/icon-play.svg";

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

  .thumbnail-overlay {
    display: none;
  }

  &:hover {
    & .thumbnail-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 255px;
      height: 174px;
      background-color: rgb(0 0 0 / 50%);
    }
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const playerContainerStyles = css`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 117px;
  height: 48px;
  padding: 12px;
  box-sizing: border-box;
  background-color: rgba(255 255 255 / 25%);
  border-radius: 28.5px;
  color: white;
  font-family: "Outfit";
  font-size: 18px;
  font-weight: 500;

  & > img {
    width: 30px;
    height: 30px;
  }
`;

function PlayerContainer() {
  return (
    <div css={playerContainerStyles}>
      <img src={playIcon} alt="play icon" />
      <span>Play</span>
    </div>
  );
}

export default function Thumbnail({ background = defaultBackground }) {
  return (
    <div css={thumbnailStyles}>
      <div className="thumbnail-overlay">
        <PlayerContainer />
      </div>
      {background && (
        <img data-testid="thumbnail-background" src={background} alt="" />
      )}
    </div>
  );
}
