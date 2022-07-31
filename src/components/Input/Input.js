/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

export default function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      css={css`
        background-color: #161d2f;
        border: none;
        font-family: 'Outfit';
        font-weight: 300;
        font-size: 15px;
        padding: 1rem;
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}
    />
  );
}
