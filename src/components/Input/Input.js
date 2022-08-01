/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

export default function Input({ placeholder }) {
  const [text, setText] = useState('');

  return (
    <input
      data-testid="input-field"
      placeholder={placeholder}
      css={css`
        background-color: #161d2f;
        color: rgb(255, 255, 255);
        border: none;
        border-bottom: 1px solid #5a698f;
        font-family: 'Outfit';
        font-weight: 300;
        font-size: 15px;
        padding: 1rem;
        caret-color: #fc4747;
        &::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        &:focus {
          outline: none;
          border: none;
          border-bottom: 1px solid white;
        }
      `}
      onChange={(event) => setText(event.target.value)}
      value={text}
    />
  );
}
