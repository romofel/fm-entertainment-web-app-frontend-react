import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Global styles={css`${emotionReset}`} />
      <Story />
    </>
  )
];