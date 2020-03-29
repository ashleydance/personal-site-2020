import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.fonts.body}
  }
`;

const theme = {
  colours: {
    white: '#ffffff',
    orange: '#f6d365',
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Open Sans, sans-serif',
  },
};

const Page = ({ children, title }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>
        {title}
        {' '}
        - Ashley Dance
      </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@700&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </ThemeProvider>
);

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
