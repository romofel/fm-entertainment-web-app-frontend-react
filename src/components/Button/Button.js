/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const defaultStyles = css(css`
  display: block;
  background-color: #fc4747;
  color: white;
  font-family: 'Outfit';
  font-weight: 300;
  font-size: 15px;
  padding: 1rem 6rem;
  border-radius: 0.375rem;
  border: none;
  &:hover {
    color: #161d2f;
    background-color: white;
  }
`);

const disabledStyles = css(css`
  background-color: grey;
  &:hover {
    background-color: grey;
    color: white;
  }
`);

export default function Button({ text, isDisabled }) {
  return (
    <button
      onClick={() => console.log('test')}
      disabled={isDisabled}
      css={isDisabled ? [defaultStyles, disabledStyles] : defaultStyles}
    >
      {text}
    </button>
  );
}
