/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';

import { colors } from '../../styleVariables';

const containerStyles = css(css`
  display: inline-block;
  position: relative;
  background-color: #161d2f;
  font-family: 'Outfit';
`);

const inputStyles = css(css`
  background-color: transparent;
  color: rgb(255, 255, 255);
  border: none;
  border-bottom: 1px solid #5a698f;
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
`);

const errorStyles = css(css`
  position: absolute;
  top: 0;
  right: 0;
  color: ${colors.red.hex};
  font-weight: 300;
  font-size: 13px;
  height: 100%;
  margin: 0;
  margin-right: 1rem;
  padding: 1rem 0;
  box-sizing: border-box;
`);

export default function InputField({
  placeholder,
  type = 'text',
  validate = (_) => true,
  errorText = 'Error happened',
}) {
  const [text, setText] = useState('');

  return (
    <div css={containerStyles}>
      <input
        data-testid="input-field"
        placeholder={placeholder}
        type={type}
        css={[
          inputStyles,
          !validate(text) && css`
            border-bottom: 1px solid ${colors.red.hex};
          `,
        ]}
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      {validate(text) ? undefined : (
        <p data-testid="error-field" css={errorStyles}>
          {errorText}
        </p>
      )}
    </div>
  );
}
