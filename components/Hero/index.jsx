import React from 'react';

import * as S from './styles';

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
    </div>
  </S.Hero>
);

export default Hero;
