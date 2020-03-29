import styled from 'styled-components';
import { device } from '../../theme/media';

export const List = styled.ul`
    padding: 0;
    margin: 2rem 0 0 0;
    list-style: none;
    display: flex;

    @media ${device.mobileL} {
        display: block;
    }

    li {
        @media ${device.mobileL} {
            margin-bottom: 1rem;
            &::after {
                display: none;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }

        &::after {
            content: "-";
            color: ${(props) => props.theme.colours.white};
            margin: 1rem;
        }

        &:last-child::after {
            display: none;
        }
    }

    a {
        color: ${(props) => props.theme.colours.white};
        line-height: 1;
        transition: all 0.2s ease-in-out;

        &:hover,
        &:active,
        &:focus {
            background-color: ${(props) => props.theme.colours.white};
            color: ${(props) => props.theme.colours.orange};
            padding: 0.5rem;
            text-decoration: none;
            outline: none;
        }
    }
`;

export default List;
