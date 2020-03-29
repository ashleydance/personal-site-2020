import React from 'react';

import * as S from './styles';
import SocialLinks from '../SocialLinks';

const Hero = () => (
  <S.Hero>
    <div>
      <S.HeroTitle>Ashley Dance</S.HeroTitle>
      <S.HeroText>
        Frontend Engineer at
        {' '}
        <a href="https://www.gymshark.com/" target="_blank" rel="noopener noreferrer" title="Visit Gymshark.com">
          Gymshark
        </a>
      </S.HeroText>
      <SocialLinks />
    </div>
  </S.Hero>
);

export default Hero;
