/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import bookmarkFull from '../../assets/icon-bookmark-full.svg';
import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg';

const componentStyles = ({ backgroundColor = 'rgba(16 20 30 / 50%)' }) => css`
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  border-radius: 5rem;
`;

export default function BookmarkIcon({ isChecked = false }) {
  return <div data-testid="bookmark-icon" css={componentStyles({})}>
    <img src={isChecked ? bookmarkFull : bookmarkEmpty} alt="bookmark svg" />
  </div>
}