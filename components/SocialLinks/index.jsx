import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const SocialLink = ({ url, text }) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer" title={`Visit ${text}`}>{text}</a>
  </li>
);

SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const SocialLinks = () => (
  <S.List>
    <SocialLink url="https://github.com/ashleydance" text="Github" />
    <SocialLink url="https://www.linkedin.com/in/ashley-dance/" text="LinkedIn" />
    <SocialLink url="https://twitter.com/ashleydance_" text="Twitter" />
    <SocialLink url="https://www.instagram.com/_ashleydance/" text="Instagram" />
  </S.List>
);

export default SocialLinks;
