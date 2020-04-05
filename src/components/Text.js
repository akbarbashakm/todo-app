import styled, { css } from 'styled-components';

export const Text = styled.p`
    display: inline-block;
    margin: 8px 0px;
    color: #212323;
    ${props =>
        props.widthSize &&
        css`
            width: ${props.widthSize};
    `};
    ${props =>
        props.isBold &&
        css`
            font-weight: bold;
    `};
    overflow-wrap: break-word;
    ${props =>
        props.completed &&
        css`
            text-decoration: line-through;
    `};
`;