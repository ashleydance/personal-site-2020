import styled from 'styled-components';

export const Hero = styled.div`
    padding: 0 6em;
    height: 100vh;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
    display: flex;
    align-items: center;
`;

export const HeroTitle = styled.h1`
    font-size: 8rem;
    color: ${(props) => props.theme.colours.white};
    font-family: ${(props) => props.theme.fonts.heading};
    margin: 0;
`;

export const HeroText = styled.p`
    color: ${(props) => props.theme.colours.white};
    margin: 1.6rem 0 0 0;
    font-size: 2.2rem;

    a {
        color: ${(props) => props.theme.colours.white};
        transition: all 0.2s ease-in-out;

        &:hover,
        &:active,
        &:focus {
            background-color: ${(props) => props.theme.colours.white};
            color: ${(props) => props.theme.colours.orange};
            text-decoration: none;
            padding: 1rem;
            outline: none;
        }
    }
`;

export default Hero;
