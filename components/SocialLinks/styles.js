import styled from 'styled-components';

export const List = styled.ul`
    padding: 0;
    margin: 2rem 0 0 0;
    list-style: none;
    display: flex;

    li {
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
            padding: 5px;
            text-decoration: none;
            outline: none;
        }
    }
`;

export default List;
