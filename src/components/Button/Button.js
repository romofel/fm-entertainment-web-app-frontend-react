/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function Button() {
  return (
    <button
      css={css`
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
      `}
    >
      Button Component
    </button>
  );
}
