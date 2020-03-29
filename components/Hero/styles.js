import styled from 'styled-components';
import { device } from '../../theme/media';

export const Hero = styled.div`
    padding: 0 6em;
    height: 100vh;
    background-color: ${(props) => props.theme.colours};
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    display: flex;
    align-items: center;

    @media ${device.tablet} {
        padding: 0 3rem;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 8rem;
    color: ${(props) => props.theme.colours.white};
    font-family: ${(props) => props.theme.fonts.heading};
    margin: 0;

    @media ${device.tablet} {
        font-size: 6rem;
    }

    @media ${device.mobileL} {
        font-size: 4rem;
    }
`;

export const HeroText = styled.p`
    color: ${(props) => props.theme.colours.white};
    margin: 1.6rem 0;
    font-size: 2.2rem;

    @media ${device.tablet} {
        font-size: 2rem;
    }

    @media ${device.mobileL} {
        margin: 1rem 0;
        font-size: 1.8rem;
    }

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
